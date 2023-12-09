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
    return this.http.post<any>("http://localhost:8090/microservice/cliente/guardar", cliente)
  }
  getAll(){
    return this.http.get<any>("http://localhost:8090/microservice/cliente/all")
    } 
  saveProfesor(profesor: Profesor){
      return this.http.post<any>("http://localhost:8190/microservice/profesor/guardar", profesor)
    }
  getAllProfesores(){
      return this.http.get<any>("http://localhost:8190/microservice/profesor/all")
      }
  buscar(cedula: String){
      return this.http.get<any>("http://localhost:8190/microservice/profesor/buscar/"+ cedula)
      }
  saveCurso(curso: Curso){
        return this.http.post<any>("http://localhost:8190/microservice/curso/guardar", curso)
      }
  getAllCursos(){
        return this.http.get<any>("http://localhost:8190//microservice/curso/all")
        }      
}
