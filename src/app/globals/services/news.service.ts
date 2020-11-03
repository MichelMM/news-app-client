import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news = [
    {
    url: '#',
    title: 'Noticia 1',
    image: 'https://dummyimage.com/300.png/09f/fff'
  },
  {
    url: '#',
    title: 'Noticia 2',
    image: 'https://dummyimage.com/300.png/09f/fff' 
  },
  {
    url: '#',
    title: 'Noticia 3' 
  }
]

  constructor(private http:HttpClient) { }

  getNewsCallback(callback) {
    setTimeout(() => {
      callback(this.news);
    }, 2000);
  }

  getNews(e):Promise<any> {
    return this.http.get('http://localhost:3000/api/Everything?'+e).toPromise();
  }

  getTopHeadlines(country = ''):Promise<any> {
    return this.http.get('http://localhost:3000/api/Top-Headlines/'+country).toPromise();
  }
}
