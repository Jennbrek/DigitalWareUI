import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'https://localhost:44389/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient: HttpClient) { }

  obtener(): Observable<any> {
    return this.httpClient.get(baseURL);
  }
}
