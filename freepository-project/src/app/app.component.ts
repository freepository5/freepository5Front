import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ProgramComponent } from "./pages/program/program.component";
import { PrincipalComponent } from "./pages/principal/principal.component";
import { ProgramsComponent } from "./pages/programs/programs.component";
import { RoadmapComponent } from './pages/roadmap/roadmap.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, ProgramComponent, PrincipalComponent, ProgramsComponent,RoadmapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'freepository-project';
}
