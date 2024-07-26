import { Component, Output, EventEmitter } from '@angular/core';
import { ResourceDetail } from '../../../shared/models/resource-detail';
import { HeaderComponent } from '../../../layout/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResourceService } from '../../../core/services/resource.service';


@Component({
  selector: 'app-resource-form',
  standalone: true,
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.scss'],
  imports: [HeaderComponent,CommonModule,FormsModule],

})
export class ResourceFormComponent {
  @Output() resourceAdded = new EventEmitter<ResourceDetail>();

  resource: ResourceDetail = {
    title: '',
    description: '',
    url: '',
    examine: '',
    tags: ''
  };

constructor(private resourceService: ResourceService) {}

  onSubmit() {
    this.resourceService.addResource(this.resource).subscribe()
    // this.resource={
    //   title: '',
    //   description: '',
    //   url: '',
    //   examine: '',
    //   tags: ''}
        this.resourceAdded.emit(this.resource);
        this.resetForm();
  }

  resetForm() {
    this.resource = {
      title: '',
      description: '',
      url: '',
      examine: '',
      tags: ''
    };
  }
}