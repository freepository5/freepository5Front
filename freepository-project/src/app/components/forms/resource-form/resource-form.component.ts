import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../../layout/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResourceService } from '../../../core/services/resource/resource.service';
import { Router, RouterLink } from '@angular/router';
import { Resource } from '../../../shared/models/resource';
import { SessionStorageService } from '../../../core/services/session-storage/session-storage.service';

@Component({
  selector: 'app-resource-form',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule, RouterLink],
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.scss'],
})
export class ResourceFormComponent {
  private router = inject(Router);
  private resourceService = inject(ResourceService);
  private sessionStorageService = inject(SessionStorageService);

  resource: Resource = {
    title: '',
    description: '',
    url: '',
    tagIds: [1],
    moduleId: 1,
    userId: ''
  };

  onSubmit() {
    const userId = this.sessionStorageService.getItem('userId');
    if (userId) {
      this.resource.userId = userId;
      if (this.isValidResource(this.resource)) {
        const tagIdsnum : number[] = this.resource.tagIds.map(str=>Number(str));
        this.resource.tagIds = tagIdsnum
        this.resourceService.addResource(this.resource).subscribe(
          result => {
            console.log('Resource added successfully', result);
            this.resetForm();
          },
          error => {
            console.error('Error adding resource', error);
            alert('Error adding resource: ' + error.message);
          }
        );
      } else {
        console.warn('Invalid resource data', this.resource);
        alert('Please fill in all required fields correctly.');
      }
    } else {
      console.error('UserId not found in session storage');
      alert('User not logged in. Please log in and try again.');
      this.router.navigate(['/login']);
    }
  }

  resetForm() {
    this.resource = {
      title: '',
      description: '',
      url: '',
      tagIds: [],
      moduleId: 0,
      userId: ''
    };
  }

  private isValidResource(resource: Resource): boolean {
    return (
      resource.title.trim() !== '' &&
      resource.description.trim() !== '' &&
      resource.moduleId > 0 &&
      resource.userId.trim() !== ''
  
    );
  }
}






// import { Component, inject } from '@angular/core';
// import { HeaderComponent } from '../../../layout/header/header.component';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { ResourceService } from '../../../core/services/resource/resource.service';
// import { Router, RouterLink,  } from '@angular/router';
// import { ResourceComponent } from '../../../pages/resources/resource/resource.component';
// import { Resource } from '../../../shared/models/resource';
// import { SessionStorageService } from '../../../core/services/session-storage/session-storage.service';

// @Component({
//   selector: 'app-resource-form',
//   standalone: true,
//   imports: [HeaderComponent,CommonModule,FormsModule,RouterLink, ResourceComponent],
//   templateUrl: './resource-form.component.html',
//   styleUrls: ['./resource-form.component.scss'],
// })
// export class ResourceFormComponent {
//   private router = inject(Router);
//   private resourceService = inject(ResourceService);
//   private sessionStorageService = inject(SessionStorageService);

//   resource: Resource = {
//     title: '',
//     description: '',
//     url: '',
//     tagIds: [1],
//     moduleId:1,
//     userId: ''
//   };

//   onSubmit() {
//     this.resource.userId = this.sessionStorageService.getItem('userId');
//     this.resourceService.addResource(this.resource).subscribe(
//       result => console.log(result)
//     )
//   }

//   resetForm() {
//     this.resource = {
//       title: '',
//       description: '',
//       url: '',
//       tagIds: [],
//       moduleId:0,
//       userId: ''
//     };
//   }
// }

