import { Component } from '@angular/core';
import { ProgramsListComponent } from "./programs-list/programs-list.component";
import { RouterLink, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../layout/header/header.component';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [ProgramsListComponent, RouterLink, RouterModule, HeaderComponent, HeaderComponent],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.scss'
})
export class ProgramsComponent {

}
