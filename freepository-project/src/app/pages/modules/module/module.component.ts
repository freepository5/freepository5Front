import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { HeaderComponent } from "../../../layout/header/header.component";
import { ButtonModuleComponent } from "../../../components/button/button-module/button-module.component";
import { ModuleFormComponent } from "../../../components/forms/module-form/module-form.component";

@Component({
  selector: 'app-module',
  standalone: true,
  imports: [RouterLink, RouterModule, HeaderComponent, ButtonModuleComponent, ModuleFormComponent],
  templateUrl: './module.component.html',
  styleUrl: './module.component.scss'
})
export class ModuleComponent {

}
