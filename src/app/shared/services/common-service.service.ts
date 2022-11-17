import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private httpClient: HttpClient) { }


  countryList() {
    return this.httpClient.get(`${environment.BASE_URL}v1/CountryIndex`);
  }
}
