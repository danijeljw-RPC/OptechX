import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DriverLibraryService {

  constructor(private httpClient: HttpClient) { }

  getdrivers(){
    return this.httpClient.get(`${environment.BASE_URL}v1/DriversCore`);
  }
   
  getdriversByOem(oem) {
    return this.httpClient.get(`${environment.BASE_URL}v1/DriversCore/oem/${oem}`);
  }

  getdriversBycpuArch(cpuArch) {
    return this.httpClient.get(`${environment.BASE_URL}v1/DriversCore/cpuarch/${cpuArch}`);
  }

  getdriversByWindowsOs(windowsOs) {
    return this.httpClient.get(`${environment.BASE_URL}v1/DriversCore/windowsos/${windowsOs}`);
  }

  searchDrivers(searchterm){
    return this.httpClient.get(`${environment.BASE_URL}v1/DriversCore/globalsearch/${searchterm}`);
  }
}
