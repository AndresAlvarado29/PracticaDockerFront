import { Profesor } from "./profesor";
export class Curso {
    id: number =0;
    nombre: string = '';
    numeroDeHoras: number= 0;
    profesor: Profesor= new Profesor;
}