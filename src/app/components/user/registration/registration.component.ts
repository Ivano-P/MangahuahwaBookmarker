import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, ReactiveFormsModule, ValidatorFn, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  constructor(public formBuilder: FormBuilder) {}
  isSubmitted:boolean = false;
   passwordMatchValidator: ValidatorFn = (control:AbstractControl): null =>{
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password && confirmPassword && password.value != confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
    }else
      confirmPassword?.setErrors({passwordMismatch: null});
    return null;
  }

  form = this.formBuilder.group({
    username: ['',[Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(16)]],
    email: ['',[Validators.required,
                  Validators.email]],
    password: ['',[Validators.required,
                    Validators.minLength(6),
                    Validators.pattern(/(?=.*[^a-zA-Z0-9 ])/)]],
    confirmPassword: [''],
  },{validators: this.passwordMatchValidator});

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.form.value);
  }

  hasDisplayableError(controlName: string): boolean {
    const control = this.form.get(controlName);
    return Boolean(control?.invalid) &&
      (this.isSubmitted || Boolean(control?.touched));
  }
}
