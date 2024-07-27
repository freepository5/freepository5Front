import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModuleService } from '../../../core/services/module/module.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Module } from '../../../shared/models/module';

@Component({
  selector: 'app-module-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './module-form.component.html',
  styleUrls: ['./module-form.component.scss']
})
export class ModuleFormComponent {
  private formBuilder = inject(FormBuilder);
  private moduleService = inject(ModuleService);
  private router = inject(Router);

  moduleForm: FormGroup;

  constructor() {
    this.moduleForm = this.formBuilder.group({
      title: ['', Validators.required]
    });
  }
 

  onSubmit() {
    if (this.moduleForm.valid) {
      const newModule: Module = { title: this.moduleForm.value.title };
      this.moduleService.addModule(newModule).subscribe(
        (module) => {
          // Redirigir a la nueva página del módulo
          this.router.navigate([`/module/${module.title}`]);
        },
        (error) => {
          console.error('Error al agregar el módulo:', error);
        }
      );
    }
  }
}
