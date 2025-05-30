import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {}
  baseURL = 'https://localhost:44388/api';
  createUser(formData: any) {
    return this.http.post(this.baseURL+'/signup', formData);
  }

}
