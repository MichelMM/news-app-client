import { Component, OnInit, OnChanges } from '@angular/core';

import { NewsService } from './../../globals/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  headlines: any[] = [];
  country: string = 'mx';


  constructor(private newsService: NewsService) {
  }

  ngOnInit(): void {

  }


  ngOnChanges() { }

}
