import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string="Marvin Ajcuc";
  arreglo=[1,2,3,4,5,6,7,8,9,10];
  PI=Math.PI;
  a=0.234;
  salario=1234.5;
  fecha=new Date();
  video="pb7sFwtFzCg";
  activar:boolean=true;
}
