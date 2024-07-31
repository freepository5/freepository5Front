import { Component } from '@angular/core';
import { Bootcamp } from '../../../shared/models/bootcamp';
import { RouterLink, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../layout/header/header.component';

@Component({
  selector: 'app-bootcamp-list',
  standalone: true,
  imports: [RouterModule,RouterLink, HeaderComponent],
  templateUrl: './bootcamp-list.component.html',
  styleUrl: './bootcamp-list.component.scss'
})
export class BootcampListComponent {
  bootcamps:Bootcamp[] = [{
    type: "BOOTCAMP",
    title: "Full Stack"
  }, {
    type: "BOOTCAMP",
    title: "Ciber Seguridad"
  }, {
    type: "BOOTCAMP",
    title: "Inteligencia Artificial"
  }, {
    type: "BOOTCAMP",
    title: "Cloud Services"
  }];

}
