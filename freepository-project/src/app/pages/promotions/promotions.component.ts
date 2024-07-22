import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { PromotionsListComponent } from './promotions-list/promotions-list.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { HeaderSearcherComponent } from "../../layout/header-searcher/header-searcher.component";

@Component({
  selector: 'app-promotions',
  standalone: true,
  imports: [RouterLink, RouterModule, PromotionsListComponent, HeaderComponent, HeaderSearcherComponent],
  templateUrl: './promotions.component.html',
  styleUrl: './promotions.component.scss'
})
export class PromotionsComponent {

}
