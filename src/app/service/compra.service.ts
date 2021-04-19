import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'https://localhost:44389/Compra';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(private httpClient: HttpClient) { }

  obtener(): Observable<any> {
    return this.httpClient.get(baseURL);
  }

  obtenerDetalle(id): Observable<any> {
    return this.httpClient.get(`${baseURL}/VerDetalle?id=${id}`);
  }

  crear(data): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }

  actualizar(data): Observable<any> {
    return this.httpClient.put(baseURL, data);
  }

  eliminar(id): Observable<any> {
    return this.httpClient.delete(`${baseURL}/Eliminar?id=${id}`);
  }
}
