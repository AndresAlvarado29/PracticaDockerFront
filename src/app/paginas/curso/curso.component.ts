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
  displayedColumns: string[]=['Nombre','Horas','Profesor'];
  dataSource = this.servicio.getAll();
  @ViewChild(MatTable)
  table!: MatTable<Curso>;
  constructor(private servicio: ServicioService,private router: Router, private app: AppComponent){
    this.listadoCursoWS = this.servicio.getAll();
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
    
      const profesorEncontrado = await this.buscar(pro);
    
      if (profesorEncontrado) {
        cur.profesor=profesorEncontrado;
        console.log(cur.profesor);
        console.log(cur)
        this.servicio.saveCurso(cur).subscribe(data => {
          console.log("curso guardado: ", data);
          this.ngOnInit();
          this.curso = cur;
          this.curso = new Curso();
          this.profesor = new Profesor();
        });
      } else {
        console.error('No se encontró el profesor');
      }
    }

    buscar3(pro: Profesor){
      this.servicio.buscar(pro.cedula).subscribe(data=>{
        console.log(data)
        this.apellido = data.apellido;
        this.correo =data.correo;
        this.contrasena=data.contrasena;
        this.celular = data.celular;
        this.direccion = data.direccion;
        pro.cedula=data.cedula
        pro.nombre=data.nombre
        pro.apellido=this.apellido
        pro.correo=this.correo
        pro.contrasena=this.contrasena
        pro.celular=this.celular
        pro.direccion=this.direccion
        console.log(pro)
        return pro;
      })
      pro.apellido=this.apellido
        pro.correo=this.correo
        pro.contrasena=this.contrasena
        pro.celular=this.celular
        pro.direccion=this.direccion
      return pro
      console.log(pro)
    }

    async buscar(pro: Profesor) {
      try {
        const data: any = await this.servicio.buscar(pro.cedula).toPromise();
        this.apellido = data.apellido;
        this.correo = data.correo;
        this.contrasena = data.contrasena;
        this.celular = data.celular;
        this.direccion = data.direccion;
        pro.cedula = data.cedula;
        pro.nombre = data.nombre;
        pro.apellido = this.apellido;
        pro.correo = this.correo;
        pro.contrasena = this.contrasena;
        pro.celular = this.celular;
        pro.direccion = this.direccion;
        console.log(pro);
        return pro;
      } catch (error) {
        console.error('Error al buscar:', error);
        return null;
      }
    }
    
}
  
