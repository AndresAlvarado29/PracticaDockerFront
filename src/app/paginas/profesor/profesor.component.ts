import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Profesor } from 'src/app/domain/profesor';
import { MatTable } from '@angular/material/table';
import { ServicioService } from 'src/app/servicios/servicio.service';


@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.scss']
})
export class ProfesorComponent implements OnInit {
  profesor: Profesor = new Profesor();
  listadoprofesorWS: any;
  dataSourceF: any;
  selectedProfesor: Profesor | null = null;// en este se puede guardar profesor o nulo y se inicializa en nulo
  displayedColumns: string[] = ['Cedula', 'Nombre', 'Apellido', 'Celular', 'Correo', 'Direccion', 'Accion'];
  dataSource = this.servicio.getAll();
  @ViewChild(MatTable)
  table!: MatTable<Profesor>;
  constructor(private servicio: ServicioService,
    private router: Router, private app: AppComponent) {
    this.listadoprofesorWS = this.servicio.getAll();
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if (params) {
      this.profesor = new Profesor();
      this.profesor = params['profesor']
    }
  }

  ngOnInit(){
  setTimeout(() => {
    this.visualizar() // Realizar el cambio de forma asincrónica
  });
}
  visualizar() {
    const currentUrl = this.router.url;
    if (currentUrl == '/pagina/profesor') {
      this.app.ocultar()
    }
  }
}
