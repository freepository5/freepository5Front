import { AfterViewInit, Component, inject } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-roadmap',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './roadmap.component.html',
  styleUrl: './roadmap.component.scss'
})
export class RoadmapComponent implements AfterViewInit {
  router = inject(Router);

  ngAfterViewInit(): void {
    document.querySelectorAll('.subTitles h3').forEach(h3 => {
      h3.addEventListener('click', () => {
        // Remover la clase 'clicked' de todos los h3
        document.querySelectorAll('.subTitles h3').forEach(item => item.classList.remove('clicked'));
        // Agregar la clase 'clicked' solo al h3 clicado
        h3.classList.add('clicked');
      });
    });
  }

}



