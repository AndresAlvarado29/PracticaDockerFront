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
  save(cliente: Cliente){
    return this.http.post<any>("http://localhost:8090/ms/estudiante/crear", cliente)
  }
  getAll(){
    return this.http.get<any>("http://localhost:8080/ms/estudiante/all")
    } 
  saveProfesor(profesor: Profesor){
      return this.http.post<any>("http://localhost:8190/microservice/profesor/guardar", profesor)
    }
  getAllProfesores(){
      return this.http.get<any>("http://localhost:8080/microservice/profesor/all")
      }
  buscar(cedula: String){
      return this.http.get<any>("http://localhost:8080/microservice/profesor/buscar/"+ cedula)
      }
  saveCurso(curso: Curso){
        return this.http.post<any>("http://localhost:9090/microservice/curso/guardar", curso)
      }
  getAllCursos(){
        return this.http.get<any>("http://localhost:8080/microservice/curso/all")
        } 
  buscarProfesor(cedula: String){
       return this.http.get<any>("http://localhost:8080/microservice/curso/buscarPro/"+cedula)
  }     
}
