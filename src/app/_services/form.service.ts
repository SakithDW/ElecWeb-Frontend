import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { Observable } from 'rxjs';
import { Response } from '../Models/response';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private apiUrl = 'https://upulapi.ebill.lk/api/Election';

  constructor(private http: HttpClient) {}

  submitForm(formData: Form): Observable<Response<Form>> {
    console.log(JSON.stringify(formData))
    return this.http.post<Response<Form>>(`${this.apiUrl}`,formData);
  }
}
