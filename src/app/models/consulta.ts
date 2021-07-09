export class Consulta {
   consulta_id:number=0;
    ciudad_id:number=0;
    veterinario_id:number=0;
    tema_consulta:string="";
    descripcion:string="";
   fecha:string="";
   hora:string="";
   constructor( consulta_id:number,
    ciudad_id:number,
    veterinario_id:number,
    tema_consulta:string,
    descripcion:string,
   fecha:string,
   hora:string){
    this.consulta_id=consulta_id;
    this.ciudad_id=ciudad_id;
    this.veterinario_id=veterinario_id;
    this.tema_consulta=tema_consulta;
    this.descripcion=descripcion;
    this.fecha=fecha;
    this.hora=hora;
   }
}