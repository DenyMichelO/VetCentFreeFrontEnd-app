import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpEvent,HttpRequest} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ResponseDto } from '../models/response';
import { Mascota } from '../models/mascota';
@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  Peurl='http://localhost:8083';
  httpOptions  = {headers : new HttpHeaders({'Content-Type':'application/json'})}
  constructor(private http:HttpClient) { }

  public registrar(mascota:Mascota):Observable<ResponseDto> {
    return this.http.post<any>(this.Peurl+`/mascota`,mascota);
  }
  public Especie():Observable<ResponseDto> {
    return this.http.get<ResponseDto>(this.Peurl+`/especie`,this.httpOptions);
  }

  public Raza():Observable<ResponseDto> {
    return this.http.get<ResponseDto>(this.Peurl+`/raza`,this.httpOptions);
  }
  
  public Color():Observable<ResponseDto> {
    return this.http.get<ResponseDto>(this.Peurl+`/color`,this.httpOptions);
  }

  upload(file:File):Observable<any>{
    const formData=new FormData();
    formData.append('files',file);
    return  this.http.post<any>(this.Peurl+`/upload`,formData);
  }
}
