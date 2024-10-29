import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { Observable } from 'rxjs';
import { Response } from '../Models/response';
import { FormResponse } from '../Models/formResponse';
import { UserRecord } from '../Models/userRecord';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private apiUrl = 'https://api.upulkumarapperuma.xyz/api/Election';

  constructor(private http: HttpClient) {}

  submitForm(formData: Form): Observable<Response<Form>> {
    // console.log(JSON.stringify(formData))
    return this.http.post<Response<Form>>(`${this.apiUrl}`,formData);
  }

  getForm(pageId:number):Observable<FormResponse<UserRecord[]>>{
    return this.http.get<FormResponse<UserRecord[]>>(`${this.apiUrl}/form-details/${pageId}`)
  }


}
