import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderManagementService } from 'src/app/shared/services/order-management.service';

export enum  status{
  deleted = "Submitted",
}
@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.scss']
})
export class OrderManagementComponent implements OnInit {
  orders: any = [];
  ordersInfo: any = [];
  orderDetailsObjID: any;
  //status = status.deleted;
  orderStatusColors = [
    { status:'submitted', colorClass:'submittedColor' },
    { status:'Complete', colorClass:'completedColor' },
    { status:'Deleted', colorClass:'deletedColor' },
    { status:'Compiling', colorClass:'compilingColor' }
    
  ]
  user: any;


  constructor(private orderService: OrderManagementService,private modalService: NgbModal) {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    console.log("us",this.user);
   }

  ngOnInit(): void {
    this.getOrdersDetails(this.user.id);
  }
  
  getOrdersDetails(accountId) {
    this.orderService.getOrdersByAccountId(accountId).subscribe(res => {
      console.log('order', res);
      this.orders = res;
    })
  }
  onDeleteClick(content, id:any) {
    this.modalService.open(content, { centered: true });
    this.orderDetailsObjID = id;
  }
 
  onDelete(id){
      this.orderService.deleteOrderById(id).subscribe((res:any) => {
        console.log('deltedOrderByID', res);
        this.orders = res;
      });
      this.modalService.dismissAll();
   }

  // onDeleteClick(id:Number,orderDetailsObj:any) {

  //   let orderObj = [{
  //     "operationType": "Replace",
  //     "path": "orderStatus",
  //     "value": "Deleted"
  //     },
  //     {
  //     "operationType": "Replace",
  //     "path": "downloadLink",
  //     "value": ""
  //     }]; 



  //   // let orderObj = {
  //   //   "id": orderDetailsObj.id,
  //   //   "accountId": orderDetailsObj.accountId,
  //   //   "orderStatus": "Deleted",
  //   //   "downloadLink": null,
  //   //   "windowsDefaultPassword": orderDetailsObj.windowsDefaultPassword
  //   // }
  //   console.log('orderObj', orderObj);
    
  //     this.orderService.updateOrders(id,orderObj).subscribe(res =>{
  //       debugger
  //       console.log('updateOrders', res);
  //       this.orders = res;
  //     })
  // }

  viewPopup(content,ordersUuid) {
    this.modalService.open(content, { centered: true });
    this.orderService.getorderManagementInfo(ordersUuid).subscribe(res => {
        console.log('orderInfo', res);
        this.ordersInfo = res[0];
    })
  }
}
