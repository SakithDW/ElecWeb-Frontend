import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private apiUrl = 'http://15.235.143.109:5000/api/Election';

  constructor(private http: HttpClient) {}

  submitForm(formData: any): Observable<any> {
    debugger;
    console.log(JSON.stringify(formData))
    return this.http.post(`${this.apiUrl}`,formData);
  }
}
