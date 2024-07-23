import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { HeaderSearcherComponent } from "../../../layout/header-searcher/header-searcher.component";
import { ButtonModuleComponent } from "../../../components/button/button-module/button-module.component";
import { ModuleFormComponent } from "../../../components/forms/module-form/module-form.component";

@Component({
  selector: 'app-module',
  standalone: true,
  imports: [RouterLink, RouterModule, HeaderSearcherComponent, ButtonModuleComponent, ModuleFormComponent],
  templateUrl: './module.component.html',
  styleUrl: './module.component.scss'
})
export class ModuleComponent {

}
