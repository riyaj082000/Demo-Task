import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  constructor(formbuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.registerForm = formbuilder.group({
      firstName: [''],
      lastName: [''],
      streetAddress1: [''],
      streetAddress2: [''],
      zipCode: [''],
      city: [''],
      state: [''],
      primaryPhoneNumber: [''],
      alternatePhoneNumber: [''],
      fax:[''],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      userName: [''],
      password: ['', Validators.compose([Validators.required,
      Validators.maxLength(8)])],
      reEnterPassword: ['']
    })
  }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.registerForm.value)
  }
}
