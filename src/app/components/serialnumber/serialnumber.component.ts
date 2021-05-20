import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serialnumber',
  templateUrl: './serialnumber.component.html',
  styleUrls: ['./serialnumber.component.scss']
})
export class SerialnumberComponent implements OnInit {

  serialNumberForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
    console.log(this.serialNumberForm);
  }

  createForm(): void {
    this.serialNumberForm = this.fb.group({
      serial_number: ['', Validators.required]
    });
  }

  onSubmit(formData: any): void {
    const serialnumber = formData.serial_number;

    console.log(serialnumber);
    this.router.navigate(['/bengkel']);
  }

}
