import { Component, inject, OnInit } from '@angular/core';
import { HeaderSearcherComponent } from "../../../layout/header-searcher/header-searcher.component";
import { ButtonRoadmapComponent } from "../../button/button-roadmap/button-roadmap.component";
import { ActivatedRoute } from '@angular/router';
import { RoadmapFormComponent } from "../../forms/roadmap-form/roadmap-form.component";

@Component({
  selector: 'app-module-detail',
  standalone: true,
  imports: [HeaderSearcherComponent, ButtonRoadmapComponent, RoadmapFormComponent],
  templateUrl: './module-detail.component.html',
  styleUrl: './module-detail.component.scss'
})
export class ModuleDetailComponent implements OnInit{
  private route = inject(ActivatedRoute);
  moduleTitle: string | null = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.moduleTitle = params.get('title');
    });
  }

}
