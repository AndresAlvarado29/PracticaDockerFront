import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ClienteComponent } from './paginas/cliente/cliente.component';
import { CursoComponent } from './paginas/curso/curso.component';
import { ProfesorComponent } from './paginas/profesor/profesor.component';

const routes: Routes = [
  {path:"pagina/inicio", component: InicioComponent},
  {path:"pagina/cliente", component: ClienteComponent},
  {path:"pagina/curso", component: CursoComponent},
  {path:"pagina/profesor", component: ProfesorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
