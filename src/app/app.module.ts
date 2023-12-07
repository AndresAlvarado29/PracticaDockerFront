import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './paginas/cliente/cliente.component';
import { ProfesorComponent } from './paginas/profesor/profesor.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { CursoComponent } from './paginas/curso/curso.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ProfesorComponent,
    InicioComponent,
    CursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
