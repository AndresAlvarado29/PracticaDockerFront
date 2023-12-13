import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ClienteComponent } from './paginas/cliente/cliente.component';
import { CursoComponent } from './paginas/curso/curso.component';
import { ProfesorComponent } from './paginas/profesor/profesor.component';
import { MenuComponent } from './paginas/menu/menu.component';
import { ListaCursosComponent } from './paginas/lista-cursos/lista-cursos.component';

const routes: Routes = [
  {path:"pagina/inicio", component: InicioComponent},
  {path:"pagina/cliente", component: ClienteComponent},
  {path:"pagina/curso", component: CursoComponent},
  {path:"pagina/profesor", component: ProfesorComponent},
  {path:"pagina/menu", component: MenuComponent},
  {path:"pagina/lista", component:ListaCursosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
