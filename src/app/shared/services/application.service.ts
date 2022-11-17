import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private httpClient: HttpClient) { }

  getApplication(){
    return this.httpClient.get(`${environment.BASE_URL}v1/Application`);
  }
  getApplicationById(uid:string) {
    return this.httpClient.get(`${environment.BASE_URL}v1/Application/uid/${uid}`);
  }
  searchApplicationByTagName(tag:string){
    return this.httpClient.get(`${environment.BASE_URL}v1/Application/tags/${tag}`);
  }
  getCategories() {
    return this.httpClient.get(`${environment.BASE_URL}v1/ApplicationCategoryIndex`);
  }
  getCategoriesByName(categoryName: string) {
    return this.httpClient.get(`${environment.BASE_URL}v1/Application/category/${categoryName}`);
  }
}
