import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpEvent,HttpRequest} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ResponseDto } from '../models/response';
import { Form } from '@angular/forms';
import { Consulta } from '../models/consulta';
@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {
  Peurl='http://localhost:8083';
  httpOptions  = {headers : new HttpHeaders({'Content-Type':'application/json'})}
  constructor(private http:HttpClient) { }

  public list(limit:number,offset:number,ciudad:string,especialidad:string):Observable<ResponseDto> {
    return this.http.get<ResponseDto>(this.Peurl+`/veterinario?limit=${limit}&offset=${offset}&ciudad=${ciudad}&especialidad=${especialidad}`,this.httpOptions);
  }

  public especialidades():Observable<ResponseDto> {
    return this.http.get<ResponseDto>(this.Peurl+`/especialidad`,this.httpOptions);
  }

  public ciudades():Observable<ResponseDto> {
    return this.http.get<ResponseDto>(this.Peurl+`/ciudad`,this.httpOptions);
  }

  public registrar(consulta:Consulta):Observable<ResponseDto> {
    return this.http.post<any>(this.Peurl+`/consulta`,consulta);
  }

}
