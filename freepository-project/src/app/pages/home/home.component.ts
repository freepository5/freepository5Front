import { Component } from '@angular/core';
import { BootcampListComponent } from "./bootcamp-list/bootcamp-list.component";
import { SearcherComponent } from "../../components/searcher/searcher.component";
import { HeaderComponent } from '../../layout/header/header.component';
import { HeaderSearcherComponent } from "../../layout/header-searcher/header-searcher.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BootcampListComponent, SearcherComponent, HeaderComponent, HeaderSearcherComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
