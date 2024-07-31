
import {  inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ModuleService } from '../../core/services/module/module.service';
import { Module } from '../../shared/models/module';
import { HeaderComponent } from '../../layout/header/header.component';
import { ButtonModuleComponent } from '../../components/button/button-module/button-module.component';
import { ModuleFormComponent } from '../../components/forms/module-form/module-form.component';


@Component({
  selector: 'app-module',
  standalone: true,
  imports: [RouterLink, RouterModule, HeaderComponent, ButtonModuleComponent, ModuleFormComponent],
  templateUrl: './module.component.html',
  styleUrl: './module.component.scss'
})
export class ModuleComponent  implements OnInit{
  private moduleService = inject(ModuleService);
  private router = inject(Router)
  

  modules: Module[] = []

  ngOnInit(): void {
   
    this.loadModules();
  }

  loadModules(): void {
    this.moduleService.getModules().subscribe({
      next: (modules: Module[]) => {
        this.modules = modules;
        this.router.navigate(['/modules'])
        
      },
      error: (error: any) => {
        console.error('Error al cargar los módulos:', error);
      }
    });
  }



}
