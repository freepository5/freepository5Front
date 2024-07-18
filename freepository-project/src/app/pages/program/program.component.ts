import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../layout/header/header.component";
import { RoadmapComponent } from '../roadmap/roadmap.component';
import { Prom } from '../../shared/models/prom';

@Component({
  selector: 'app-program',
  standalone: true,
  imports: [HeaderComponent,RouterLink, RoadmapComponent,RouterModule],
  templateUrl: './program.component.html',
  styleUrl: './program.component.scss'
})
export class ProgramComponent {
proms:Prom[] = [{
  title:"BCN Singulars P2"
},{
  title:"BCN Singulars P1"
}];

  router = inject(Router);

}
