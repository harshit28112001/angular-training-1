import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../../services/news.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{

  constructor(private _newser: NewsService, private activeRoute : ActivatedRoute) {}

  News : any;
  NewsId : any = 0;
  ngOnInit(): void {
    this.NewsId = this.activeRoute.snapshot.params['id'];
    this.News = this._newser.News.find((x) => x.id == this.NewsId);
  }
  
}
