import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Usuario } from '../models/usuario.model';

const url=AppSettings.API_ENDPOINT+'/util'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient ) { }

  actualiza(obj:Usuario):Observable<any>{
    return this.http.put(url+ "/actualizaUser", obj);
}
}
