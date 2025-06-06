import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, NgIf, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public formBuilder: FormBuilder) {}
  isSubmitted:boolean = false;

  form = this.formBuilder.group({
    email: ['',Validators.required],
    password: ['',Validators.required]
  });

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.valid) {
      // Handle login logic here, e.g., call an authentication service
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
