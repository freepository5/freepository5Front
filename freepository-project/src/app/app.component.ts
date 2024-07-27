import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProgramsListComponent } from './pages/programs/programs-list/programs-list.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { PromotionsListComponent } from './pages/promotions/promotions-list/promotions-list.component';
import { ResourceComponent } from './pages/resources/resource/resource.component';
import { RoadmapComponent } from './components/roadmaps/roadmap/roadmap.component';
import { RoadmapFormComponent } from './components/forms/roadmap-form/roadmap-form.component';
import { ResourceFormComponent } from './components/forms/resource-form/resource-form.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HomeComponent, ProgramsListComponent,ProgramsComponent,PromotionsComponent,PromotionsListComponent, ResourceComponent,ResourceFormComponent, RoadmapComponent, RoadmapFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'freepository-project';
}
