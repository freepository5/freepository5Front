import { Component } from '@angular/core';
import { HeaderSearcherComponent } from '../../../layout/header-searcher/header-searcher.component';
import { RouterLink, RouterModule } from '@angular/router';
import { Resource } from '../../../shared/models/resource';
import { ButtonRoadmapComponent } from "../../../components/button/button-roadmap/button-roadmap.component";
import { ModalRoadmapComponent } from "../../../components/modal-roadmap/modal-roadmap.component";
import { ButtonResourceComponent } from "../../../components/button/button-resource/button-resource.component";

@Component({
  selector: 'app-resource',
  standalone: true,
  imports: [ResourceComponent, HeaderSearcherComponent, RouterLink, RouterModule, ButtonRoadmapComponent, ModalRoadmapComponent, ButtonResourceComponent,ButtonResourceComponent],
  templateUrl: './resource.component.html',
  styleUrl: './resource.component.scss'
})
export class ResourceComponent {
  resources:Resource[] = [{
    title: "Frontend con Angular"
  }];

}
