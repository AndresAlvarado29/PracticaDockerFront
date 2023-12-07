import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PracticaMicroservicios';
  constructor(){

  }
  ngOnInit(){
    
  }
  Inicio=true;

  ocultar(){
    this.Inicio=false;
  }
  aparecer(){
    this.Inicio=true;
  }

}
