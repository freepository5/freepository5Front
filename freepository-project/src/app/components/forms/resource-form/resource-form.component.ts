import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../../layout/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResourceService } from '../../../core/services/resource/resource.service';
import { Router, RouterLink,  } from '@angular/router';
import { ResourceComponent } from '../../../pages/resources/resource/resource.component';
import { Resource } from '../../../shared/models/resource';
import { SessionStorageService } from '../../../core/services/session-storage.service';


@Component({
  selector: 'app-resource-form',
  standalone: true,
  imports: [HeaderComponent,CommonModule,FormsModule,RouterLink, ResourceComponent],
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.scss'],
  

})
export class ResourceFormComponent {

  private router = inject(Router);

  private resourceService = inject(ResourceService);
  
  private sessionStorageService = inject(SessionStorageService);


  // @Output() resourceAdded = new EventEmitter<Resource>();

  resource: Resource = {
    title: '',
    description: '',
    url: '',
    tagIds: [1],
    moduleId:1,
    userId: ''
  };



  onSubmit() {
    this.resource.userId = this.sessionStorageService.getItem('userId');

   
    
    this.resourceService.addResource(this.resource).subscribe(
      result => console.log(result)
    )

    // this.router.navigate(['/module-detail/:id'])
   
        // this.resourceAdded.emit(this.resource);

  }

  resetForm() {
    this.resource = {
      title: '',
      description: '',
      url: '',
      tagIds: [],
      moduleId:0,
      userId: ''
    };
  }
}