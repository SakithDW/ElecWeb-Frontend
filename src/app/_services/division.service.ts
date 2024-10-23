import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Division } from '../Models/division';

@Injectable({
  providedIn: 'root',
})
export class DivisionService {
  private apiUrl = 'http://localhost:3000/api/divisions';

  constructor(private http: HttpClient) {}

  getDivision(): Observable<Division[]> {
    return this.http.get<Division[]>(this.apiUrl);
  }
}
