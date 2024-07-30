import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButtonRoadmapComponent } from "../../button/button-roadmap/button-roadmap.component";
import { ModuleFormComponent } from "../../forms/module-form/module-form.component";
import { ModuleDetail } from '../../../shared/models/module-detail';
import { HeaderComponent } from '../../../layout/header/header.component';
import { ButtonResourceComponent } from "../../button/button-resource/button-resource.component";
import { ResourceFormComponent } from '../../forms/resource-form/resource-form.component';
import { ResourceComponent } from "../../../pages/resources/resource/resource.component";
import { ResourceService } from '../../../core/services/resource/resource.service';

@Component({
  selector: 'app-module-detail',
  standalone: true,
  imports: [ResourceFormComponent, ButtonResourceComponent, ButtonRoadmapComponent, ModuleFormComponent, HeaderComponent, ButtonResourceComponent, ResourceComponent],
  templateUrl: './module-detail.component.html',
  styleUrl: './module-detail.component.scss'
})
export class ModuleDetailComponent implements OnInit {
  moduleService = inject(ResourceService)
  route = inject(ActivatedRoute)

  itemId!: string;
  module: ModuleDetail = { title: ''};

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log('Fetched ID:', id);
      if (id !== null) {
        this.itemId = id;
        this.llenarModule();
      }
    });
  }

llenarModule(){
  this.moduleService.getResourceById(this.itemId).subscribe(
    (module) =>{
      this.module = module;
    },
    (error) => {
      console.error('Failed to load module data', error);
    }
  );
}

}
