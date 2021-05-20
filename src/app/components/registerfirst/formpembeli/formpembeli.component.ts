import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

declare const $: any;

@Component({
  selector: 'app-formpembeli',
  templateUrl: './formpembeli.component.html',
  styleUrls: ['./formpembeli.component.scss']
})
export class FormpembeliComponent implements OnInit {

  pembeliForm!: FormGroup;
  imgFile = '';
  videoFile = '';

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.createForm();

    $('.btn-upload.upload-foto').click(() => {
      $('input#foto').click();
    });
    $('.btn-upload.upload-video').click(() => {
      $('input#video').click();
    });

  }
  createForm(): void {
    this.pembeliForm = this.fb.group({
      nama_pembeli: ['', Validators.required],
      no_pol: ['', Validators.required],
      merk_mobil: ['', Validators.required],
      no_invoice: ['', Validators.required],
      description: [''],
      foto: ['', Validators.required],
      video: [''],
    });
  }

  onImageChange(event: any): void {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imgFile = reader.result as string;
        this.pembeliForm.patchValue({
          foto: reader.result
        });
      };
    }
  }

  onVideoChange(event: any): void {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.videoFile = reader.result as string;
        this.pembeliForm.patchValue({
          video: reader.result
        });

      };
    }
  }

  onSubmit(formData: any): void {
    const serialnumber = formData;
    console.log(serialnumber);

    Swal.fire({
      text: 'Terima kasih sudah mendaftar!',
      confirmButtonText: `Kembali ke beranda`,
    })
      .then((result) => {
        console.log(result);

        setTimeout(() => {
          this.router.navigate(['/welcome']);
        }, 1000);

      });
  }

}
