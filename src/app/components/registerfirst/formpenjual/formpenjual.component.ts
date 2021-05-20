import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-formpenjual',
    templateUrl: './formpenjual.component.html',
    styleUrls: ['./formpenjual.component.scss']
})
export class FormPenjualComponent implements OnInit {

    bengkelForm!: FormGroup;

    constructor(private fb: FormBuilder, private router: Router) { }

    ngOnInit(): void {
        this.createForm();
        console.log(this.bengkelForm);
    }

    createForm(): void {
        this.bengkelForm = this.fb.group({
            nama_bengkel: ['', Validators.required],
            alamat_bengkel: ['', Validators.required],
            pemilik_bengkel: ['', Validators.required]
        });
    }

    onSubmit(formData: any): void {
        const nama = formData.nama_bengkel;
        const alamat = formData.alamat_bengkel;
        const pemilik = formData.pemilik_bengkel;

        console.log(nama, alamat, pemilik);
        this.router.navigate(['/welcome']);
    }

}
