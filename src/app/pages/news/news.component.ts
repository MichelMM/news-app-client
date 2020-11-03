import { Component, OnInit, OnChanges } from '@angular/core';

import { NewsService } from './../../globals/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  title: string = "News Component";

  news: any[] = [];

  constructor(private newsService: NewsService) {
  }

  ngOnInit(): void {
  }


  getHeadlines(e) {
    this.newsService.getNews(e).then(data => {
      this.news = data;
      console.log(data);
    }).catch(err => {
      console.log(err);
    });
  }

  ngOnChanges() { }

}
