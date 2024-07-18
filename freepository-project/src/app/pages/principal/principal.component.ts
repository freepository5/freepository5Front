import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../../layout/header/header.component";
import { Router,RouterModule ,RouterLink} from '@angular/router';
import { ProgramComponent } from '../program/program.component';
import { ProgramsComponent } from '../programs/programs.component';
import { Bootcamp } from '../../shared/models/bootcamp';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [HeaderComponent, RouterModule,ProgramComponent,RouterLink,ProgramsComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {
bootcamps:Bootcamp[] = [{
  type: "BOOTCAMP",
  title: "Full Stack"
}, {
  type: "BOOTCAMP",
  title: "Ciber Seguridad"
}, {
  type: "BOOTCAMP",
  title: "Inteligencia Artificial"
}, {
  type: "BOOTCAMP",
  title: "Inteligencia Artificial"
}];

  router = inject(Router);

}
