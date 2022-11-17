import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationService } from 'src/app/shared/services/application.service';

@Component({
  selector: 'app-application-view',
  templateUrl: './application-view.component.html',
  styleUrls: ['./application-view.component.scss']
})
export class ApplicationViewComponent implements OnInit {
  applications: any = [];
  applicationDetails: any = [];
  applicationFilters:any = [];
  categoryList: any;
  searchText:any;

  constructor(private applicationService: ApplicationService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getApplications();
    this.getCategoryList();
  }

  getApplications(){
    this.applicationService.getApplication().subscribe((res) => {
      console.log('res --- ', res)
      this.applications = res;
    })
  } 

  viewApplicationDetails(content, uid) {
    console.log('uid --- ', uid)
    this.modalService.open(content, { centered: true });
    this.applicationService.getApplicationById(uid).subscribe((res) => {
        this.applicationDetails = res[0];
        let cpuArch="";
        res[0].cpuArch.forEach(element => {
           cpuArch = cpuArch+element+", ";         
        });
        this.applicationDetails.cpuArch = cpuArch.substring(0, cpuArch.lastIndexOf(','));
    })
  }

  searchApplication(e) {
    console.log('e',e);
    let tagName = e;
    this.applicationService.searchApplicationByTagName(tagName).subscribe((res) => {
      this.applications = res;
    });
  }

  OnCategoryChange(filterValue) {
     if(filterValue == 0){
         this.getApplications();
     }else {
         this.applicationService.getCategoriesByName(filterValue).subscribe(res => {
           this.applications = res;
         });
     }
    
  }

  getCategoryList(){
    this.applicationService.getCategories().subscribe((res) => {
      console.log('cat',res); 
      this.categoryList = res;
    })
  }
}
