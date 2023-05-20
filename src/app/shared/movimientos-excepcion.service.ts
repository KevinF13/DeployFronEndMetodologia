import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovimientosExcepcionService {
  private url = 'https://apimetodologias.azurewebsites.net/api/Api/MovimientosExcepcion1y2';

  constructor(private http: HttpClient) { }

  getMovimientosExcepcion(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
