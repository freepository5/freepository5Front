import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { PromotionsListComponent } from './promotions-list/promotions-list.component';
import { HeaderComponent } from '../../layout/header/header.component';

@Component({
  selector: 'app-promotions',
  standalone: true,
  imports: [RouterLink, RouterModule, PromotionsListComponent, HeaderComponent, HeaderComponent],
  templateUrl: './promotions.component.html',
  styleUrl: './promotions.component.scss'
})
export class PromotionsComponent {

}
