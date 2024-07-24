import { Component } from '@angular/core';
import { SearcherComponent } from "../../components/searcher/searcher.component";

@Component({
  selector: 'app-header-searcher',
  standalone: true,
  imports: [SearcherComponent],
  templateUrl: './header-searcher.component.html',
  styleUrl: './header-searcher.component.scss'
})
export class HeaderSearcherComponent {

}
