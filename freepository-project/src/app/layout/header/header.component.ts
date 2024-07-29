import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearcherComponent } from "../../components/searcher/searcher.component";
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearcherComponent, NgIf, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent{
  @Input() showSearchBar: boolean = true;
}
