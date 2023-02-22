import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Accountinfo } from './accountinfo';

@Injectable({
  providedIn: 'root',
})
export class AccountserviceService {
  url = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  createaccount(accinfo: any): Observable<any> {
    return this.http.post<any>(this.url + 'api/register', accinfo);
  }
}
