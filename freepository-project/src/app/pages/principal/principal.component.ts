import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";
import { RouterModule } from '@angular/router';
import { ProgramComponent } from '../program/program.component';
import { ProgramsComponent } from '../programs/programs.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [HeaderComponent, RouterModule,ProgramComponent,ProgramsComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {
  router = inject(Router);

}
