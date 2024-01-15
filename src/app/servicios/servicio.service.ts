import { Injectable } from '@angular/core';
import { Cliente } from '../domain/cliente';
import { HttpClient } from '@angular/common/http';
import { Profesor } from '../domain/profesor';
import { Curso } from '../domain/curso';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  //link para acceder a los microservicios con docker
  //http://localhost:8080/MicroserviciosRest/api/cliente/crear
  save(cliente: Cliente){
    return this.http.post<any>("http://34.122.155.171/MicroserviciosRest/api/cliente/crear", cliente)
  }
  buscarEstudiante(cedula: String){
    return this.http.get<any>("http://34.122.155.171/MicroserviciosRest/api/cliente/buscar/"+ cedula)
    }
    actualizar(cliente: Cliente){
    return this.http.post<any>("http://34.122.155.171/MicroserviciosRest/api/cliente/crear", cliente)
    }
  getAll(){
    return this.http.get<any>("http://34.122.155.171/MicroserviciosRest/api/cliente/all")
    }
  delete(cedula: string) {
    return this.http.delete<any>("http://34.122.155.171/MicroserviciosRest/api/cliente/borrar/"+cedula);
  }
  saveProfesor(profesor: Profesor){
    return this.http.post<any>("http://34.122.155.171/MicroserviciosRest/api/docente/crear", profesor)
    }
  getAllProfesores(){
    return this.http.get<any>("http://34.122.155.171/MicroserviciosRest/api/docente/all")
    }
  buscar(cedula: String){
    return this.http.get<any>("http://34.122.155.171/MicroserviciosRest/api/docente/buscar/"+ cedula)
    }
    deleteD(cedula: string) {
      return this.http.delete<any>("http://34.122.155.171/MicroserviciosRest/api/docente/borrar/"+cedula);
    }  
  saveCurso(curso: Curso){
    return this.http.post<any>("http://34.122.155.171/MicroserviciosRest/api/curso/guardar", curso)
    }
  getAllCursos(){
    return this.http.get<any>("http://34.122.155.171/MicroserviciosRest/api/curso/all")
    }
    deleteC(id: number) {
      return this.http.delete<any>("http://34.122.155.171/MicroserviciosRest/api/curso/borrar/"+id);
    } 
  buscarProfesor(cedula: String){
    return this.http.get<any>("http://34.122.155.171/MicroserviciosRest/api/docente/buscar"+cedula)
    }     
}
