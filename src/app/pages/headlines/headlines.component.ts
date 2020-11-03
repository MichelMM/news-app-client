import { Component, OnInit, OnChanges } from '@angular/core';
import { NewsService } from './../../globals/services/news.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.scss']
})
export class HeadlinesComponent implements OnInit {
  headlines: any[] = [];
  country: string = 'mx';

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getHeadlines(this.country);
    console.log("SDFGHDFGHB")
  }

  onCountryChange() {
    this.getHeadlines(this.country);
  }


  getHeadlines(country) {
    this.newsService.getTopHeadlines(country).then(data => {
      this.headlines = data;
    }).catch(err => {
      console.log(err);
    });
  }

  ngOnChanges() { }
}
