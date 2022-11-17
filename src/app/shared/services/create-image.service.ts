import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateImageService {
  _headers: HttpHeaders
  constructor(private httpClient: HttpClient) { }

  getRelease() {
    return this.httpClient.get(`${environment.BASE_URL}v1/WinRefCore01Release`);
  }

  getEdition(release: string) {
    return this.httpClient.get(`${environment.BASE_URL}v1/WinRefCore02Edition/${release}`);
  }

  getVersion(release: string, edition: string) {
    return this.httpClient.get(`${environment.BASE_URL}v1/WinRefCore03Version/${release}/${edition}`);
  }

  getArch(release: string, edition: string, version: string) {
    return this.httpClient.get(`${environment.BASE_URL}v1/WinRefCore04Arch/${release}/${edition}/${version}`);
  }

  getLanguage(release: string, edition: string, version: string, arch: string) {
    return this.httpClient.get(`${environment.BASE_URL}v1/WinRefCore05Language/${release}/${edition}/${version}/${arch}`);
  }

  getWindowsOptionsFeature(version: string, edition: string, release: string) {
    return this.httpClient.get(`${environment.BASE_URL}v1/WindowsOptionalFeature/multisearch/${version}/${edition}/${release}`);
  }

  getAppxProvisionedPackage(version: string, edition: string, release: string, arch: string) {
    return this.httpClient.get(`${environment.BASE_URL}v1/AppxProvisionedPackage/multiarchsearch/${version}/${edition}/${release}/${arch}`);
  }

  getApplicationsFromArch(arch: string) {
    return this.httpClient.get(`${environment.BASE_URL}v1/application/arch/${arch}`);
  }

  getDriversData(windowsOs: string, arch: string) {
    return this.httpClient.get(`${environment.BASE_URL}v1/driverscore/page4/${windowsOs}/${arch}`);
  }

   createNewOrder(orderDetailsObj: object) {
   // createNewOrder() {
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
        'accept': 'text/plain',
        'Content-Type': 'application/json',
        'Content-encoding': 'charset=utf-8'
      })
    };
    // let orderDetailsObj = {
    //   "id": 0,
    //   "accountId": 0,
    //   "orderName": 'order1',
    //   "imageOutputFormat": 'ISO',
    //   "continuousIntegration": false, 
    //   "continuousDelivery": false,
    //   "release": 'Windows 11',
    //   "edition": 'education',
    //   "version": '21h2',
    //   "arch": 'x64',
    //   "lcid": 'arabic',
    //   "optionalFeatureString": '',
    //   "appxPackagesString": '',
    //   "windowsDefaultAccount": '',
    //   "windowsDefaultPassword": '',
    //   "customRegistryKeys":['reg Add /v \"test\" /t REG_SZ /d \"test\" /f'],
    //   "applicationUID": ['microsoft::edge::86.0.622.48","igorpavlov::7zip::21.7'],
    //   "driversUID": ['Toshiba::autogen::144814","NEC::autogen::144816","Lenovo::ThinkPad::E15_Gen2_Intel'],
    //   "orderStatus":'Submitted'
    // };


    return this.httpClient.post(`/api/OrderManagement`, orderDetailsObj,httpOptions)
    
  }
}
