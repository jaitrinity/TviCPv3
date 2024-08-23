import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Constant } from 'src/app/shared/constant/Constant';
import { CreateNBSService } from 'src/app/shared/services/createNBSService';
declare var $;

@Component({
  selector: 'app-air-fiber',
  templateUrl: './air-fiber.component.html',
  styleUrls: ['./air-fiber.component.css']
})
export class AirFiberComponent implements OnInit {

  tabName = "Air_Fiber";
  siteName = "";
  airtelSiteId = "";
  aglRequired = "";
  latitude1 = "";
  longitude1 = "";
  siteAddress = "";
  district = "";
  state = "";
  siteType = "";
  clutter = "";
  remark = "";
  tviSiteId : any = "";
  noOfAirFiber:any="";
  noOfAirFiberList= [0,1,2,3,4,5,6,7,8,9,10];
  tviSiteIdList = [];
  selectedTviSiteIdList = [];
  totalRatedPower : any = "";
  circleName : any = "";
  loginEmpId="";
  loginEmpRole="";
  commaSeparateCircleName="";
  operator="";
  multiSelectropdownSettings = {};
  singleSelectropdownSettings = {};
  constructor(private route:Router, private sharedService : CreateNBSService, 
    private spinner: NgxSpinnerService,private toastr: ToastrService) { 
    this.loginEmpId = localStorage.getItem("empId");
    this.loginEmpRole = localStorage.getItem("empRole")
    this.commaSeparateCircleName = localStorage.getItem("circleName");
    this.operator = localStorage.getItem("operator");
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
  }

  createRange(number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
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
      this.route.navigate(['/layout/air-fiber']);
    }); 
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
      alert("please enter RJIO site id value");
      return false;
    }
    else {
      return true;
    }
  }

  airFiberList=[];
  validateAirFiberDetails():any{
    this.totalRatedPower = 0;
    this.airFiberList = [];
    if(this.noOfAirFiber == ''){
      alert("please select No of AirFiber");
      return false;
    }
    else{
      for(let i=1;i<=this.noOfAirFiber;i++){
        if($("#aa"+i).val() == ''){
          alert("please enter Make " +i+ " value");
          return false;
        }
        else if($("#bb"+i).val() == ''){
          alert("please enter Model " +i+ " value");
          return false;
        }
        else if($("#cc"+i).val() == ''){
          alert("please enter Dimensions " +i+ " value");
          return false;
        }
        else if($("#dd"+i).val() == ''){
          alert("please enter Weight of Equipment  (Kg) " +i+ " value");
          return false;
        }
        else if($("#ee"+i).val() == ''){
          alert("please enter Band " +i+ " value");
          return false;
        }
        else if($("#ff"+i).val() == ''){
          alert("please enter Technology (5G only Or 4G/5G) " +i+ " value");
          return false;
        }
        else if($("#gg"+i).val() == ''){
          alert("please enter Maximum Load (Watt) " +i+ " value");
          return false;
        }
        else if($("#hh"+i).val() == ''){
          alert("please enter MCB " +i+ " value");
          return false;
        }
        else if($("#ii"+i).val() == ''){
          alert("please enter Equipment Placement " +i+ " value");
          return false;
        }
        else{
          let load = $("#gg"+i).val();
          this.totalRatedPower +=parseFloat(load);

          let json = {
            id : i,
            make : $("#aa"+i).val(),
            model : $("#bb"+i).val(),
            dimensions : $("#cc"+i).val(),
            weight : $("#dd"+i).val(),
            band : $("#ee"+i).val(),
            technology : $("#ff"+i).val(),
            load : $("#gg"+i).val(),
            mcb : $("#hh"+i).val(),
            equipPlacement : $("#ii"+i).val(),
          }
          this.airFiberList.push(json);
        }
        
      }
      return true;
    }
  }

  saveNBSDetails(){
    if(!this.validateBasicInfoDetails()){
      return false;
    }
    else if(!this.validateAirFiberDetails()){
      return false;
    }
    
    if(this.remark == ''){
      alert("please enter remark value");
      return false;
    }

    let saveNBSDetaJson = {
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
      noOfAirFiber : this.noOfAirFiber,
      airFiberList: this.airFiberList,
      totalRatedPower : this.totalRatedPower,
      remark : this.remark
    }

    // console.log(JSON.stringify(saveNBSDetaJson));
    

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
