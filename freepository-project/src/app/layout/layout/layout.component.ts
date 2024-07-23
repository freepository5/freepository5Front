import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { ProgramsComponent } from '../../pages/programs/programs.component';
import { PromotionsComponent } from '../../pages/promotions/promotions.component';
import { RoadmapsComponent } from '../../pages/roadmaps/roadmaps.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet,HomeComponent,ProgramsComponent,PromotionsComponent, RoadmapsComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
