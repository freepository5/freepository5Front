import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-searcher',
  standalone: true,
  imports: [],
  templateUrl: './searcher.component.html',
  styleUrl: './searcher.component.scss'
})

export class SearcherComponent implements AfterViewInit {

  ngAfterViewInit() {
    const input = document.getElementById('search-input') as HTMLInputElement;
    const placeholder = document.querySelector('.placeholder') as HTMLDivElement;

    input.addEventListener('focus', () => {
      placeholder.style.opacity = '0';
    });

    input.addEventListener('blur', () => {
      if (input.value === '') {
        placeholder.style.opacity = '1';
      } else {
        console.log('Input blurred with value');
      }
    });
  }
}