import { Component } from '@angular/core';
import { Roadmap } from '../../../shared/models/roadmap';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-roadmaps-list',
  standalone: true,
  imports: [RouterLink,RouterModule],
  templateUrl: './roadmaps-list.component.html',
  styleUrl: './roadmaps-list.component.scss'
})
export class RoadmapsListComponent {
  roadmaps:Roadmap[] = [{
    title:"Frontend con Angular"
  },{
    title:"Backend con C# y .net"
  }];
}
