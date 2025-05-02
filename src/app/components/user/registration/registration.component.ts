import { Component } from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  constructor(public formBuilder: FormBuilder) {}

  form = this.formBuilder.group({
    username: [''],
    email: [''],
    password: [''],
    confirmPassword: [''],
  })
  protected readonly onsubmit = onsubmit;

  onSubmit() {
    console.log(this.form.value);
  }
}
