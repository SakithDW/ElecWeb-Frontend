import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Division } from '../Models/division';

@Injectable({
  providedIn: 'root',
})
export class DivisionService {
  private apiUrl = 'http://15.235.143.109:5000/api/Election';

  constructor(private http: HttpClient) {}

  getDivision(): Observable<Division[]> {
    return this.http.get<Division[]>(this.apiUrl);
  }
}
