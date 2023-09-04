import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Constant } from 'src/app/shared/constant/Constant';
import { CreateNBSService } from 'src/app/shared/services/createNBSService';

@Component({
  selector: 'app-tcu',
  templateUrl: './tcu.component.html',
  styleUrls: ['./tcu.component.css']
})
export class TcuComponent implements OnInit {
  tabName : string = "TCU";
  circleName : any = "";
  tviSiteId : any = "";
  tviSiteIdList = [];
  selectedTviSiteIdList = [];
  airtelSiteId : any = "";
  aglRequired : any = "";
  siteName : any = "";
  latitude1 : any = "";
  longitude1 : any = "";
  latitude2 : any = "";
  longitude2 : any = "";
  siteAddress : any = "";
  district : any = "";
  state : any = "";
  siteType : any = "";
  clutter : any = "";
  remark : any = "";
  loginEmpId : any = "";
  loginEmpRole : any = "";
  commaSeparateCircleName : any = "";
  operator : any = "";
  singleSelectropdownSettings = {};
  rackSpaceInUList = [];
  rackSpaceInU = "";
  civFou = "";
  powPro = "";
  tempReqList = [];
  tempReq = "";
  constructor(private route:Router, private sharedService : CreateNBSService,
    private spinner: NgxSpinnerService,private toastr: ToastrService) { 
      this.loginEmpId = localStorage.getItem("empId");
      this.loginEmpRole = localStorage.getItem("empRole")
      this.commaSeparateCircleName = localStorage.getItem("circleName");
      this.operator = localStorage.getItem("operator");
    }

  ngOnInit() {
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
      
      if(paramCode == "TCU_TempRequired"){
        let splitList = paramDesc.split(",");
        let tempList = [];
        for(let i=0;i<splitList.length;i++){
          let json = {
            "paramCode" : splitList[i],
            "paramDesc" : splitList[i]+" "
          }
          tempList.push(json);
        }
        this.tempReqList = tempList;
      }

      else if(paramCode == "TCU_RackSpaceInU"){
        let splitList = paramDesc.split(",");
        let tempList = [];
        for(let i=0;i<splitList.length;i++){
          let json = {
            "paramCode" : splitList[i],
            "paramDesc" : splitList[i]+" "
          }
          tempList.push(json);
        }
        this.rackSpaceInUList = tempList;
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
            this.siteAddress = this.tviSiteIdList[i].address;
            this.district = this.tviSiteIdList[i].district;
            this.state = this.tviSiteIdList[i].state;
            this.siteType = this.tviSiteIdList[i].siteType;
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

  saveNBSDetails(){
    if(this.airtelSiteId == ""){
      alert("please enter VIL Site Id");
      return;
    }
    
    else if(this.rackSpaceInU == ""){
      alert("please select Rack Space In U");
      return;
    }
    else if(this.civFou == ""){
      alert("please select Civil Foundation");
      return;
    }
    else if(this.powPro == ""){
      alert("please enter Power Provisioning In Watts");
      return false;
    }
    else if(this.tempReq == ""){
      alert("please Temp Required (in deg C)");
      return false;
    }
    else if(this.remark == ""){
      alert("please enter Remark")
      return;
    }
    let jsonData = {
      loginEmpId : this.loginEmpId,
      currentTab : this.tabName,
      circleName : this.circleName,
      operator : this.operator,
      tviSiteId : this.tviSiteId,
      airtelSiteId : this.airtelSiteId,
      siteName : this.siteName,
      aglRequired : this.aglRequired,
      latitude1 : this.latitude1,
      longitude1 : this.longitude1,
      siteAddress : this.siteAddress,
      district : this.district,
      state : this.state,
      siteType : this.siteType,
      clutter : this.clutter,
      uSpace : this.rackSpaceInU,
      typeOfAntenna : this.civFou,
      powerConsumption : this.powPro,
      powerRequirement : this.tempReq,
      remark : this.remark
    }
    this.spinner.show();
    this.sharedService.saveNBSDetails(jsonData)
    .subscribe(
      (response)=>{
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
      }
    )
  }

  refreshPage(){
    this.route.navigateByUrl('/layout/dashbord', { skipLocationChange: true }).then(() => {
      this.route.navigate(['/layout/tcu']);
    });
  }

}
