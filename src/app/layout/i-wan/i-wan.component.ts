import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateNBSService } from 'src/app/shared/services/createNBSService';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Constant } from 'src/app/shared/constant/Constant';
declare var $;

@Component({
  selector: 'app-i-wan',
  templateUrl: './i-wan.component.html',
  styleUrls: ['./i-wan.component.css']
})
export class IWanComponent implements OnInit {
  tabName : string = "I_WAN";
  circleName : any = "";
  tviSiteId : any = "";
  tviSiteIdList = [];
  selectedTviSiteIdList = [];
  airtelSiteId : any = "";
  airtelLocatorId : any = "";
  aglRequired : any = "";
  siteName : any = "";
  latitude1 : any = "";
  longitude1 : any = "";
  siteAddress : any = "";
  district : any = "";
  state : any = "";
  siteType : any = "";
  clutter : any = "";
  remark : any = "";
  loginEmpId = "";
  loginEmpRole = "";
  commaSeparateCircleName = "";
  isAdditionalUspace : boolean = false;

  noOfMCB : any = "";
  noOfUBR_Antenna : any = "";
  weightOfAntenna : any = "";
  typeOfAntenna : any = "";
  uSpace : any = "";
  powerRequired : any = "";
  
  noOfUBRAntennaList = [];
  weightOfAntennaList = [];
  typeOfAntennaList = [];
  noOfUSpaceList = [];
  noOfMCBList = [];
  powerRequiredList = [];

