import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  constructor(private _newsser: NewsService) {}
  News : any[] = [];

  ngOnInit(): void {
    this.News = this._newsser.News;
  }
 
}
