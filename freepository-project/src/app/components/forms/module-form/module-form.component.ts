import { Component } from '@angular/core';
import { ButtonModuleComponent } from "../../button/button-module/button-module.component";

@Component({
  selector: 'app-module-form',
  standalone: true,
  imports: [ButtonModuleComponent],
  templateUrl: './module-form.component.html',
  styleUrl: './module-form.component.scss'
})
export class ModuleFormComponent {

}