  operator = "";
  additionalLoad = "";
  totalRatedPower : any = "";
  multiSelectropdownSettings = {};
  singleSelectropdownSettings = {};
  constructor(private route:Router, private sharedService : CreateNBSService,
    private spinner: NgxSpinnerService,private toastr: ToastrService) {
      this.loginEmpId = localStorage.getItem("empId");
      this.loginEmpRole = localStorage.getItem("empRole")
      this.commaSeparateCircleName = localStorage.getItem("circleName");
      this.operator = localStorage.getItem("operator");
      let currentUrl = route.url;
      if(currentUrl === "/layout/ubr"){
        this.tabName = "UBR";
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
        if(paramCode == "iWan_noOfUBR_Antenna"){
          let splitData = paramDesc.split(",");
          for(let i=0;i<splitData.length;i++){
            let json = {
              id : splitData[i]
            }
            this.noOfUBRAntennaList.push(json)
          }
        }
        else if(paramCode == "iWan_WeightOfAntenna"){
          let splitData = paramDesc.split(",");
          for(let i=0;i<splitData.length;i++){
            let json = {
              id : splitData[i]
            }
            this.weightOfAntennaList.push(json)
          }
        }
        else if(paramCode == "iWan_typeOfAntenna"){
          let splitData = paramDesc.split(",");
          for(let i=0;i<splitData.length;i++){
            let json = {
              id : splitData[i]
            }
            this.typeOfAntennaList.push(json)
          }
        }
        else if(paramCode == "iWan_noOfUSpace"){
          let splitData = paramDesc.split(",");
          for(let i=0;i<splitData.length;i++){
            let json = {
              id : splitData[i]
            }
            this.noOfUSpaceList.push(json)
          }
        }
        else if(paramCode == "iWan_powerRequired"){
          let splitData = paramDesc.split(",");
          for(let i=0;i<splitData.length;i++){
            let json = {
              id : splitData[i]
            }
            this.powerRequiredList.push(json)
          }
        }
        else if(paramCode == "iWan_noOfMCB"){
          let splitData = paramDesc.split(",");
          for(let i=0;i<splitData.length;i++){
            let json = {
              id : splitData[i]
            }
            this.noOfMCBList.push(json)
          }
        }
        
        // else if(paramCode == "noOfRRU"){
        //   for(let i=0;i<=paramDesc;i++){
        //     let json = {
        //       id : i
        //     }
        //     this.noOfRRUList.push(json)
        //   }
        // }
        // else if(paramCode == "noOfRRU_Swap"){
        //   for(let i=0;i<=paramDesc;i++){
        //     let json = {
        //       id : i
        //     }
        //     this.noOfRRU_SwapList.push(json)
        //   }
        // }
        // else if(paramCode == "noOfIP55"){
        //   for(let i=0;i<=paramDesc;i++){
        //     let json = {
        //       id : i
        //     }
        //     this.noOfIP55List.push(json)
        //   }
        // }
        // else if(paramCode == "btsType"){
        //   let btsTypeSplit = paramDesc.split(",");
        //   for(let i=0;i<btsTypeSplit.length;i++){
        //     let json = {
        //       id : btsTypeSplit[i]
        //     }
        //     this.btsTypeList.push(json)
        //   }
        // }       
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
    // console.log(this.tviSiteId);
    if(this.selectedTviSiteIdList.length != 0){
        for(let i = 0;i<this.tviSiteIdList.length;i++){
          let tviSiteId = this.tviSiteIdList[i].paramCode;
          if(tviSiteId == this.tviSiteId){
            this.siteName = this.tviSiteIdList[i].siteName;
            this.latitude1 = this.tviSiteIdList[i].latitude;
            this.longitude1 = this.tviSiteIdList[i].longitude;
            this.siteAddress = this.tviSiteIdList[i].address;
            this.district = this.tviSiteIdList[i].district;
            this.state = this.tviSiteIdList[i].state;
            this.siteType = this.tviSiteIdList[i].siteType;
            this.clutter = this.tviSiteIdList[i].cluster;
            this.aglRequired = this.tviSiteIdList[i].aglRequired;
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
    this.siteAddress = "";
    this.district = "";
    this.state = "";
    this.siteType = "";
    this.clutter = "";
    this.aglRequired = "";
  }

  refreshPage(){
    this.route.navigateByUrl('/layout/dashbord', { skipLocationChange: true }).then(() => {
      if(this.tabName == "I_WAN")
        this.route.navigate(['/layout/i-wan']);
      else
        this.route.navigate(['/layout/ubr']);
    }); 
  }

  addInTotalRatedPower(){

    let powerRequired = this.powerRequired == '' ? '0' : this.powerRequired;
    let additionalLoad = this.additionalLoad == '' ? '0' : this.additionalLoad;

    this.totalRatedPower = 
                            parseFloat(powerRequired) + 
                            parseFloat(additionalLoad);
  }


  validateBasicInfoDetails() : any{ 
    if(this.circleName == ''){
      alert("please select circle value");
      return false;
    }
    else if(this.selectedTviSiteIdList.length == 0){
      alert("please select TVI site id");
      return false;
    }
    else if(this.airtelSiteId == ''){
      alert("please enter airtel site id value");
      return false;
    }
    else {
      return true;
    }

  }

  validateActiveInfoDeta() : any{
    if(this.noOfUBR_Antenna == ''){
      alert("please select No of UBR Antenna");
      return false;
    }
    else if(this.weightOfAntenna == ''){
      alert("please select Weight of Antenna");
      return false;
    }
    else if(this.typeOfAntenna == ''){
      alert("please select Type of Antenna");
      return false;
    }
    else if(this.uSpace == ''){
      alert("please select U Space");
      return false;
    }
    else if(this.powerRequired == ''){
      alert("please select Power Required");
      return false;
    }
    else if(this.noOfMCB == ''){
      alert("please select No of MCB of 6 Amp Rating");
      return false;
    }
    else if(this.additionalLoad == ''){
      alert("please enter `Additional Load (Node/Misc.) (in Watt)` value");
      return false;
    }
    else if(this.totalRatedPower === ''){
      alert("please click on `Click to add in Total Rated Power` link");
      return false;
    }
    else{
      return true;
    }
  }

  saveNBSDetails(){
    if(!this.validateBasicInfoDetails()){
      return false;
    }
    else if(!this.validateActiveInfoDeta()){
      return false;
    }
    
    if(this.remark == ''){
      alert("please enter remark value");
      return false;
    }

    this.addInTotalRatedPower();

    let saveNBSDetaJson = {
      loginEmpId : this.loginEmpId,
      currentTab : this.tabName,
      circleName : this.circleName,
      operator : this.operator,
      tviSiteId : this.tviSiteId,
      airtelSiteId : this.airtelSiteId,
      airtelLocatorId : this.airtelLocatorId,
      siteName : this.siteName,
      aglRequired : this.aglRequired,
      latitude1 : this.latitude1,
      longitude1 : this.longitude1,
      siteAddress : this.siteAddress,
      district : this.district,
      state : this.state,
      siteType : this.siteType,
      clutter : this.clutter,
      noOfUBR_Antenna : this.noOfUBR_Antenna,
      weightOfAntenna : this.weightOfAntenna,
      typeOfAntenna : this.typeOfAntenna,
      uSpace : this.uSpace,
      powerRequired : this.powerRequired,
      noOfMCB : this.noOfMCB,
      totalRatedPower : this.totalRatedPower,
      additionalLoad : this.additionalLoad,
      remark : this.remark
    }

    this.spinner.show();
    this.sharedService.saveNBSDetails(saveNBSDetaJson)
    .subscribe( (response) =>{
      this.spinner.hide(); 
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
