import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})

export class RolesComponent implements OnInit{

ngOnInit(): void {
  alert('Hi')
}
// firstName: string = 'Angular Tutorial';
// angularVersion = 'version 18';
// version : number = 18;
// IsActive : boolean = false;
// currentDate : Date = new Date();
// inputType:string = 'Button';
// selectedState: string = ''

// showWelcomeAlert(){
//    alert ('Welcome to Angular 18 Tutorial')
// }
// showMessage(message: string){
//     alert (message)
// }
}