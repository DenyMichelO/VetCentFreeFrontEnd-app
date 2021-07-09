import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Color } from '../models/color';
import { Especie } from '../models/especie';
import { Mascota } from '../models/mascota';
import { Raza } from '../models/raza';
import { MascotaService } from '../service/mascota.service';
@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {

    mascota_id:number=0;
    especie_id:number=0;
    raza_id:number=0;
    dueno_id:number=0;
    color_id:number=0;
    genero_id:number=0;
    nombre:string="";
    tamano:string="";
    fecha_registro:string="";
    especie:Array<Especie>=[];
    raza:Array<Raza>=[];
    color:Array<Color>=[];
    filename = '';
    imagenMin: File[]=[];
    fileInfo = '';
    selectedFiles?: FileList;
    progressInfo=[];
    message:string[] = [];
    imagen_id:number[]=[];
    cont:number=0;
  constructor(private mascotaservice: MascotaService, private router: Router) { }

  ngOnInit(): void {
    this.especies();
    this.razas();
    this.colores();
  }


  selectFiles(event:any):void{
    this.progressInfo=[];
   this.filename=event.target.files.length + " archivos";
    this.selectedFiles =event.target.files;
    if(this.selectedFiles){
      for(let i=0;i<this.selectedFiles.length;i++){
        this.vista(i,this.selectedFiles[i]);
      }
    }
    //this.uploadFiles();
  }
  
  vista(index:number,file:File){
    const fr = new FileReader();
    fr.onload = (evento: any) => {
      this.imagenMin[index] = evento.target.result;
    };
    fr.readAsDataURL(file);
  }

  uploadFiles(){
    this.message=[];
    this.cont=0;
    if(this.selectedFiles){
      for(let i=0;i<this.selectedFiles.length;i++){
        this.upload(i,this.selectedFiles[i]);
      }
    }
   
    
  }
 
  upload(index:number,file:File): void{

    this.mascotaservice.upload(file).subscribe(
      data=> {

        if(data==0){
          this.message[index]="No se puede subir el archivo "+file.name;
        
        }else{
          this.cont=this.cont+1;
          this.imagen_id[index]=data;
          console.log("imagen id : "+this.cont+" selectedfiles : "+this.selectedFiles?.length)
    if(this.selectedFiles){
      if(this.cont==this.selectedFiles.length){
        const  mas= new Mascota(this.mascota_id,this.especie_id,this.raza_id,5,this.color_id,this.genero_id,this.nombre,this.tamano,this.fecha_registro,this.imagen_id);
        this.mascotaservice.registrar(mas).subscribe(
          data => {
            console.log(data);
            this.volver();
          },
          err => console.log(err)
        );
      }
    }
        }

        
        console.log("IMAGEN DATA : ",data);
    },
    err=>{

      this.message[index]="No se puede subir el archivo "+file.name;
    });
}




  onRegister(): void {
    this.uploadFiles();
    
   

    
  }

  colores(){
    this.mascotaservice.Color().subscribe(
      data => {
        this.color = data.response;
       
        console.log(data);
      },
      err => {
        console.log(err.error);
      }
    );
  }
  
  especies(){
    this.mascotaservice.Especie().subscribe(
      data => {
        this.especie = data.response;
       
        console.log(data);
      },
      err => {
        console.log(err.error);
      }
    );
  }

  razas(){
    this.mascotaservice.Raza().subscribe(
      data => {
        this.raza = data.response;
       
        console.log(data);
      },
      err => {
        console.log(err.error);
      }
    );
  }


  volver(): void {
    this.router.navigate(['/']);
  }

}
