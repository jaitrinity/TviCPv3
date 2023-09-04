import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { CreateNBSService } from 'src/app/shared/services/createNBSService';
import { Constant } from 'src/app/shared/constant/Constant';

@Component({
  selector: 'app-odsc-sharing',
  templateUrl: './odsc-sharing.component.html',
  styleUrls: ['./odsc-sharing.component.css']
})
export class OdscSharingComponent implements OnInit {

  tabName : string = "ODSC_Sharing";
  isSmartSplit : boolean = false;
  circleName = "";
  latitude1 = "";
  longitude1 = "";
  tviSiteId = "";
  airtelSiteId = "";
  siteName = "";
  airtelLocatorId = "";
  technology : any = "";
  technologyList = [];
  selectedTechnologyList = [];
  aglRequiredODSC : any = "";
  airtelBackhaul = "";
  acDcBackup = "";
  additionalPowerBackup2Hrs = "";
  camuflauging = "";
  remark = "";
  loginEmpId = "";
  loginEmpRole = "";
  operator = "";
  tviSiteIdList = [];
  selectedTviSiteIdList = [];
  rowSpaceList = [];
  rowSpace = "";
  acPowerList = [];
  acPower = "";
  mcbList = [];
  noOfMcb = "";
  mcbAmp = "";
  dgStatus = "";
  batteryBackup = "";
  commaSeparateCircleName = "";
  multiSelectropdownSettings = {};
  singleSelectropdownSettings = {};
  
  constructor(private route:Router, 
    private spinner: NgxSpinnerService, 
    private sharedService : CreateNBSService,
    private toastr: ToastrService) { 
      this.loginEmpId = localStorage.getItem("empId");
      this.loginEmpRole = localStorage.getItem("empRole")
      this.commaSeparateCircleName = localStorage.getItem("circleName");
      this.operator = localStorage.getItem("operator");
      let currentUrl = route.url;
      if(currentUrl === "/layout/hpsc-sharing"){
        this.tabName = "HPSC_Sharing";
      }
      else if(currentUrl === "/layout/smart-split"){
        this.tabName = "Smart_Split";
        this.isSmartSplit = true;
      }
    }

  ngOnInit() {
    this.multiSelectropdownSettings = {
      singleSelection: false,
      idField: 'paramCode',
      textField: 'paramDesc',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 0,
      allowSearchFilter: true
    };

    this.singleSelectropdownSettings = {
      singleSelection: true,
      idField: 'paramCode',
      textField: 'paramDesc',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };

    if(this.commaSeparateCircleName.split(",").length == 1){
      this.circleName = this.commaSeparateCircleName.split(",")[0];
      this.getTVISiteIdCircleName();
    }

    this.getNoOfList();
  }

  allNoOfList = [];
  getNoOfList(){
    this.allNoOfList = JSON.parse(localStorage.getItem("allNoOfList"));
     
      for(let i=0;i<this.allNoOfList.length;i++){
        let paramCode = this.allNoOfList[i].paramCode;
        let paramDesc = this.allNoOfList[i].paramDesc; 
        if(paramCode == "ODSC_Anchor_Technology"){
          let techSplit = paramDesc.split(",");
          let tempTechList = [];
          for(let i=0;i<techSplit.length;i++){
            let json = {
              "paramCode" : techSplit[i],
              "paramDesc" : techSplit[i]+" "
            }
            tempTechList.push(json);
          }
          this.technologyList = tempTechList;
        }
        else if(paramCode == "smartSplit_rowSpace"){
          let splitList = paramDesc.split(",");
          let tempList = [];
          for(let i=0;i<splitList.length;i++){
            let json = {
              "paramCode" : splitList[i],
              "paramDesc" : splitList[i]+" "
            }
            tempList.push(json);
          }
          this.rowSpaceList = tempList;
        }
        else if(paramCode == "smartSplit_acPowerRequired"){
          let splitList = paramDesc.split(",");
          let tempList = [];
          for(let i=0;i<splitList.length;i++){
            let json = {
              "paramCode" : splitList[i],
              "paramDesc" : splitList[i]+" "
            }
            tempList.push(json);
          }
          this.acPowerList = tempList;
        }
        else if(paramCode == "smartSplit_noOfMcb"){
          let splitList = paramDesc.split(",");
          let tempList = [];
          for(let i=0;i<splitList.length;i++){
            let json = {
              "paramCode" : splitList[i],
              "paramDesc" : splitList[i]+" "
            }
            tempList.push(json);
          }
          this.mcbList = tempList;
        }
      }
  }

