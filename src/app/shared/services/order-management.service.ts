import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderManagementService {

  constructor(private httpClient: HttpClient) { }


 getOrdersByAccountId(accountid) {
  return this.httpClient.get(`${environment.BASE_URL}v1/ordermanagement/byaccountid/${accountid}`);
 }

 updateOrders(id:Number,orderDetailsObj:any) {
  const httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json-patch+json',
    })
  };
  return this.httpClient.patch(`${environment.BASE_URL}v1/OrderManagement/${id}`,JSON.stringify(orderDetailsObj), httpOptions );
 }

 getorderManagementInfo(uuid:string) {
  return this.httpClient.get(`${environment.BASE_URL}v1/ordermanagement/uuid/${uuid}`);
 }

 deleteOrderById(id) {
  return this.httpClient.get(`${environment.BASE_URL}v1/ordermanagement/deleteorderbyid/${id}`)
 }
}
