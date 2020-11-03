import { Component, OnInit, OnChanges } from '@angular/core';

import { NewsService } from './../../globals/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  sources: any[] = [];
  news: any[] = [];
  search:string="";
  source:string="";


  constructor(private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.getSources();
  }

  getSources() {
    this.newsService.getSources().then(data => {
      this.sources = data;
    }).catch(err => {
      console.log(err);
    });
  }

  getNews(q,source) {
    this.newsService.getNews(q,source).then(data => {
      this.news = data;
    }).catch(err => {
      console.log(err);
    });
  }

  searchNews(){
    this.getNews(this.search,this.source);
  }


}