  getTVISiteIdCircleName(){
    this.tviSiteIdList = [];
    this.selectedTviSiteIdList = [];
    this.setAsDefaultAllField();
    let json = {
      circleName : this.circleName,
      operator : this.operator,
      tabName : this.tabName
    }

    this.sharedService.getTVISiteIdCircleName(json)
    .subscribe( (response) =>{
      this.spinner.hide();
      this.tviSiteIdList = response.wrappedList;
    },
    (error)=>{
      this.toastr.warning(Constant.returnServerErrorMessage("getTVISiteIdCircleName"),"Alert !");
      this.spinner.hide();
    })
  }

  onSelectOrDeSelectTviSiteId(item: any) {
    this.tviSiteId = item.paramCode;
    if(this.selectedTviSiteIdList.length != 0){
        for(let i = 0;i<this.tviSiteIdList.length;i++){
          let tviSiteId = this.tviSiteIdList[i].paramCode;
          if(tviSiteId == this.tviSiteId){
            this.siteName = this.tviSiteIdList[i].siteName;
            this.latitude1 = this.tviSiteIdList[i].latitude;
            this.longitude1 = this.tviSiteIdList[i].longitude;
            // this.siteAddress = this.tviSiteIdList[i].address;
            // this.district = this.tviSiteIdList[i].district;
            // this.state = this.tviSiteIdList[i].state;
            // this.siteType = this.tviSiteIdList[i].siteType;
            // this.siteType = this.tviSiteIdList[i].siteType;
            // this.clutter = this.tviSiteIdList[i].cluster;
            // this.aglRequired = this.tviSiteIdList[i].aglRequired;
            return;
          }
        }
      }
      else{
        this.setAsDefaultAllField()
    }
    
  }
  setAsDefaultAllField(){
    this.siteName = "";
    this.latitude1 = "";
    this.longitude1 = "";
    // this.siteAddress = "";
    // this.district = "";
    // this.state = "";
    // this.siteType = "";
    // this.clutter = "";
    // this.aglRequired = "";
  }

  refreshPage(){
    this.route.navigateByUrl('/layout/dashbord', { skipLocationChange: true }).then(() => {
      if(this.tabName == "ODSC_Sharing"){
        this.route.navigate(['/layout/odsc-sharing']);
      }
      else if(this.tabName == "HPSC_Sharing"){
        this.route.navigate(['/layout/hpsc-sharing']);
      }
      else if(this.tabName == "Smart_Split"){
        this.route.navigate(['/layout/smart-split']);
      }
      
    }); 
  }

  createCommaSeprate(listData : any){
    let commSeprateValue = "";
    for(let i=0;i<listData.length;i++){
      commSeprateValue += listData[i].paramCode;
      if(i != listData.length-1){
        commSeprateValue += ",";
      }
    }
    return commSeprateValue;
  }

