export class Mascota {
    mascota_id:number=0;
    especie_id:number=0;
    raza_id:number=0;
    dueno_id:number=0;
    color_id:number=0;
    genero_id:number=0;
    nombre:string="";
    tamano:string="";
    fecha_registro:string="";
    imagenId:number[]=[];
    constructor( mascota_id:number,
        especie_id:number,
        raza_id:number,
        dueno_id:number,
        color_id:number,
        genero_id:number,
        nombre:string,
        tamano:string,
        fecha_registro:string,
        imagenId:number[]){
            this.mascota_id=mascota_id;
            this.especie_id=especie_id;
            this.raza_id=raza_id;
            this.dueno_id=dueno_id;
            this.color_id=color_id;
            this.genero_id=genero_id;
            this.nombre=nombre;
            this.tamano=tamano;
            this.fecha_registro=fecha_registro;
            this.imagenId=imagenId;

    }
}