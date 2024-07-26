import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../../layout/header/header.component";
import { ResourceFormComponent } from '../../../components/forms/resource-form/resource-form.component';
import { CommonModule } from '@angular/common';
import { Resource } from '../../../shared/models/resource';
import { ActivatedRoute } from '@angular/router';
import { ResourceDetail } from '../../../shared/models/resource-detail';

@Component({
  selector: 'app-resource-detail',
  standalone: true,
  imports: [ HeaderComponent, ResourceFormComponent,CommonModule, ],
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.scss']
})
export class ResourceDetailComponent {
    // resourceDetail : any[] = []
  }

  
