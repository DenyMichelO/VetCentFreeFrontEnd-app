import { Component, OnInit } from '@angular/core';
import { Veterinario } from '../models/veterinario';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DomSanitizer } from '@angular/platform-browser';
import { VeterinarioService } from '../service/veterinario.service';
import { Especialidad } from '../models/especialidad';
import { Ciudad } from '../models/ciudad';
@Component({
  selector: 'app-veterinario',
  templateUrl: './veterinario.component.html',
  styleUrls: ['./veterinario.component.css']
})
export class VeterinarioComponent implements OnInit {

  public previsualizacion: String[]=[];
  public archivos: any = [];
  public loading: boolean=false;

  veterinario: Array<Veterinario>=[];
  especialidad:Array<Especialidad>=[];
  ciudad:Array<Ciudad>=[];
  page = 0;
  size = 1;
  tam:boolean=false;
  tam2:boolean=false;
  nombre:string="";
  espe:string="";
  ciudade:string="";
  isFirst = false;
  isLast = false;

fileInfos: Observable<any> | undefined;
  constructor(private veterinarioService:VeterinarioService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.buscar();
    this.especialidades();
    this.ciudades();
  }

especialidades(){
  this.veterinarioService.especialidades().subscribe(
    data => {
      this.especialidad = data.response;
      if(this.especialidad.length==0){
          this.tam2=true;
      }else{
        this.tam2=false;
      }
      console.log(data);
    },
    err => {
      console.log(err.error);
    }
  );
}

ciudades(){
  this.veterinarioService.ciudades().subscribe(
    data => {
      this.ciudad = data.response;
      if(this.ciudad.length==0){
          this.tam2=true;
      }else{
        this.tam2=false;
      }
      console.log(data);
    },
    err => {
      console.log(err.error);
    }
  );
}
buscar(){
  
  this.veterinarioService.list( this.size,this.page,this.ciudade,this.espe).subscribe(
    data => {
      this.veterinario = data.response;
      if(this.veterinario.length==0){
          this.tam=true;
      }else{
        this.tam=false;
      }
      console.log(data);
    },
    err => {
      console.log(err.error);
    }
  );
}
  rewind(): void {
    if (!this.isFirst) {
      if(this.page-1>=0){
        this.page=this.page-1;
        this.buscar();
      }
     
    }
  }

  forward(): void {
    if (!this.isLast) {
      this.page=this.page+1;
      this.buscar();
    }
  }

  

}
