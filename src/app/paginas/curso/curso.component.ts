import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Curso } from 'src/app/domain/curso';
import { MatTable } from '@angular/material/table';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { Profesor } from 'src/app/domain/profesor';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {
  tabla=false;
  cedula = '';
  nombre = '';
  apellido = '';
  correo ='';
  contrasena='';
  celular = '';
  direccion = '';
  curso: Curso = new Curso();
  profesor: Profesor = new Profesor();
  listadoCursoWS: any;
  dataSourceF: any;
  selectedCurso: Curso | null = null;
  displayedColumns: string[]=['Nombre','Horas','Cedula','Profesor'];
  dataSource = this.servicio.getAllCursos();
  @ViewChild(MatTable)
  table!: MatTable<Curso>;
  constructor(private servicio: ServicioService,private router: Router, private app: AppComponent){
    this.listadoCursoWS = this.servicio.getAllCursos();
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if (params) {
      this.curso = new Curso();
      this.curso = params['curso']
    }
  }
  ngOnInit(){
  setTimeout(() => {
    this.visualizar() // Realizar el cambio de forma asincrónica
  });
}
  visualizar() {
    const currentUrl = this.router.url;
    if (currentUrl == '/pagina/curso') {
      this.app.ocultar()
    }
  }
  /*guardarWS1(pro: Profesor,cur:Curso){
    console.log(cur)
    console.log(this.profesor.cedula) 
    cur.profesores.push(this.buscar(pro))
    console.log(cur.profesores)
    this.servicio.saveCurso(cur).subscribe(data=>{
      console.log("factura guardada: ", data)
      this.ngOnInit();
      this.curso=cur
      this.curso=new Curso();
      this.profesor = new Profesor();
    });
    
    }*/

    async guardarWS(pro: Profesor, cur: Curso) {
      console.log(cur);
      console.log(this.profesor.cedula);
      
      const profesorEncontrado = this.buscar(pro);
    
      if (profesorEncontrado) {
        cur.profesor=profesorEncontrado;
        this.servicio.saveCurso(cur).subscribe(data => {
          console.log("curso guardado: ", data);
          this.ngOnInit();
          this.curso = new Curso();
          this.tabla=true
        });
      } else {
        console.error('No se encontró el profesor');
      }
    }

    buscar(pro: Profesor){
      this.servicio.buscarProfesor(pro.cedula).subscribe(data=>{
        console.log(data)
        pro.cedula=data.cedula
        pro.nombre=data.nombre
        pro.apellido=data.apellido
        pro.correo=data.correo
        pro.contrasena=data.contrasena
        pro.celular=data.celular
        pro.direccion=data.direccion
        console.log(pro)
        return pro;
      })
      return pro
      
    }

    
}
  
