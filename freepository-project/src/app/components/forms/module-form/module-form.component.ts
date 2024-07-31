import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModuleService } from '../../../core/services/module/module.service';
import { CommonModule } from '@angular/common';
import { Module } from '../../../shared/models/module';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-module-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './module-form.component.html',
  styleUrls: ['./module-form.component.scss']
})
export class ModuleFormComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private moduleService = inject(ModuleService);
  private router = inject(Router)

  moduleForm!: FormGroup;
  modules: Module[] = [];

  ngOnInit(): void {
    this.moduleForm = this.formBuilder.group({
      title: ['', Validators.required]
    });
  }
  
  onSubmit() {
    if (this.moduleForm.valid) {
      const newModule: Module = { title: this.moduleForm.value.title };
      console.log(newModule);
      
      this.moduleService.addModule(newModule).subscribe({
        next: (module) => {
          this.modules.push(module);
          this.moduleForm.reset();
          this.router.navigate(['/modules'])
        },
        error: (error) => {
          console.error('Error al agregar el módulo:', error);
        }
      });
    }
  }
}