  validateBasicDetails() : any{
    if(this.circleName == ''){
      alert("please select circle name");
      return false;
    }
    else if(this.selectedTviSiteIdList.length == 0){
      alert("please select tvi site id");
      return false;
    }
    else if(this.airtelSiteId == ''){
      alert("please enter "+this.operator+" site id value");
      return false;
    }
   
    else if(this.selectedTechnologyList.length == 0){
      alert("please select technology value");
      return false;
    }
    
    else if(this.latitude1 == ''){
      alert("please enter latitude  1 value");
      return false;
    }
    
    else if(this.longitude1 == ''){
      alert("please enter longitude  1 value");
      return false;
    }
    else if(!this.isSmartSplit && this.aglRequiredODSC == ''){
      alert("please AGL required for ODSC value")
      return false;
    }
    else if(!this.isSmartSplit && this.airtelBackhaul == ''){
      alert("please select Backhaul value")
      return false;
    }
    else if(!this.isSmartSplit && this.acDcBackup == ''){
      alert("please select AC + DC Backup value")
      return false;
    }
    else if(!this.isSmartSplit && this.additionalPowerBackup2Hrs == ''){
      alert("please select Additional power back up of 2 Hrs value");
      return false;
    }
    else if(!this.isSmartSplit && this.camuflauging == ''){
      alert("please select Camuflauging value");
      return false;
    }
    else if(!this.isSmartSplit && this.airtelBackhaul == ''){
      alert("please select `Backhaul` value");
      return false;
    }
    else if(this.isSmartSplit && this.rowSpace == ''){
      alert("please select `Raw Space for OD cabinet (in Sq Meter)` value");
      return false;
    }
    else if(this.isSmartSplit && this.acPower == ''){
      alert("please select `AC Power required (in KW)` value");
      return false;
    }
    else if(this.isSmartSplit && this.noOfMcb == ''){
      alert("please select `MCB no for AC supply` value");
      return false;
    }
    else if(this.isSmartSplit && this.mcbAmp == ''){
      alert("please enter `MCB Amp` value");
      return false;
    }
    else if(this.isSmartSplit && this.dgStatus == ''){
      alert("please select `DG Status` value");
      return false;
    }
    else if(this.isSmartSplit && this.batteryBackup == ''){
      alert("please select `Battery Backup` value");
      return false;
    }
    return true;
  }

  saveNBSDetails(){
    if(!this.validateBasicDetails()){
      return false;
    }

    if(this.remark == ''){
      alert("please enter remark value");
      return false;
    }

    this.technology = this.createCommaSeprate(this.selectedTechnologyList);

    let saveNBSDetaJson = {
      loginEmpId : this.loginEmpId,
      currentTab : this.tabName,
      circleName : this.circleName,
      operator : this.operator,
      tviSiteId : this.tviSiteId,
      siteName : this.siteName,
      airtelSiteId : this.airtelSiteId,
      airtelLocatorId : this.airtelLocatorId,
      technology : this.technology,
      latitude1 : this.latitude1,
      longitude1 : this.longitude1,
      aglRequiredODSC : this.aglRequiredODSC == "" ? "0" : this.aglRequiredODSC,
      airtelBackhaul : this.airtelBackhaul,
      acDcBackup : this.acDcBackup,
      additionalPowerBackup2Hrs : this.additionalPowerBackup2Hrs,
      camuflauging : this.camuflauging,
      rowSpace : this.rowSpace,
      acPower : this.acPower == "" ? "0" : this.acPower, 
      noOfMcb : this.noOfMcb == "" ? "0" : this.noOfMcb, 
      mcbAmp : this.mcbAmp == "" ? "0" : this.mcbAmp, 
      dgStatus : this.dgStatus,
      batteryBackup : this.batteryBackup,
      remark : this.remark
    }

    this.spinner.show();
    this.sharedService.saveNBSDetails(saveNBSDetaJson)
    .subscribe( (response) =>{
      this.spinner.hide(); 
       //console.log(response);
         if(response.responseCode === Constant.SUCCESSFUL_STATUS_CODE){
          this.toastr.success('Successfully save', 'Alert');
          this.refreshPage();
          this.spinner.hide();
        }
        else{
          this.toastr.error('SOMETHING_WRONG', 'Alert');
          this.spinner.hide();
        }
  },
    (error)=>{
      this.toastr.warning(Constant.returnServerErrorMessage("saveNBSDetails"),"Alert !");
      this.spinner.hide();
    })
  }

}
