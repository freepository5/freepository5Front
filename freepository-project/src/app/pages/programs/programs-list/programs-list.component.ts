import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Prom } from '../../../shared/models/prom';
import { SearcherComponent } from "../../../components/searcher/searcher.component";

@Component({
  selector: 'app-programs-list',
  standalone: true,
  imports: [RouterLink, RouterModule, SearcherComponent],
  templateUrl: './programs-list.component.html',
  styleUrl: './programs-list.component.scss'
})
export class ProgramsListComponent {
proms:Prom[] = [{
  title:"Singular"
},{
  title:"Femcoders"
}];
}
