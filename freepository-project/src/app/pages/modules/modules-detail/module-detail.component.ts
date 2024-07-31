import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButtonRoadmapComponent } from "../../../components/button/button-roadmap/button-roadmap.component";
import { ModuleFormComponent } from "../../../components/forms/module-form/module-form.component";
import { ModuleDetail } from '../../../shared/models/module-detail';
import { HeaderComponent } from '../../../layout/header/header.component';
import { ButtonResourceComponent } from "../../../components/button/button-resource/button-resource.component";
import { ResourceFormComponent } from '../../../components/forms/resource-form/resource-form.component';
import { ResourceComponent } from "../../resources/resource/resource.component";
import { ResourceService } from '../../../core/services/resource/resource.service';
import { catchError } from 'rxjs';
import { ModuleService } from '../../../core/services/module/module.service';
import { ModuleDetailService } from '../../../core/services/module-detail/module-detail.service';

@Component({
  selector: 'app-module-detail',
  standalone: true,
  imports: [ResourceFormComponent, ButtonResourceComponent, ButtonRoadmapComponent, ModuleFormComponent, HeaderComponent, ButtonResourceComponent, ResourceComponent],
  templateUrl: './module-detail.component.html',
  styleUrl: './module-detail.component.scss'
})
export class ModuleDetailComponent implements OnInit {
  
  moduleService = inject(ModuleDetailService)
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
  this.moduleService.getModuleById(this.itemId).subscribe(
    (module) =>{
      console.log(this.module)
      this.module = module;
      console.log(this.module)
    }
  );
}

}
