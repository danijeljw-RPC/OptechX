import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  _headers: HttpHeaders
  constructor(private httpClient: HttpClient,) { }

  getLast5News() {
    return this.httpClient.get(`${environment.BASE_URL}v1/application/last5`);
  }

  getNewsUpdates(){
    return this.httpClient.get(`${environment.BASE_URL}v1/NewsUpdates`);
  }

   getAcoountsById(id:Number) {
    const httpOptions = {
      headers: new HttpHeaders({  
         Authorization: localStorage.getItem('access_token'),
        }),
       };
     return this.httpClient.get(`${environment.BASE_USERS_URL}Accounts/${id}`,httpOptions).pipe(
       map(response => {
         return response;
       }),
     );
   }

   getBuildHistroy(accountId) {
    return this.httpClient.get(`${environment.BASE_URL}v1/ordermanagement/byaccountid-last5/${accountId}`)
   }

}
