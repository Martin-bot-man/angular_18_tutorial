import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DesignationComponent } from '../designation/designation.component';

@Component({
  selector: 'app-roles',
  imports: [RouterOutlet, DesignationComponent ],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})

export class RolesComponent {

firstName: string = 'Angular Tutorial';
angularVersion = 'version 18';
version : number = 18;
IsActive : boolean = false;
currentDate : Date = new Date();
inputType:string = 'radio';
}
