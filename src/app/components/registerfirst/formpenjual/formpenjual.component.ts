import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-formpenjual',
    templateUrl: './formpenjual.component.html',
    styleUrls: ['./formpenjual.component.scss']
})
export class FormPenjualComponent implements OnInit {

    idqrcode: any;
    isUnvalidated = false;
    isLoading = false;
    isSubmitted = false;
    bengkelForm!: FormGroup;

    arrmask: any[] = [];

    maskconfig = {
        guide: false,
        showMask: false,
        mask: this.arrmask
    };

    constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private router: Router, private apiService: ApiService) { }

    ngOnInit(): void {
        this.isLoading = true;
        this.idqrcode = this.activatedRoute.snapshot.paramMap.get('idqrcode');

        this.apiService.getPembeli(this.idqrcode).subscribe((res: any) => {
            if (res.data.nama_pembeli !== '') {
                this.router.navigate(['/welcome/' + this.idqrcode]);
            }
        });

        this.apiService.getPenjual(this.idqrcode).subscribe(
            (res: any) => {
                this.isLoading = false;
                this.bengkelForm.patchValue({
                    nama_bengkel: res.data.nama_bengkel,
                    alamat_bengkel: res.data.alamat_bengkel,
                    pemilik_bengkel: res.data.pemilik_bengkel
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
    }

    mask(): any {
        for (let i = 0; i < 30; i++) {
            this.arrmask.push(/[a-zA-Z0-9_ ]/);
        }
        return this.arrmask;
    }

    get formControls(): any {
        return this.bengkelForm.controls;
    }

    createForm(): void {
        this.bengkelForm = this.fb.group({
            nama_bengkel: ['', Validators.required],
            alamat_bengkel: ['', Validators.required],
            pemilik_bengkel: ['', Validators.required]
        });
    }

    onSubmit(formData: any): void {
        // const nama_bengkel = formData.nama_bengkel;
        // const alamat_bengkel = formData.alamat_bengkel;
        // const pemilik_bengkel = formData.pemilik_bengkel;
        this.isSubmitted = true;
        this.isLoading = true;
        if (this.bengkelForm.invalid) {
            this.isLoading = false;
            this.isUnvalidated = true;
            return;
        }
        this.apiService.updatePenjual(this.idqrcode, this.bengkelForm.value).subscribe(
            (res) => {
                // console.log(res);
                this.isLoading = false;
                this.isUnvalidated = false;
                this.router.navigate(['/welcome/' + this.idqrcode]);
            },
            (err) => {
                // console.log(err);
                this.isLoading = false;
                this.isUnvalidated = true;
            }
        );

    }

}
