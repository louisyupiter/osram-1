import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';
import Swal from 'sweetalert2';

declare const $: any;

@Component({
  selector: 'app-formpembeli',
  templateUrl: './formpembeli.component.html',
  styleUrls: ['./formpembeli.component.scss']
})
export class FormpembeliComponent implements OnInit {

  idqrcode: any;
  isUnvalidated = false;
  isLoading = false;
  isSubmitted = false;

  pembeliForm!: FormGroup;
  imgFile = '';
  videoFile = '';

  arrmask: any[] = [];
  arrmask2: any[] = [];

  maskconfig = {
    guide: false,
    showMask: false,
    mask: this.arrmask
  };

  maskconfig2 = {
    guide: false,
    showMask: false,
    mask: this.arrmask2
  };

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.idqrcode = this.activatedRoute.snapshot.paramMap.get('idqrcode');

    this.apiService.getPembeli(this.idqrcode).subscribe(
      (res: any) => {
        this.isLoading = false;
        const data = res.data;
        this.pembeliForm.patchValue({
          nama_pembeli: data.nama_bengkel,
          no_pol: data.no_pol,
          merk_mobil: data.merk_mobil,
          no_invoice: data.no_invoice,
          description: data.description
        });
      },
      err => {
        this.isLoading = true;
        setTimeout(() => {
          this.isLoading = false;
          Swal.fire({
            icon: 'error',
            title: 'Terjadi Kesalahan',
            text: 'Data tidak ditemukan!',
            confirmButtonText: `Isi Ulang Serial Number`,
          }).then((_) => {
            this.router.navigate(['/']);
          });
        }, 1000);
      }
    );

    this.createForm();
    this.mask();
    this.mask2();

    $('.btn-upload.upload-foto').click(() => {
      $('input#foto').click();
    });
    $('.btn-upload.upload-video').click(() => {
      $('input#video').click();
    });

  }

  mask(): any {
    for (let i = 0; i < 9; i++) {
      this.arrmask.push(/[a-zA-Z0-9_ ]/);
    }
    return this.arrmask;
  }

  mask2(): any {
    for (let i = 0; i < 30; i++) {
      this.arrmask2.push(/[a-zA-Z0-9_]/);
    }
    return this.arrmask2;
  }

  get formControls(): any {
    return this.pembeliForm.controls;
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
    // const serialnumber = formData;
    // console.log(serialnumber);

    this.isSubmitted = true;
    this.isLoading = true;
    if (this.pembeliForm.invalid) {
      this.isLoading = false;
      this.isUnvalidated = true;
      return;
    }

    console.log(this.pembeliForm.value);

    this.apiService.updatePembeli(this.idqrcode, this.pembeliForm.value)
      .subscribe(
        (res) => {
          this.isLoading = false;
          this.isUnvalidated = false;
          Swal.fire({
            text: 'Terima kasih sudah mendaftar!',
            confirmButtonText: `Kembali ke beranda`,
          })
            .then((result) => {
              console.log(result);
              setTimeout(() => {
                this.router.navigate(['/welcome/' + this.idqrcode]);
              }, 1000);

            });
        },
        (err) => {
          this.isLoading = false;
          this.isUnvalidated = true;
        }
      );
  }
}
