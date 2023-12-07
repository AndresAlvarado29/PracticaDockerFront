import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Cliente } from 'src/app/domain/cliente';
import { MatTable } from '@angular/material/table';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  cliente: Cliente = new Cliente();
  listadoClienteWS: any;
  dataSourceF: any;
  selectedCliente: Cliente | null = null;// en este se puede guardar cliente o nulo y se inicializa en nulo
  displayedColumns: string[] = ['Cedula', 'Nombre', 'Apellido', 'Celular', 'Correo', 'Direccion', 'Accion'];
  dataSource = this.servicio.getAll();
  @ViewChild(MatTable)
  table!: MatTable<Cliente>;
  constructor(private servicio: ServicioService,
    private router: Router, private app: AppComponent) {
    this.listadoClienteWS = this.servicio.getAll();
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if (params) {
      this.cliente = new Cliente();
      this.cliente = params['cliente']
    }
  }

  ngOnInit(){
  setTimeout(() => {
    this.visualizar() // Realizar el cambio de forma asincrónica
  });
}
  visualizar() {
    const currentUrl = this.router.url;
    if (currentUrl == '/pagina/cliente') {
      this.app.ocultar()
    }
  }
}
