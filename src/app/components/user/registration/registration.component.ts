import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AuthService} from "../../../Services/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  constructor(public formBuilder: FormBuilder,
              private service: AuthService,
              private toastr:ToastrService) {}
  isSubmitted:boolean = false;
  passwordMatchValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    const password = group.get('password');
    const confirmPassword = group.get('confirmPassword');

    if (!password || !confirmPassword) return null;

    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
    } else {
      // ⚠️ Clear only the passwordMismatch error (preserve others)
      if (confirmPassword.hasError('passwordMismatch')) {
        confirmPassword.setErrors(null);
      }
    }

    return null;
  }

  form = this.formBuilder.group({
    username: ['',[Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(25)]],
    email: ['',[Validators.required,
                  Validators.email]],
    password: ['',[Validators.required,
                    Validators.minLength(6),
                    Validators.pattern(/(?=.*[^a-zA-Z0-9 ])/)]],
    confirmPassword: [''],
  },{validators: this.passwordMatchValidator});

  onSubmit() {
    this.isSubmitted = true;
    if(this.form.valid) {
      this.service.createUser(this.form.value).subscribe({
        next:(res:any)=> {
          if (res.succeeded){
            this.form.reset();
            this.isSubmitted = false;
            this.toastr.success('New user created', 'registration successful',)
          }
          // Handle successful response here, e.g., navigate to login or user profile
        },
        error: err => {
          console.error('Error creating user:', err);
          // Handle error response here
        }
      });

    }else {
      console.warn('Form is invalid:', this.form);
      console.warn('Form errors:', this.form.errors);
      Object.keys(this.form.controls).forEach(key => {
        const control = this.form.get(key);
        console.warn(`Control: ${key}`, control?.errors);
      });
    }

  }

  hasDisplayableError(controlName: string): boolean {
    const control = this.form.get(controlName);
    return Boolean(control?.invalid) &&
      (this.isSubmitted || Boolean(control?.touched));
  }
}
