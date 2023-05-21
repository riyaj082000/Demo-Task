import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm: FormGroup
  constructor(formbuilder: FormBuilder,
    private router: Router,
    //  private loginSignupService: LoginSignupService
     ) {

    this.loginForm = formbuilder.group({
      email: ['',Validators.compose([Validators.required,Validators.email])],
      password: ['', Validators.compose([Validators.required,Validators.minLength(5),
      Validators.maxLength(8)])]
    })
  }
  ngOnInit() {

  }

  onSubmit() {
  console.log("here")
    this.router.navigateByUrl('/header');
    // this.loginSignupService.login().subscribe((res) => {

    //   const user = res.find((a: any) => {
    //     return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
    //   });
    //   if (user) {
    //     this.loginForm.reset()
    //     this.router.navigate(['/product'])
    //   } else {
    //     alert("user not found");
    //     this.loginForm.reset()
    //   }
    // })
  }
}
