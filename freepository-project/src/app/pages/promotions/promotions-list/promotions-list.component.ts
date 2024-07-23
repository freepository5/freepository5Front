import { Component } from '@angular/core';
import { Prom } from '../../../shared/models/prom';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-promotions-list',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './promotions-list.component.html',
  styleUrl: './promotions-list.component.scss'
})
export class PromotionsListComponent {
  proms:Prom[] = [{
    title:"BCN Singulars P2"
  },{
    title:"BCN Singulars P1"
  }];
}
