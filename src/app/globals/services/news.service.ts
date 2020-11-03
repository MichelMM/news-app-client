import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }


  getNews(e,source?):Promise<any> {
    return this.http.get('http://localhost:3000/api/Everything?q='+e+'&sources='+source).toPromise();
  }

  getTopHeadlines(country):Promise<any> {
    return this.http.get('http://localhost:3000/api/Top-Headlines/'+country).toPromise();
  }

  getSources():Promise<any>{
    return this.http.get('http://localhost:3000/api/Sources').toPromise();
  }
}
