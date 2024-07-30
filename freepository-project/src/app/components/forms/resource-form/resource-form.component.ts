import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../../layout/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResourceService } from '../../../core/services/resource/resource.service';
import { Router, RouterLink,  } from '@angular/router';
import { ResourceComponent } from '../../../pages/resources/resource/resource.component';
import { Resource } from '../../../shared/models/resource';


@Component({
  selector: 'app-resource-form',
  standalone: true,
  imports: [HeaderComponent,CommonModule,FormsModule,RouterLink, ResourceComponent],
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.scss'],
  

})
export class ResourceFormComponent {

  private router = inject(Router);

  private resourceService = inject(ResourceService)

  // @Output() resourceAdded = new EventEmitter<Resource>();

  resource: Resource = {
    title: '',
    description: '',
    url: '',
    examine: '',
    tags: '',
    moduleId:0,
  };

  onSubmit() {
    this.resourceService.addResource(this.resource).subscribe()
   
        // this.resourceAdded.emit(this.resource);
        this.router.navigate(['/module-detail/:id'])
  }

  resetForm() {
    this.resource = {
      title: '',
      description: '',
      url: '',
      examine: '',
      tags: '',
      moduleId:0,
    };
  }
}