import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {AuthService} from "../../../Services/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, NgIf, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public formBuilder: FormBuilder,
              private service: AuthService,
              private router: Router,
              private toastr:ToastrService) {}

  isSubmitted:boolean = false;

  form = this.formBuilder.group({
    email: ['',Validators.required],
    password: ['',Validators.required]
  });

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.valid) {
      this.service.signin(this.form.value).subscribe({
        next:(res:any) => {
          localStorage.setItem('token', res.token); //this stores the token in localStorage
          this.router.navigateByUrl('/bookmarker');//Navigate to bookmarker after successful login
        },
        error:(err:any) => {
          if(err.status == 400) this.toastr.error('Invalid email or password', 'Login Error');
          else console.error('Login failed', err);
        }
      })
      console.log('Form Submitted', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }

  hasDisplayableError(controlName: string): boolean {
    const control = this.form.get(controlName);
    return Boolean(control?.invalid) &&
      (this.isSubmitted || Boolean(control?.touched) || Boolean(control?.dirty));
  }

}
