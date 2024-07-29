import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../../layout/header/header.component';
import { RouterLink, RouterModule } from '@angular/router';
import { Resource } from '../../../shared/models/resource';
import { ButtonRoadmapComponent } from "../../../components/button/button-roadmap/button-roadmap.component";
import { ModalRoadmapComponent } from "../../../components/modal-roadmap/modal-roadmap.component";
import { ButtonResourceComponent } from "../../../components/button/button-resource/button-resource.component";
import { ResourceFormComponent } from '../../../components/forms/resource-form/resource-form.component';
import { ResourceService } from '../../../core/services/resource.service';

@Component({
  selector: 'app-resource',
  standalone: true,
  imports: [ResourceComponent, HeaderComponent, RouterLink, RouterModule, ButtonRoadmapComponent, ModalRoadmapComponent,ButtonResourceComponent, ResourceFormComponent,],
  templateUrl: './resource.component.html',
  styleUrl: './resource.component.scss'
})

export class ResourceComponent {
  resources:Resource[] = [{
    title: "Frontend con Angular"
  }];
  
  private userService = inject(ResourceService);
  data:any[]=[]

  ngOnInit(): void {
    this.llenarData();
  }
  llenarData(){
    this.userService.getAllResource().subscribe((data) => {
      this.data = data
      console.log(this.data);
    })
  };


}
