import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProgramsListComponent } from './pages/programs/programs-list/programs-list.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { PromotionsListComponent } from './pages/promotions/promotions-list/promotions-list.component';
import { ResourceDetailComponent } from './pages/resources/resource-detail/resource-detail.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HomeComponent, ProgramsListComponent,ProgramsComponent,PromotionsComponent,PromotionsListComponent,ResourceDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'freepository-project';
}
