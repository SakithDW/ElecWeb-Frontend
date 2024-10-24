import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Division } from '../Models/division';
import { Response } from '../Models/response';

@Injectable({
  providedIn: 'root',
})
export class DivisionService {
  private apiUrl = 'http://upul.ebill.lk/api/Election';

  constructor(private http: HttpClient) {}

  getDivision(): Observable<Response<Division[]>> {
    return this.http.get<Response<Division[]>>(this.apiUrl);
  }
}
