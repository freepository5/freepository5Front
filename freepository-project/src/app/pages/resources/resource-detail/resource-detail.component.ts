import { Component } from '@angular/core';
import { ResourceDetail } from '../../../shared/models/resource-detail';
import { HeaderComponent } from "../../../layout/header/header.component";
import { ResourceFormComponent } from '../../../components/forms/resource-form/resource-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resource-detail',
  standalone: true,
  imports: [ HeaderComponent, ResourceFormComponent,CommonModule ],
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.scss']
})
export class ResourceDetailComponent {
  resourcesDetail: ResourceDetail[] = [{
    title: "",
    description: "",
    url: "",
    examine: "",
    tags: "",
  }];

  onResourceAdded(newResource: ResourceDetail) {
    this.resourcesDetail.push(newResource);
  }
}
