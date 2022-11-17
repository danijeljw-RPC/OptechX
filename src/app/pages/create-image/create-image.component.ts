import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Stepper from 'bs-stepper';
import { CreateImageService } from 'src/app/shared/services/create-image.service';
import { DashboardService } from 'src/app/shared/services/dashboard.service';

@Component({
  selector: 'app-create-image',
  templateUrl: './create-image.component.html',
  styleUrls: ['./create-image.component.scss']
})
export class CreateImageComponent implements OnInit {
  name = 'Angular10';
  stepper: Stepper;
  language: any = [];
  release: any = [];
  edition: any = [];
  version: any = [];
  arch: any = [];
  selectedRelease: string = '';
  selectedVersion: string = '';
  selectedEdition: string = '';
  selectedArch: string = '';
  selectedLanguage: string = '';
  enabledRelease = false;
  enabledEdition = false;
  enabledVersion = false;
  enabledArch = false;
  enabledLanguage = false;
  createImageForm: FormGroup;
  rowFormArray: FormGroup;
  windowsCapability: Object;
  windowsOptionsFeatures: Object;
  appxProvisionedpackages: Object;
  applications: any = [];
  driversData: any = [];
  deletedFalg: boolean = true;
  applicationsUidArray: any = [];
  orderUidArray: any = [];
  user: any;
  accountsDetails: any;
  ordersDetails: any;

