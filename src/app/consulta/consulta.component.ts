import { Component, OnInit } from '@angular/core';
import {ActivatedRoute ,Router } from '@angular/router';
import { VeterinarioService } from '../service/veterinario.service';
import { Ciudad } from '../models/ciudad';
import { Consulta } from '../models/consulta';
@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  consulta_id:number=0;
  ciudad_id:number=0;
  veterinario_id:number=0;
  tema_consulta:string="";
  descripcion:string="";
 fecha:string="";
 hora:string="";
 ciudad:Array<Ciudad>=[];
  constructor(private veterinarioservice:VeterinarioService, private router: Router, private acti:ActivatedRoute) { }

  ngOnInit(): void {
    this.veterinario_id=this.acti.snapshot.params.idVeterinario;
   this.ciudades();
  }

  onRegister(): void {
    const consul = new Consulta(this.consulta_id,this.ciudad_id,this.veterinario_id,this.tema_consulta,this.descripcion,this.fecha,this.hora);
    console.log(" ciudad : "+this.ciudad_id);
    this.veterinarioservice.registrar(consul).subscribe(
      data => {
        console.log(data);
        this.volver();
      },
      err => console.log(err)
    );
  }

  ciudades(){
    this.veterinarioservice.ciudades().subscribe(
      data => {
        this.ciudad = data.response;
      
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
