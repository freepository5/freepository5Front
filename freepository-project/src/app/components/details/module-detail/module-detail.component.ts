import { Component, inject, OnInit } from '@angular/core';
import { HeaderSearcherComponent } from "../../../layout/header-searcher/header-searcher.component";
import { ActivatedRoute } from '@angular/router';
import { ButtonRoadmapComponent } from "../../button/button-roadmap/button-roadmap.component";
import { ModuleFormComponent } from "../../forms/module-form/module-form.component";
import { ModuleService } from '../../../core/services/module/module.service';
import { ModuleDetailService } from '../../../core/services/module-detail/module-detail.service';
import { ModuleDetail } from '../../../shared/models/module-detail';

@Component({
  selector: 'app-module-detail',
  standalone: true,
  imports: [HeaderSearcherComponent, ButtonRoadmapComponent, ModuleFormComponent],
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
      this.module = module;
    },
    (error) => {
      console.error('Failed to load module data', error);
    }
  );
}

}