  constructor(private modalService: NgbModal, private createImageService: CreateImageService, 
    private fb: FormBuilder, 
    private dashboardService: DashboardService,
    private router: Router) {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }


  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    });
    this.getRelease();
    this.getAccountById(this.user?.id);
    this.createImageForm = this.fb.group({
      release: ['', [Validators.required]],
      edition: ['', [Validators.required]],
      version: ['', [Validators.required]],
      arch: ['', [Validators.required]],
      language: ['', [Validators.required]],
      integration: ['No', [Validators.required]],
      delivery: ['No', [Validators.required]],
      orderName: ['', [Validators.required]],   //Validators.pattern('^[\S][a-zA-Z0-9-_\S]{1,20}$')
      imageFormat: [''],
      defaultUser: ['', Validators.required, Validators.pattern('[a-zA-Z0-9_.-]{1,20}')],
      defaultPassword: ['',[Validators.required]]
    });

    this.rowFormArray = this.fb.group({
      windowsOptionFetures: ['', [Validators.required]],
      appProvisionedPackage: ['', [Validators.required]],
      registryString: this.fb.array([this.fb.group({
        actionDropDown: ['', [Validators.required]],
        valueSelectDropDown: ['', [Validators.required]],
        valueInput: ['', [Validators.required]],
        tLabel: ['/t', [Validators.required]],
        dataTypeSelectDropDown: ['', [Validators.required]],
        dLabel: ['/d', [Validators.required]],
        value2Input: ['', [Validators.required]],
        fLabel: ['/f', [Validators.required]],
      })])
    });

    
  }

  get rowArray() {
    return this.rowFormArray.get('registryString') as FormArray;
  }
  registryStringList=[];
  getRegistryStrings() {
    let len=this.rowFormArray.controls.registryString.value.length;

    for(let i = 0;i<len; i++){
      let tempObj={
        'addSelect':this.rowFormArray.controls.registryString.value[i].actionDropDown,
        'valueSelect':this.rowFormArray.controls.registryString.value[i].valueSelectDropDown,
        'valueInput':this.rowFormArray.controls.registryString.value[i].valueInput,
        'tLabel':this.rowFormArray.controls.registryString.value[i].tLabel,
        'dataTypeSelectDropDown':this.rowFormArray.controls.registryString.value[i].dataTypeSelectDropDown,
        'dLabel':this.rowFormArray.controls.registryString.value[i].dLabel,
        'value2Input':this.rowFormArray.controls.registryString.value[i].value2Input,
        'fLabel':this.rowFormArray.controls.registryString.value[i].fLabel
      };
     let str = '';

     str = `reg ${tempObj.addSelect} ${tempObj.valueSelect} "${tempObj.valueInput}" ${tempObj.tLabel} ${tempObj.dataTypeSelectDropDown} ${tempObj.dLabel} "${tempObj.value2Input}" ${tempObj.fLabel}`
       
      this.registryStringList.push(str);
    }
    console.log('hh',this.registryStringList);
    
  }
  addNewArray() {
    this.rowArray.push(this.fb.group({
      actionDropDown: ['', Validators.required],
      valueSelectDropDown: ['', Validators.required],
      valueInput: ['', Validators.required],
      tLabel: ['/t', Validators.required],
      dataTypeSelectDropDown: ['', Validators.required],
      dLabel: ['/d', Validators.required],
      value2Input: ['', Validators.required],
      fLabel: ['/f', Validators.required],
    }));
  }
  deleteArray(index) {
    if (index === 0) {
      return;
    }
    this.rowArray.removeAt(index);
  }
  confirmOrder(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'md', centered: true });
  }

  submit() {
    let obj = {
      "id": 0,
      "accountId": this.accountsDetails?.id || 0,
      "orderName": this.createImageForm.get('orderName').value || '',
      "imageOutputFormat": this.createImageForm.get('imageFormat').value,
      "continuousIntegration": this.createImageForm.get('integration').value === 'Yes' ? true : false, 
      "continuousDelivery": this.createImageForm.get('delivery').value === 'Yes' ? true : false,
      "release": this.selectedRelease,
      "edition": this.selectedEdition,
      "version": this.selectedVersion,
      "arch": this.selectedArch,
      "lcid": this.selectedLanguage,
      "optionalFeatureString": this.rowFormArray.get('windowsOptionFetures').value || '',
      "appxPackagesString": this.rowFormArray.get('appProvisionedPackage').value || '',
      "windowsDefaultAccount": this.createImageForm.get('defaultUser').value || '',
      "windowsDefaultPassword": this.createImageForm.get('defaultPassword').value || '',
      "customRegistryKeys": this.registryStringList || [],
      "applicationUID": this.applicationsUidArray || [],
      "driversUID": this.orderUidArray || [],
      "orderStatus":"Submitted"
    };
     console.log('fibalOBj', obj);
     
    this.createImageService.createNewOrder(obj).subscribe(res => {
      console.log('new order ', res);
      this.ordersDetails = res;
      this.modalService.dismissAll();
      this.router.navigate(['/dashboard']);
    });
  }

  // releases
  getRelease() {
    this.createImageService.getRelease().subscribe(res => {
      console.log('release', res);
      this.release = res;
    })
  }

  saveRelease() {
    this.createImageForm.controls.release.disable();
    //this.enabledRelease = true;
  }

  // editions
  OnReleaseChange(releaseFilter = '') {
    this.createImageService.getEdition(releaseFilter).subscribe(res => {
      console.log('edition', res);
      this.edition = res;
    });
    this.selectedRelease = releaseFilter;
    console.log('relllllll', this.selectedRelease, releaseFilter);
    
  }

  saveEdition() {
    if (this.selectedRelease != '') {
      this.createImageForm.controls.edition.disable();
      this.enabledEdition = true;
    }
  }

  // versions
  OnEditionChange(editionFilter) {
    if (editionFilter == 0) {
      return;
    } else {
      console.log('ff', this.selectedRelease);
      this.createImageService.getVersion(this.selectedRelease, editionFilter).subscribe(res => {
        console.log('version', res);
        this.version = res;
      });
      this.selectedEdition = editionFilter;
    }
  }

  saveVersion() {
    if (this.selectedEdition != '') {
      this.createImageForm.controls.version.disable();
      this.enabledVersion = true;
    }
  }

  // Arch
  OnVersionChange(versionFilter) {
    if (versionFilter == 0) {
      return;
    } else {
      this.createImageService.getArch(this.selectedRelease, this.selectedEdition, versionFilter).subscribe(res => {
        console.log('arch', res);
        this.arch = res;
      });
      this.selectedVersion = versionFilter;
    }
  }
  saveArch() {
    if (this.selectedVersion != '') {
      this.createImageForm.controls.arch.disable();
      this.enabledArch = true;
    }
  }

  // Language
  OnArchChange(archFilter) {
    if (archFilter == 0) {
      return;
    } else {
      this.createImageService.getLanguage(this.selectedRelease, this.selectedEdition, this.selectedVersion, archFilter).subscribe(res => {
        console.log('language', res);
        this.language = res;
      });
      this.selectedArch = archFilter;
    }
  }

  saveLanguage() {
    if (this.selectedArch != '') {
      this.createImageForm.controls.language.disable();
      this.enabledLanguage = true;
    }
  }

  OnLanguageChange(languageFilter) {
    if (languageFilter == 0) {
      return;
    } else {
      this.selectedLanguage = languageFilter;
    }
  }

  next() {
    this.createImageForm.markAllAsTouched();
    console.log(`this.createImageForm.value --- `, this.createImageForm.value);
    this.stepper.next();
  }

  next2() {
    this.createImageService.getApplicationsFromArch(this.selectedArch).subscribe(res => {
      console.log('applications', res);
      this.applications = res;
    });
    
    this.getRegistryStrings();
    this.stepper.next();
  }

  onchange(event, uid, index) {
    if (event.target.checked === true) {
      let value = uid;
      this.applicationsUidArray.push(value);
    } else {
      this.applicationsUidArray.splice(index);
    }
    console.log(`application arr --- `, this.applicationsUidArray)

  }

  next3() {
    this.createImageService.getDriversData(this.selectedRelease, this.selectedArch).subscribe(res => {
      console.log('driversData', res);
      this.driversData = res;
    });
    this.stepper.next();
  }

  onchangeOrderData(event, uid, index) {
    if (event.target.checked === true) {
      let value = uid;
      this.orderUidArray.push(value);
    } else {
      this.orderUidArray.splice(index);
    }
    console.log(`order arr --- `, this.orderUidArray);
  }

  getWindowsOptionalFeatures() {
    this.createImageService.getWindowsOptionsFeature(this.selectedVersion, this.selectedEdition, this.selectedRelease).subscribe(res => {
      console.log('OptionalFeature', res);
      this.windowsOptionsFeatures = res;
    })
  }

  getAppxProvisionedPackages() {
    this.createImageService.getAppxProvisionedPackage(this.selectedVersion, this.selectedEdition, this.selectedRelease, this.selectedArch).subscribe(res => {
      console.log('Appxprovisional', res);
      this.appxProvisionedpackages = res;
    })
  }

  getAccountById(id) {
    this.dashboardService.getAcoountsById(id).subscribe((res: any) => {
      console.log('accountById', res);
      this.accountsDetails = res;
    })
  }
}
