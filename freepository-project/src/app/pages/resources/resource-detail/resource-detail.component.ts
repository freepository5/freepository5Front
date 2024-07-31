import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../../../layout/header/header.component";
import { ResourceFormComponent } from '../../../components/forms/resource-form/resource-form.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourceService } from '../../../core/services/resource/resource.service';
import { ResourceComponent } from '../resource/resource.component';

@Component({
  selector: 'app-resource-detail',
  standalone: true,
  imports: [ HeaderComponent, ResourceFormComponent, CommonModule, ResourceComponent ],
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.scss']
})
export class ResourceDetailComponent implements OnInit {
  userService = inject(ResourceService);
  itemId!: string;
  route = inject(ActivatedRoute);
  idStr!: string;
  data: any;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.itemId = id;
        this.llenarData();
      } else {
    
      }
    });
  }

  llenarData() {
    this.userService.getResourceById(this.itemId).subscribe((data) => {
      console.log(this.itemId)
      this.data = data;
      console.log(this.data);
    });
  }
}
