import { Component } from '@angular/core';
import { Prom } from '../../../shared/models/prom';

@Component({
  selector: 'app-promotions-list',
  standalone: true,
  imports: [],
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
