import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule,  } from '@angular/router';
import { HeaderComponent } from "../../layout/header/header.component";
import { StudyProgram } from '../../shared/models/studyProgram';
import { ProgramComponent } from '../program/program.component';
import { RoadmapComponent } from '../roadmap/roadmap.component';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [HeaderComponent,RouterModule,ProgramComponent, RouterLink, RoadmapComponent],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.scss'
})
export class ProgramsComponent {

  studyPrograms:StudyProgram[] = [{
    title: "Singulars"
  },
  {
    title: "Femcoders"
  }];

  router = inject(Router);
}
