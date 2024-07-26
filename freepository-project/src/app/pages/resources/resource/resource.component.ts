import { Component, inject, OnInit } from '@angular/core';
import { HeaderSearcherComponent } from '../../../layout/header-searcher/header-searcher.component';
import { RouterLink, RouterModule } from '@angular/router';
import { Resource } from '../../../shared/models/resource';
import { ButtonRoadmapComponent } from "../../../components/button/button-roadmap/button-roadmap.component";
import { ModalRoadmapComponent } from "../../../components/modal-roadmap/modal-roadmap.component";
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileUploadService } from '../../../core/services/roadmap/file-upload.service';
import { Roadmap } from '../../../shared/models/roadmap';
import { RoadmapFormComponent } from "../../../components/forms/roadmap-form/roadmap-form.component";

@Component({
  selector: 'app-resource',
  standalone: true,
  imports: [ResourceComponent, HeaderSearcherComponent, RouterLink, RouterModule, ButtonRoadmapComponent, ModalRoadmapComponent, RoadmapFormComponent],
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {
  resources: Resource[] = [{
    title: "Frontend con Angular",
  }];

  roadmaps: Roadmap[] = []; // Lista separada para Roadmaps

  private fileUploadService = inject(FileUploadService);
  private formBuilder = inject(FormBuilder);

  roadmapForm!: FormGroup;
  newRoadmap: Roadmap = { image: '' };

  ngOnInit(): void {
    this.roadmapForm = this.formBuilder.group({
      image: ['']
    });

    this.loadResources(); // Cargar recursos al iniciar el componente
  }

  handleFormSubmission(formData: { image: string }): void {
    console.log('Formulario recibido', formData);

    this.fileUploadService.addFile(formData).subscribe({
      next: response => {
        console.log('Roadmap agregado', response);
        alert("Roadmap agregado con éxito.");
        this.loadResources(); // Recargar recursos si es necesario
      },
      error: error => {
        console.error("Error al crear el roadmap", error);
      }
    });
  }

  loadResources(): void {
    this.fileUploadService.getAllRoadmap().subscribe((result) => {
      this.roadmaps = result; // Asignar la lista de Roadmaps
    });
  }
}
