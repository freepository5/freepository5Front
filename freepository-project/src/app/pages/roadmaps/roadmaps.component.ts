import { Component } from '@angular/core';
import { HeaderSearcherComponent } from "../../layout/header-searcher/header-searcher.component";
import { RouterLink, RouterModule } from '@angular/router';
import { RoadmapsListComponent } from './roadmaps-list/roadmaps-list.component';

@Component({
  selector: 'app-roadmaps',
  standalone: true,
  imports: [RouterLink, RouterModule, RoadmapsListComponent, HeaderSearcherComponent,RoadmapsComponent],
  templateUrl: './roadmaps.component.html',
  styleUrl: './roadmaps.component.scss'
})
export class RoadmapsComponent {

}
