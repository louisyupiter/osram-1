import { Component, OnInit } from '@angular/core';
import * as kjua from 'kjua-svg';
import jsPDF from 'jspdf';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent implements OnInit {

  qrForm!: FormGroup;

  sn: any[] = [];
  numbers: any[] = [];
  progressVal = 0;
  progressMax = 50;
  url = '';
  imgFile = '';

  startTime = 0;
  timeSingleCode = 0;

  // pdf
  columnsPerPage = 4;
  rowsPerPage = 8;
  pageWidth = 210;
  pageHeight = 297;
  // Avery 3490
  cellWidth = 36;
  cellHeight = 36;
  borderTopBottom = ((this.pageHeight - (this.rowsPerPage * this.cellHeight)) / 2);

  static getBarcodeData(texts: string, images: string, serialnumber: string, sizes = 400): any {
    return kjua({
      render: 'canvas',
      crisp: true,
      minVersion: 1,
      ecLevel: 'Q',
      size: sizes,
      ratio: undefined,
      fill: '#333333',
      back: '#ffffff',
      // text: `${texts}/${serialnumber}`,
      text: `https://osramindonesia.com/${serialnumber}`,
      rounded: 0,
      quiet: 5,
      mode: 'labelimage',
      mSize: [5],
      mPosX: [50],
      mPosY: [100],
      // label: `${texts}/${serialnumber}`,
      label: `osramindonesia.com/${serialnumber}`,
      fontname: 'Helvetica',
      fontcolor: '#ff9818',
      image: images
    });
  }

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.qrForm = this.fb.group({
      website: [''],
      generate_number: ['1'],
      img: ['']
    });
  }

  onImageChange(event: any): void {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imgFile = reader.result as string;
        console.log(this.imgFile);
        this.qrForm.patchValue({
          img: reader.result
        });
      };
    }
  }

  onSubmit(formData: any): void {
    const generatenumber = formData.generate_number;
    this.url = formData.website;
    this.imgFile = formData.img;
    this.numbers = Array.from({ length: generatenumber }, (_, i) => i);
    this.progressMax = generatenumber;

    for (let i = 0; i < generatenumber; i++) {
      this.apiService.createQrcode().subscribe(
        (res: any) => {
          this.sn = res.data.serial_number;
        }
      );
    }

    this.generatePDF();
  }

  generatePDF(serial = '', index = 0, document = new jsPDF(), colPos = 0, rowPos = 0): void {
    if (index === 0) {
      this.startTime = new Date().getTime();
    }
    this.timeSingleCode = (new Date().getTime() - this.startTime) / index;

    this.progressVal = index + 1;

    const barcodeData = QrcodeComponent.getBarcodeData(this.url, this.imgFile, serial);
    console.log(barcodeData);
    const x = ((this.pageWidth / this.columnsPerPage) / 2) - (this.cellWidth / 2) + (colPos * (this.pageWidth / this.columnsPerPage));
    const y = this.borderTopBottom + (rowPos * this.cellHeight) + 1;
    document.addImage(barcodeData, 'JPG', x, y, this.cellWidth - 2, this.cellHeight - 2);
    // document.setFont('Helvetica');
    // document.setFontSize(9);
    // document.text(this.url, 33, 42, { align: 'center' });
    // document.text('S/N: OSY12345678', 33, 45, { align: 'center' });
    colPos++;
    if (colPos >= this.columnsPerPage) {
      colPos = 0;
      rowPos++;
    }
    if (rowPos >= this.rowsPerPage && index < this.progressMax - 1) {
      rowPos = 0;
      colPos = 0;
      document.addPage();
    }

    if (index === this.progressMax - 1) {

      document.save(`QR-Codes.pdf`);
    } else {
      requestAnimationFrame(() => this.generatePDF(serial, index + 1, document, colPos, rowPos));
    }
  }

}
