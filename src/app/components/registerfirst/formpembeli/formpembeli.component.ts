import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';
import { mimeType } from './mime-type.validator';
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
  imgData: any;
  choosenimg = false;
  videoFile = '';
  videoData: any;
  choosenvideo: any;

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
          nama_pembeli: data.nama_pembeli,
          nomor_polisi: data.nomor_polisi,
          merk_mobil: data.merk_mobil,
          no_invoice: data.no_invoice,
          deskripsi: data.deskripsi
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
      nomor_polisi: ['', Validators.required],
      merk_mobil: ['', Validators.required],
      no_invoice: ['', Validators.required],
      deskripsi: [''],
      image: ['', { validators: Validators.required, asyncValidators: [mimeType] }],
      video: [''],
    });
  }

  onImageChange(event: any): void {
    const reader = new FileReader();
    if (event.target.value) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imgFile = reader.result as string;
      };
      this.imgData = (event.target.files[0] as File);
      this.choosenimg = true;
    }
  }

  onSubmitImage(): void {
    const fd = new FormData();
    if (this.imgData) {
      fd.append('image', this.imgData, this.imgData.name);
      this.apiService.updatePembeliImage(this.idqrcode, fd)
        .subscribe(
          (res: any) => {
            Swal.fire({
              text: 'Foto berhasil di upload!',
              confirmButtonText: `Kembali`,
            })
              .then((_) => {
              });
          },
          () => {
            Swal.fire({
              icon: 'error',
              title: 'Terjadi Kesalahan',
              text: 'Silahkan isi kembali data dengan benar!',
              confirmButtonText: `Kembali`,
            }).then((_) => {
            });
          }
        );
    }
  }

  onVideoChange(event: any): void {
    const reader = new FileReader();
    if (event.target.value) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.videoFile = reader.result as string;
      };
      this.videoData = (event.target.files[0] as File);
      this.choosenvideo = true;
    }
  }

  onSubmitVideo(): void {
    const fd = new FormData();
    if (this.videoData) {
      fd.append('video', this.videoData, this.videoData.name);
      this.apiService.updatePembeliVideo(this.idqrcode, fd)
        .subscribe(
          (res: any) => {
            Swal.fire({
              text: 'Video berhasil di upload!',
              confirmButtonText: `Kembali`,
            })
              .then((_) => {
              });
          },
          () => {
            Swal.fire({
              icon: 'error',
              title: 'Terjadi Kesalahan',
              text: 'Silahkan isi kembali data dengan benar!',
              confirmButtonText: `Kembali`,
            }).then((_) => {
            });
          }
        );
    }
  }

  onSubmit(formData: any): void {
    const namapembeli = formData.nama_pembeli;
    const nomorpolisi = formData.nomor_polisi;
    const merkmobil = formData.merk_mobil;
    const noinvoice = formData.no_invoice;
    const deskripsi = formData.deskripsi;

    this.isSubmitted = true;
    this.isLoading = true;
    if (this.pembeliForm.invalid) {
      this.isLoading = false;
      this.isUnvalidated = true;
      return;
    }

    this.apiService.updatePembeli(this.idqrcode, namapembeli, nomorpolisi, merkmobil, noinvoice, deskripsi)
      .subscribe(
        (res: any) => {
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
        (err: any) => {
          this.isLoading = false;
          this.isUnvalidated = true;
          Swal.fire({
            icon: 'error',
            title: 'Terjadi Kesalahan',
            text: 'Silahkan isi kembali data dengan benar!',
            confirmButtonText: `Kembali`,
          }).then((_) => {

          });
        }
      );
  }
}
