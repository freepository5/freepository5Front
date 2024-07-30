import { Component, Output, EventEmitter, inject } from '@angular/core';
import { ResourceDetail } from '../../../shared/models/resource-detail';
import { HeaderComponent } from '../../../layout/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResourceService } from '../../../core/services/resource.service';
import { Router, RouterLink,  } from '@angular/router';



@Component({
  selector: 'app-resource-form',
  standalone: true,
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.scss'],
  imports: [HeaderComponent,CommonModule,FormsModule,RouterLink],

})
export class ResourceFormComponent {

  private router = inject(Router);

  private resourceService = inject(ResourceService)

  @Output() resourceAdded = new EventEmitter<ResourceDetail>();

  resource: ResourceDetail = {
    title: '',
    description: '',
    url: '',
    examine: '',
    tags: ''
  };

constructor() {}

  onSubmit() {
    this.resourceService.addResource(this.resource).subscribe()
   
        this.resourceAdded.emit(this.resource);
        this.router.navigate(['/resources'])
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