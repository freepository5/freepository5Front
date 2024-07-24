import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearcherComponent } from "../../components/searcher/searcher.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearcherComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent{
  
}
