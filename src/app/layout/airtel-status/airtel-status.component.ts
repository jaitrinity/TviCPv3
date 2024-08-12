import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Constant } from 'src/app/shared/constant/Constant';
import { AirtelServices } from 'src/app/shared/services/AirtelServices';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { CommonFunction } from 'src/app/shared/constant/CommonFunction';
declare var jQuery;
declare var $;

@Component({
  selector: 'app-airtel-status',
  templateUrl: './airtel-status.component.html',
  // templateUrl: './airtel-status.component.2.html',
  styleUrls: ['./airtel-status.component.css']
})
export class AirtelStatusComponent implements OnInit {

  isDashboard = false;
  filterSrNumber = "";
  filterCircleName = "";
  filterTviSiteId = "";
  filterSiteId = "";
  filterProductType = "";
  filterSrStatus = "";
  filterOperator = "";
  filterStartDate = "";
  filterEndDate = "";
  
  airtelDetailsList = [];
  btsCabinetList = [];
  rruCabinetList = [];
  radioAntennaList = [];
  mwAntennaList = [];
  bscRncCabinetList = [];
  otherNodeList = [];
  mwIduList = [];
  mcbData = {};
  mcbList = [];
  fibreNodeList = [];
  tmaTmbList = [];
  attachedList = [];
  auditList = [];
  remark = "";
  TOCO_Site_Id = "";
  spLatitude = "";
  spLongitude = "";
  Date_of_Proposal = "";
  Power_Rating = "";
  Site_Electrification_Distance = "";
  Tentative_EB_Availibility = "";
  Additional_Charge = "";
  Address1 = "";
  Head_Load_Charge = "";
  Electrification_Cost = "";
  Electrification_Line_Distance = "";
  Electricity_Connection_HT_LT = "";
  Infra_Details = "";
  Site_Classification = "";
  Expected_Rent_to_Landlord = "";
  Non_Refundable_Deposit = "";
  Estimated_Deployment_Time__in_days_ = "";
  Additional_Capex = "";
  Standard_Rates = "";
  Fiber_Charges = "";
  Rental_Threshold = "";
  Excess_Rent_beyond_Threshold = "";
  Tentative_Rental_Premium = "";
  Additional_Rent = "";
  IPFee = "";
  Field_Operation_Charges = "";
  Security_Guard_Charges = "";
  Mobilization_Charges = "";
  Erection_Charges = "";
  Battery_backup_Hrs = "";
  Land_Lord_Charges_or_Rent_Charges = "";
  Wind_Speed = "";
  TowerHeight = "";
  Recommended_Product_Type_by_Acquisition = "";
  Association_AreyouWorkingInAnyBhartiGroup="";
  Association_IfyesmentiontheBhartiUnitName="";
  Association_NameOftheEmployee="";
  Association_EmployeeId="";
  Relative_AnyRelativesareWorkingWithBhartiGroup="";
  Relative_IfyesmentiontheBhartiUnitName="";
  Relative_NameOftheEmployee="";
  Relative_EmployeeId="";
  Relative_LandlordRelationshipwithEmployee="";
  Relative_MobileNumberOfrelativeWithAirtel="";
  Declaration="";
  Agl = "";
  Distance_from_P1_Lat_Long_in_meter = "";
  Rejection_Remarks = "";
  Difficult = "";
  PROPOSED = "Proposed";
  feasibilityArr = ["Yes","No","Proposed"];
 
  Tower_Completion = "";
  Shelter_Equipment_RoomReady = "";
  AirConditioner_Commissioned = "";
  DG_Commissioned = "";
  Acceptance_Testing_Of_Site_Infrastructure_Completed_Status = "";
  EB_Status = "";
  Created_By = "";
  OFC_Duct_Laying_Done = "";
  Access_To_Site_Available_Status = "";
  Engineer_Name = "";
  Engineer_Phone_Number = "";
  Notice_Form_Generation_Date = "";
  rfiDate = "";
  rfsDate = "";
  viewBTS : boolean = false;
  viewRRU : boolean = false;
  viewRadioAntenna : boolean = false;
  viewMwAntenna : boolean = false;
  viewBscRncCabinet : boolean = false;
  viewOtherNode : boolean = false;
  viewMwIdu : boolean = false;
  viewMCB : boolean = false;
  viewFibreNode : boolean = false;
  viewTmaTmb : boolean = false;
  isActionPending : boolean = false;
  workflowHistory : boolean = false;
  btsLocationList = ["Outdoor", "ID – Wall Mounted", "ID – Transmission Rack", "ID – Cable Tray", "ID – On BTS Top", 
  "ID – Existing BTS", "OD – Existing BTS", "OD – Transmission Rack", "On Floor", "Indoor", "Tower Top", "Tower Leg", 
  "Tower Base", "Tower middle", "Operator Transmission Rack"];
  btsMainUnit = ["Outdoor", "ID – Wall Mounted", "ID – Transmission Rack", "ID – Cable Tray", "ID – On BTS Top", 
  "ID – Existing BTS", "OD – Existing BTS", "OD – Transmission Rack", "On Floor", "Indoor", "Tower Top", "Tower Leg", 
  "Tower Base", "Tower middle", "Operator Transmission Rack"];
  btsType = ["Outdoor","Indoor","Towertop"];
  fibreNode_nodeLocationList = ["Indoor Floor space", "Indoor TOCO TX Rack", "Indoor Op-Co Tx Rack/Existing Equipment",
  "On Tower", "Outdoor Floor space", "Outdoor TOCO TX Rack", "Outdoor Op-Co Tx Rack/Existing Equipment"];
  typeOfFiberLaying = ["Over the Ground", "Under Ground", "Both"];
  typeOfFms = ["Rack Mounted", "Wall Mounted", "Not Applicable"];
  rruLocation = ["Indoor", "Tower Base", "Tower Top", "Tower Middle"];
  rruUnit = ["Indoor", "Tower Base", "Tower Top", "Tower Middle"];
  mwIduNodeLocation = ["Indoor TOCO TX Rack","On Tower"];
  clutterList = [{"paramCode":"Urban","paramDesc":"Urban "},
    {"paramCode":"Semi Urban","paramDesc":"Semi Urban "},
    {"paramCode":"Rural","paramDesc":"Rural "},
    {"paramCode":"Metro","paramDesc":"Metro "},
    {"paramCode":"Densc","paramDesc":"Densc "}];
  clutter = "";
  sharingPotential = "";
  noRecordFound : boolean = false;
  suggestedSiteAddress = "";
  suggestedDistrict = "";
  suggestedState = "";
  suggestedPincode = "";
  suggestedTownVillage = "";
  suggestedCity = "";
  suggestedLatitude = "";
  suggestedLongitude = "";
  suggestedDeviation = "";
  suggestedTowerType = "";
  suggestedBuildingHeight = "";
  suggestedTowerHeight = "";
  suggestedClutter = "";
  suggestedLandOwnerRent = "";
  suggestedElectrificationCharges = "";
  suggestedMcCharges = "";
  pagination = "";
  allCircleList = [];
  allOperatorList = [];
  productTypeList = [];
  version : number = 0;
  portalRunningVersion : number = 0;
  recordOnApage : number = 0;
  selectAll : boolean = false;
  currentDate = "";
  previousDate = "";
  loginEmpId = "";
  loginEmpRole = "";
  circleName = "";
  operator = "";
  isHoUser = "";
  constructor(private route:Router, private airtelService : AirtelServices, 
    private spinner: NgxSpinnerService,
    private toastr: ToastrService, private datePipe : DatePipe) { 
    this.loginEmpId = localStorage.getItem("empId");
    this.loginEmpRole = localStorage.getItem("empRole")
    this.circleName = localStorage.getItem("circleName");
    this.operator = localStorage.getItem("operator");
    this.isHoUser = localStorage.getItem("isHoUser");
    this.version = Constant.VERSION;
  }

  ngOnInit() {
    let currentURL = this.route.url;
    if(currentURL == "/layout/airtel-status-pending"){
      this.isDashboard = true;
    }
    this.currentDate = this.datePipe.transform(new Date(),'yyyy-MM-dd');
    let curDate = new Date();
    curDate.setDate(curDate.getDate() - 3)
    this.previousDate = this.datePipe.transform(curDate,'yyyy-MM-dd');
    this.getNoOfList();
  }

  allNoOfList = [];
  getNoOfList(){
    this.allNoOfList = JSON.parse(localStorage.getItem("allNoOfList"));

    for(let i=0;i<this.allNoOfList.length;i++){
      let paramCode = this.allNoOfList[i].paramCode;
      let paramDesc = this.allNoOfList[i].paramDesc; 
      
      if(paramCode == 'allCircleList'){
        this.allCircleList = paramDesc;
      }
      else if(paramCode == 'recordOnApage'){
        this.recordOnApage = paramDesc;
      }
      else if(paramCode == 'allOperator'){
        this.allOperatorList = paramDesc.split(",");
      }
      else if(paramCode == 'iDeployProductTypeList'){
        let productTypeSplit = paramDesc.split(",");
        let tempProductTypeList = [];
        for(let i=0;i<productTypeSplit.length;i++){
          let json = {
            "paramCode" : productTypeSplit[i].split(":")[0],
            "paramDesc" : productTypeSplit[i].split(":")[1]
          }
          tempProductTypeList.push(json);
        }
        this.productTypeList = tempProductTypeList;

      }

      else if(paramCode == 'portalRunningVersion'){
        this.portalRunningVersion = paramDesc;
      }
      
      if(i == this.allNoOfList.length-1){
        if(this.version != this.portalRunningVersion){
          alert("Some update on portal, please reload page by using key (CTRL + F5).")
          localStorage.clear();
          this.route.navigate(['/login']);
        }
        else{
          this.getAirtetDetails(1);
        }
      }
    }
  }

  pageNumber = 0; 
  getAirtetDetails(pageNum){
    this.is_show_reject_all_btn = false;
    this.airtelDetailsList = [];
    this.noRecordFound = false;
    this.pageNumber = pageNum
    let jsonData = {
      isDashboard : this.isDashboard,
      pageNum : this.pageNumber,
      recordOnApage : this.recordOnApage,
      loginEmpId : this.loginEmpId,
      loginEmpRole : this.loginEmpRole,
      circleName : this.circleName,
      operator : this.operator,
      isHoUser : this.isHoUser,
      filterSrNumber : this.filterSrNumber,
      filterCircleName : this.filterCircleName,
      filterTviSiteId : this.filterTviSiteId,
      filterSiteId : this.filterSiteId,
      filterProductType : this.filterProductType,
      filterSrStatus : this.filterSrStatus,
      filterOperator : this.filterOperator,
      filterStartDate : this.filterStartDate,
      filterEndDate : this.filterEndDate
    }
    this.spinner.show();
    this.airtelService.anyPostRequest('getAirtelDetails',jsonData)
    .subscribe(
      (response)=>{
        if(response.responseCode == Constant.SUCCESSFUL_RESPONSE){
          this.airtelDetailsList = response.wrappedList;
          this.pagination = response.pagination;
          if(this.pagination !="") this.createPagination();
        }
        else if(response.responseCode == Constant.NO_RECORDS_FOUND_CODE){
          this.pagination = "";
          this.noRecordFound = true;
        }
        else{

        }
        setTimeout(() => {
          $(".my-pagination").removeClass("pagination-active");
          $(".my-pagination_"+this.pageNumber).addClass("pagination-active");
        }, 100);
        this.spinner.hide();
      },
      (error)=>{
        this.toastr.warning(Constant.returnServerErrorMessage("getAirtelDetails"),"Alert !");
        this.spinner.hide();
      }
    )
  }

  pageArr = [];
  createPagination(){
    let pageShow = 10;
    let allPages = this.pagination.split(",");
    let pageLength = allPages.length;
    let dd = "";
    for(let i=0;i<pageLength;i++){
      let page = allPages[i];
      let pageParse = parseInt(page);
      dd += pageParse;
      if(i < (pageLength-1) && pageParse % pageShow != 0){
        dd += ",";
      }
      if(pageLength > pageShow){
        if(pageParse % pageShow == 0 && i < (pageLength-1)){
          dd += ":"
        }
      }
    }
    this.pageArr = dd.split(":");
  }

  activeIndex = 0;
  gotoPrev(i){
    $("#div"+i).hide()
    $("#div"+(i-1)).show();
    i = i-1;
    this.activeIndex = i;
    $("#page-select").prop('selectedIndex', this.activeIndex);
    this.getAirtetDetails(10*i+1);
  }
  gotoNext(i){
    $("#div"+i).hide()
    $("#div"+(i+1)).show();
    i = i+1;
    this.activeIndex = i;
    $("#page-select").prop('selectedIndex', this.activeIndex);
    this.getAirtetDetails(10*i+1);
  }

  gotoBeginEnd(hideIndex,showIndex){
    $("#div"+hideIndex).hide();
    $("#div"+showIndex).show();
    this.activeIndex = showIndex;
    $("#page-select").prop('selectedIndex', this.activeIndex);
    this.getAirtetDetails(10*showIndex+1);
  }

  changePagination(evt){
    let v = evt.target.value;
    $("#div"+this.activeIndex).hide();
    $("#div"+v).show();
    this.activeIndex = v;
    this.getAirtetDetails(10*v+1);
  }

  isNBS_SR = false;
  isSiteUpgrade_SR = false;
  isNewTenency_SR = false;
  isHPSC_SR = false;
  findSrType(){
    if(this.tabName == "CreateNBS"){
      this.isNBS_SR = true;
    }
    else if(this.tabName == "Site_Upgrade"){
      this.isSiteUpgrade_SR = true;
    }
    else if(this.tabName == "New_Tenency"){
      this.isNewTenency_SR = true;
    }
    else if(this.tabName == "HPSC"){
      this.isHPSC_SR = true;
    }
  }

  viewSrNumber = "";
  viewSpNumber = "";
  viewSoNumber = "";
  viewCircleName = "";
  viewRfiDate = "";
  viewTocoSiteId = "";
  buttonList = [];
  attachmentList = [];
  currentStatus = "";
  tabName = "";
  airtelDataObj : any = {};
  srViewObj : any = {};
  viewAirtelSrDetails(srNumber){
    this.buttonList = [];
    this.attachmentList = [];
    this.isNBS_SR = false;
    this.isNewTenency_SR = false;
    this.isSiteUpgrade_SR = false;
    this.isHPSC_SR = false;
    this.viewBTS = false;
    this.viewRRU = false;
    this.viewRadioAntenna = false;
    this.viewMwAntenna = false;
    this.viewBscRncCabinet = false;
    this.viewOtherNode = false;
    this.viewMwIdu = false;
    this.viewMCB = false;
    this.viewFibreNode = false;
    this.viewTmaTmb = false;
    this.isActionPending = false;
    this.Date_of_Proposal = this.currentDate
    this.rfiDate = this.currentDate;
    this.rfsDate = this.currentDate;
    this.remark = "";
    this.viewSrNumber = srNumber;
    this.airtelDataObj = this.airtelDetailsList.filter(x => x.srNumber == srNumber)[0];
    this.currentStatus = this.airtelDataObj.status;
    this.viewSpNumber = this.airtelDataObj.spNumber;
    this.viewSoNumber = this.airtelDataObj.soNumber;
    this.viewCircleName = this.airtelDataObj.circleName;
    this.viewRfiDate = this.airtelDataObj.rfiDate;
    this.tabName = this.airtelDataObj.tabName;
    this.findSrType();
    let jsonData = {
      srNumber : this.viewSrNumber,
      loginEmpId : this.loginEmpId,
      loginEmpRole : this.loginEmpRole,
      circleName : this.circleName,
      operator : this.operator,
      isHoUser : this.isHoUser,
      tabName : this.tabName,
      currentStatus : this.currentStatus
    }
    this.spinner.show();
    this.airtelService.anyPostRequest('viewAirtelSrDetails',jsonData)
    .subscribe(
      (response)=>{
        let wrappedList = response.wrappedList[0];
        this.srViewObj = wrappedList;
        this.viewTocoSiteId = this.srViewObj.TOCO_Site_Id;
        //console.log(JSON.stringify(this.srViewObj));
        // this.Power_Rating = this.srViewObj.Total_Rated_Power_In_Watt;
        this.Power_Rating = this.srViewObj.Total_Rated_Power_In_KW;
        let buttonAfterStatus = wrappedList.buttonAfterStatus;
        if(buttonAfterStatus !=""){
          let splitList = buttonAfterStatus.split(",");
          let tempList = [];
          for(let i=0;i<splitList.length;i++){
            let actionObj = {
              button : splitList[i].split(":")[0],
              afterStatus : splitList[i].split(":")[1]
            }
            tempList.push(actionObj);
          }
          this.buttonList = tempList;
          this.isActionPending = true;

          let attachment = wrappedList.attachment;
          if(attachment != ""){
            let t1 = attachment.split("#");
            let arr1 = [];
            for(let i=0;i<t1.length;i++){
              let att = t1[i];
              arr1.push(att);
            }

            let arr2 = [];
            for(let i=0;i<arr1.length;i++){
              let att = arr1[i];
              let a = att.indexOf("(");
              let b = att.indexOf(")");
              let cc = att.substring(a+1,b);
              let action = att.substring(0,a);
              let json = {
                cc:cc,
                action:action
              }
              arr2.push(json);
            }

            for(let i=0;i<arr2.length;i++){
              let att = arr2[i];
              let cc = att["cc"];
              let action = att["action"];
              let attList = [];
              let ccSplit = cc.split(",")
              for(let j=0;j<ccSplit.length;j++){
                let addName = ccSplit[j].split(":")[0];
                if(addName != ""){
                  let json = {
                    id: action+"_"+j,
                    attName:addName,
                    mandatory:ccSplit[j].split(":")[1]
                  }
                  attList.push(json);
                }
                
              }
              let json = {
                action:action,
                attList:attList
              }
              this.attachmentList.push(json);
            }
            //console.log(this.attachmentList);
          }
          
        }
        else{
          this.viewBTS = true;
          this.viewRRU = true;
          this.viewRadioAntenna = true;
          this.viewMwAntenna = true;
          this.viewBscRncCabinet = true;
          this.viewOtherNode = true;
          this.viewMwIdu = true;
          this.viewMCB = true;
          this.viewFibreNode = true;
          this.viewTmaTmb = true;
          this.isActionPending = false;
        }
        
        this.btsCabinetList = wrappedList.BTS_Cabinet;
        this.rruCabinetList = wrappedList.RRU_Cabinet;
        this.radioAntennaList = wrappedList.Radio_Antenna;
        this.mwAntennaList = wrappedList.MW_Antenna;
        this.bscRncCabinetList = wrappedList.BSC_RNC_Cabinets;
        this.otherNodeList = wrappedList.Other_Node;
        this.mwIduList = wrappedList.MW_IDU;
        this.mcbList = wrappedList.MCB;
        this.mcbData = this.mcbList[0];
        this.fibreNodeList = wrappedList.Fibre_Node;
        this.tmaTmbList = wrappedList.TMA_TMB;
        this.attachedList = wrappedList.attachedList;
        this.auditList = wrappedList.auditList;

        this.suggestedSiteAddress = wrappedList.suggestedSiteAddress;
        this.suggestedDistrict = wrappedList.suggestedDistrict;
        this.suggestedState = wrappedList.suggestedState;
        this.suggestedPincode = wrappedList.suggestedPincode;
        this.suggestedTownVillage = wrappedList.suggestedTownVillage;
        this.suggestedCity = wrappedList.suggestedCity;
        this.suggestedLatitude = wrappedList.suggestedLatitude;
        this.suggestedLongitude = wrappedList.suggestedLongitude;
        this.suggestedDeviation = wrappedList.suggestedDeviation;
        this.suggestedTowerType = wrappedList.suggestedTowerType;
        this.suggestedBuildingHeight = wrappedList.suggestedBuildingHeight;
        this.suggestedTowerHeight = wrappedList.suggestedTowerHeight;
        this.suggestedClutter = wrappedList.suggestedClutter;
        this.suggestedLandOwnerRent = wrappedList.suggestedLandOwnerRent;
        this.suggestedElectrificationCharges = wrappedList.suggestedElectrificationCharges;
        this.suggestedMcCharges = wrappedList.suggestedMcCharges;

        this.Address1 = this.suggestedSiteAddress;
        this.spLatitude = this.suggestedLatitude;
        this.spLongitude = this.suggestedLongitude;
        this.clutter = this.suggestedClutter;
        this.Electrification_Cost = this.suggestedElectrificationCharges;
        this.TowerHeight = this.suggestedTowerHeight;
        this.Land_Lord_Charges_or_Rent_Charges = this.suggestedLandOwnerRent;

        this.spinner.hide();

        $("#viewAirtelSrModal").modal({
          backdrop : 'static',
          keyboard : false
        });

      },
      (error)=>{
        this.toastr.warning(Constant.returnServerErrorMessage("viewAirtelSrDetails"),"Alert !");
        this.spinner.hide();
      }
    )
  }

  validBtsList = [];
  validateBtsData() : any{
    this.validBtsList = [];
    for(let i=0;i<this.btsCabinetList.length;i++){
      let typeNo = this.btsCabinetList[i].typeNo;
      let feas = $("#btsFeas"+typeNo).val();
      if(feas == ''){
        alert("Please select `BTS feasibility` of "+typeNo);
        $("#btsFeas"+typeNo).focus();
        return false;
      }
      else if(feas == this.PROPOSED && $("#btsHeightMtrs"+typeNo).val() == ''){
        alert("Please enter `Height Mtrs` of "+typeNo);
        $("#btsHeightMtrs"+typeNo).focus();
        return false;
      }
      else if(feas == this.PROPOSED && $("#btsMainUnit"+typeNo).val() == ''){
        alert("Please select `Main Unit incase of TT Split Version` of "+typeNo);
        $("#btsMainUnit"+typeNo).focus();
        return false;
      }
      else{
        let json = {
          typeNo : typeNo,
          Feasibility : $("#btsFeas"+typeNo).val(),
          Action : $("#btsAction"+typeNo).val(),
          NetWork_Type : $("#btsNetworkType"+typeNo).val(),
          BTS_Type : $("#btsType"+typeNo).val(),
          Band : $("#btsBand"+typeNo).val(),
          Manufacturer : $("#btsManufacturer"+typeNo).val(),
          Make_of_BTS : $("#btsMakeOfBts"+typeNo).val(),
          Length_Mtrs : $("#btsLengthMtrs"+typeNo).val(),
          Width_Mtrs : $("#btsWidthMtrs"+typeNo).val(),
          Height_Mtrs : $("#btsHeightMtrs"+typeNo).val(),
          BTS_Power_Rating_KW : $("#btsBtsPowerRaingKW"+typeNo).val(),
          BTS_Location : $("#btsLocation"+typeNo).val(),
          BTS_Voltage : $("#btsVoltage"+typeNo).val(),
          Main_Unit_incase_of_TT_Split_Version : $("#btsMainUnit"+typeNo).val(),
          Space_Occupied_in_Us_incase_of_TT_Split_Version : $("#btsSpaceOccupied"+typeNo).val(),
          Location_Of_RRU : $("#btsRruUnit"+typeNo).val(),
          No_of_RRU_Units_incase_of_TT_Split_Version : $("#btsNoOfRru"+typeNo).val(),
          Combined_wt_of_RRU_Unit_incase_of_TT_Split_Version : $("#btsCombinedWt"+typeNo).val(),
          AGL_of_RRU_unit_in_M : $("#btsAgl"+typeNo).val(),
          Weight_of_BTS_including_TMA_TMB_Kg : $("#btsWeight"+typeNo).val(),
          Billable_Weigtht : $("#btsBillingWeight"+typeNo).val()
        }
        this.validBtsList.push(json);
      }
    }
    return true;
  }

  validRruList = [];
  validateRruData() : any{
    this.validRruList = [];
    for(let i=0;i<this.rruCabinetList.length;i++){
      let typeNo = this.rruCabinetList[i].typeNo;
      let feas = $("#rruFeas"+typeNo).val();
      if(feas == ''){
        alert("Please select `RRU feasibility` of "+typeNo);
        $("#rruFeas"+typeNo).focus();
        return false;
      }
      else if(feas == this.PROPOSED && $("#rruRruUnit"+typeNo).val() == ''){
        alert("Please select `RRU Location` of "+typeNo);
        $("#rruRruUnit"+typeNo).focus();
        return false;
      }
      else if(feas == this.PROPOSED && $("#rruHeightMtrs"+typeNo).val() == ''){
        alert("Please enter `Height Mtrs` of "+typeNo);
        $("#rruHeightMtrs"+typeNo).focus();
        return false;
      }
      else{
        let json = {
          typeNo : typeNo,
          Feasibility : $("#rruFeas"+typeNo).val(),
          Action : $("#rruAction"+typeNo).val(),
          NetWork_Type : $("#rruNetworkType"+typeNo).val(),
          BTS_Type : $("#rruType"+typeNo).val(),
          Band : $("#rruBand"+typeNo).val(),
          Manufacturer : $("#rruManufacturer"+typeNo).val(),
          Make_of_BTS : $("#rruMakeOfBts"+typeNo).val(),
          Length_Mtrs : $("#rruLengthMtrs"+typeNo).val(),
          Width_Mtrs : $("#rruWidthMtrs"+typeNo).val(),
          Height_Mtrs : $("#rruHeightMtrs"+typeNo).val(),
          BTS_Power_Rating_KW : $("#rruBtsPowerRaingKW"+typeNo).val(),
          BTS_Location : $("#rruLocation"+typeNo).val(),
          BTS_Voltage : $("#rruVoltage"+typeNo).val(),
          Main_Unit_incase_of_TT_Split_Version : $("#rruMainUnit"+typeNo).val(),
          Space_Occupied_in_Us_incase_of_TT_Split_Version : $("#rruSpaceOccupied"+typeNo).val(),
          Location_Of_RRU : $("#rruRruUnit"+typeNo).val(),
          No_of_RRU_Units_incase_of_TT_Split_Version : $("#rruNoOfRru"+typeNo).val(),
          Combined_wt_of_RRU_Unit_incase_of_TT_Split_Version : $("#rruCombinedWt"+typeNo).val(),
          AGL_of_RRU_unit_in_M : $("#rruAgl"+typeNo).val(),
          Weight_of_BTS_including_TMA_TMB_Kg : $("#rruWeight"+typeNo).val(),
          Billable_Weigtht : $("#rruBillingWeight"+typeNo).val()
        }
        this.validRruList.push(json);
      }
    }
    return true;
  }

  validRadioAntennaList = [];
  validateRadioAntennaData() : any{
    this.validRadioAntennaList = [];
    for(let i=0;i<this.radioAntennaList.length;i++){
      let typeNo = this.radioAntennaList[i].typeNo;
      let feas = $("#radioAntennaFeas"+typeNo).val();
      if(feas == ''){
        alert("Please select `Radio Antenna feasibility` of "+typeNo);
        $("#radioAntennaFeas"+typeNo).focus();
        return false;
      }
      else if(feas == this.PROPOSED && $("#radAntHeightAgl"+typeNo).val() == ''){
        alert("Please select `Height AGL_m` of "+typeNo);
        $("#radAntHeightAgl"+typeNo).focus();
        return false;
      }
      else if(feas == this.PROPOSED && $("#radAntAziDeg"+typeNo).val() == ''){
        alert("Please select `Azimuth Degree` of "+typeNo);
        $("#radAntAziDeg"+typeNo).focus();
        return false;
      }
      else{
        let json = {
          typeNo : typeNo,
          Feasibility : $("#radioAntennaFeas"+typeNo).val(),
          Action : $("#radAntAction"+typeNo).val(),
          RadioAntenna_i_WAN : $("#radAntIwan"+typeNo).val(),
          Height_AGL_m : $("#radAntHeightAgl"+typeNo).val(),
          Azimuth_Degree : $("#radAntAziDeg"+typeNo).val(),
          Length_m : $("#radAntLenthM"+typeNo).val(),
          Width_m : $("#radAntWidthM"+typeNo).val(),
          Depth_m : $("#radAntDepthM"+typeNo).val(),
          No_of_Ports : $("#radAntNoOfPorts"+typeNo).val(),
          RadioAntenna_Type : $("#radAntType"+typeNo).val(),
          BandFrequencyMHz_FrequencyCombination : $("#radAntBandFreq"+typeNo).val()
        }
        this.validRadioAntennaList.push(json);
      }
    }
    return true;
  }

  validMwAntennaList = [];
  validateMwAntennaData() : any{
    this.validMwAntennaList = [];
    for(let i=0;i<this.mwAntennaList.length;i++){
      let typeNo = this.mwAntennaList[i].typeNo;
      let feas = $("#mwAntennaFeas"+typeNo).val();
      if(feas == ''){
        alert("Please select `MW Antenna feasibility` of "+typeNo);
        $("#mwAntennaFeas"+typeNo).focus();
        return false;
      }
      else if(feas == this.PROPOSED && $("#mwH"+typeNo).val() == ''){
        alert("Please select `Height in Mtrs` of "+typeNo);
        $("#mwH"+typeNo).focus();
        return false;
      }
      else if(feas == this.PROPOSED && $("#mwA"+typeNo).val() == ''){
        alert("Please select `Azimuth Degree` of "+typeNo);
        $("#mwA"+typeNo).focus();
        return false;
      }
      else{
        let json = {
          typeNo : typeNo,
          Feasibility : $("#mwAntennaFeas"+typeNo).val(),
          Action : $("#mwAction"+typeNo).val(),
          MWAntenna_i_WAN : $("#mwI"+typeNo).val(),
          Size_of_MW : $("#mwS"+typeNo).val(),
          Height_in_Mtrs : $("#mwH"+typeNo).val(),
          Azimuth_Degree : $("#mwA"+typeNo).val()
        }
        this.validMwAntennaList.push(json);
      }
    }
    return true;
  }

  validBscRncList = [];
  validateBscRncData() : any{
    this.validBscRncList = [];
    for(let i=0;i<this.bscRncCabinetList.length;i++){
      let typeNo = this.bscRncCabinetList[i].typeNo;
      let feas = $("#bscRncFeas"+typeNo).val();
      if(feas == ''){
        alert("Please select `BSC RNC feasibility` of "+typeNo);
        $("#bscRncFeas"+typeNo).focus();
        return false;
      }
      else if(feas == this.PROPOSED && $("#bscRncG"+typeNo).val() == ''){
        alert("Please enter `Height AGL` of "+typeNo);
        $("#bscRncG"+typeNo).focus();
        return false;
      }
      else{
        let json = {
          typeNo : typeNo,
          Feasibility : $("#bscRncFeas"+typeNo).val(),
          Action : $("#bscRncAction"+typeNo).val(),
          NetWork_Type : $("#bscRncA"+typeNo).val(),
          BSC_RNC_Type : $("#bscRncB"+typeNo).val(),
          BSC_RNC_Manufacturer : $("#bscRncC"+typeNo).val(),
          BSC_RNC_Make : $("#bscRncD"+typeNo).val(),
          Length_Mtrs : $("#bscRncE"+typeNo).val(),
          Breadth_Mtrs : $("#bscRncF"+typeNo).val(),
          Height_AGL : $("#bscRncG"+typeNo).val(),
          BSC_RNC_Power_Rating : $("#bscRncH"+typeNo).val()
        }
        this.validBscRncList.push(json);
      }
    }
    return true;
  }
  validOtherNodeList = [];
  validateOtherNodeData() : any{
    this.validOtherNodeList = [];
    for(let i=0;i<this.otherNodeList.length;i++){
      let typeNo = this.otherNodeList[i].typeNo;
      let feas = $("#otherNodeFeas"+typeNo).val();
      if(feas == ''){
        alert("Please select `Other node feasibility` of "+typeNo);
        $("#otherNodeFeas"+typeNo).focus();
        return false;
      }
      else if(feas == this.PROPOSED && $("#otherNodeG"+typeNo).val() == ''){
        alert("Please enter `Height Mtrs` of "+typeNo);
        $("#otherNodeG"+typeNo).focus();
        return false;
      }
      else{
        let json = {
          typeNo : typeNo,
          Feasibility : $("#otherNodeFeas"+typeNo).val(),
          Action : $("#otherNodeAction"+typeNo).val(),
          Node_Type : $("#otherNodeA"+typeNo).val(),
          Node_Location : $("#otherNodeB"+typeNo).val(),
          Node_Manufacturer : $("#otherNodeC"+typeNo).val(),
          Node_Model : $("#otherNodeD"+typeNo).val(),
          Length_Mtrs : $("#otherNodeE"+typeNo).val(),
          Breadth_Mtrs : $("#otherNodeF"+typeNo).val(),
          Height_Mtrs : $("#otherNodeG"+typeNo).val(),
          Weight_Kg : $("#otherNodeH"+typeNo).val(),
          Node_Voltage : $("#otherNodeI"+typeNo).val(),
          Power_Rating_in_Kw : $("#otherNodeJ"+typeNo).val(),
          FullRack : $("#otherNodeK"+typeNo).val(),
          Tx_Rack_Space_Required_In_Us : $("#otherNodeL"+typeNo).val(),
          Remarks : $("#otherNodeM"+typeNo).val()
        }
        this.validOtherNodeList.push(json);
      }
    }
    return true;
  }

  validMwIduList = [];
  validateMwIduData() : any{
    this.validMwIduList = [];
    for(let i=0;i<this.mwIduList.length;i++){
      let typeNo = this.mwIduList[i].typeNo;
      let feas = $("#mwIduFeas"+typeNo).val();
      if(feas == ''){
        alert("Please select `MW IDU feasibility` of "+typeNo);
        $("#mwIduFeas"+typeNo).focus();
        return false;
      }
      else if(feas == this.PROPOSED && $("#mwIduB"+typeNo).val() == ''){
        alert("Please select `Node Location` of "+typeNo);
        $("#mwIduB"+typeNo).focus();
        return false;
      }
      else if(feas == this.PROPOSED && $("#mwIduG"+typeNo).val() == ''){
        alert("Please enter `Height Mtrs` of "+typeNo);
        $("#mwIduG"+typeNo).focus();
        return false;
      }
      else{
        let json = {
          typeNo : typeNo,
          Feasibility : $("#mwIduFeas"+typeNo).val(),
          Action : $("#mwIduAction"+typeNo).val(),
          Node_Type : $("#mwIduA"+typeNo).val(),
          Node_Location : $("#mwIduB"+typeNo).val(),
          Node_Manufacturer : $("#mwIduC"+typeNo).val(),
          Node_Model : $("#mwIduD"+typeNo).val(),
          Length_Mtrs : $("#mwIduE"+typeNo).val(),
          Breadth_Mtrs : $("#mwIduF"+typeNo).val(),
          Height_Mtrs : $("#mwIduG"+typeNo).val(),
          Weight_Kg : $("#mwIduH"+typeNo).val(),
          Node_Voltage : $("#mwIduI"+typeNo).val(),
          Power_Rating_in_Kw : $("#mwIduJ"+typeNo).val(),
          FullRack : $("#mwIduK"+typeNo).val(),
          Tx_Rack_Space_Required_In_Us : $("#mwIduL"+typeNo).val(),
          Remarks : $("#mwIduM"+typeNo).val()
        }
        this.validMwIduList.push(json);
      }
    }
    return true;
  }
  
  validMcbList = [];
  validateMcbData() : any{
    this.validMcbList = [];
    let feas = $("#mcbFeas"+this.viewSrNumber).val();
    if(feas == ''){
      alert("Please select `MCB feasibility`");
      $("#mcbFeas"+this.viewSrNumber).focus();
      return false;
    }
    else if(feas == this.PROPOSED && $("#mcb6").val() == ''){
      alert("Please enter `06A` value");
      $("#mcb6").focus();
      return false;
    }
    else if(feas == this.PROPOSED && $("#mcb10").val() == ''){
      alert("Please enter `10A` value");
      $("#mcb10").focus();
      return false;
    }
    else if(feas == this.PROPOSED && $("#mcb16").val() == ''){
      alert("Please enter `16A` value");
      $("#mcb16").focus();
      return false;
    }
    else if(feas == this.PROPOSED && $("#mcb24").val() == ''){
      alert("Please enter `24A` value");
      $("#mcb24").focus();
      return false;
    }
    else if(feas == this.PROPOSED && $("#mcb32").val() == ''){
      alert("Please enter `32A` value");
      $("#mcb32").focus();
      return false;
    }
    else if(feas == this.PROPOSED && $("#mcb40").val() == ''){
      alert("Please enter `40A` value");
      $("#mcb40").focus();
      return false;
    }
    else if(feas == this.PROPOSED && $("#mcb63").val() == ''){
      alert("Please enter `63A` value");
      $("#mcb63").focus();
      return false;
    }
    else if(feas == this.PROPOSED && $("#mcb80").val() == ''){
      alert("Please enter `80A` value");
      $("#mcb80").focus();
      return false;
    }
    else{
      let json = {
        Feasibility : $("#mcbFeas"+this.viewSrNumber).val(),
        Total_No_of_MCB_Required : $("#mcbTotalNo").val(),
        _06A : $("#mcb6").val(),
        _10A : $("#mcb10").val(),
        _16A : $("#mcb16").val(),
        _24A : $("#mcb24").val(),
        _32A : $("#mcb32").val(),
        _40A : $("#mcb40").val(),
        _63A : $("#mcb63").val(),
        _80A : $("#mcb80").val()
      }
      this.validMcbList.push(json);
    }
    return true;
  }

  validFibreNodeList = [];
  validateFibreNodeData() : any{
    this.validFibreNodeList = [];
    for(let i=0;i<this.fibreNodeList.length;i++){
      let typeNo = this.fibreNodeList[i].typeNo;
      let feas = $("#fibreFeas"+typeNo).val();
      if(feas == ''){
        alert("Please select `Fibre node feasibility` of "+typeNo);
        $("#fibreFeas"+typeNo).focus();
        return false;
      }
      else if(feas == this.PROPOSED && $("#fibreNodeB"+typeNo).val() == ''){
        alert("Please select `Node Location` of "+typeNo);
        $("#fibreNodeB"+typeNo).focus();
        return false;
      }
      else if(feas == this.PROPOSED && $("#fibreNodeG"+typeNo).val() == ''){
        alert("Please enter `Height Mtrs` of "+typeNo);
        $("#fibreNodeG"+typeNo).focus();
        return false;
      }
      else if(feas == this.PROPOSED && $("#fibreNodeM"+typeNo).val() == ''){
        alert("Please select `Is Right Of Way ROW Required Inside The TOCO Premises` of "+typeNo);
        $("#fibreNodeM"+typeNo).focus();
        return false;
      }
      else if(feas == this.PROPOSED && $("#fibreNodeN"+typeNo).val() == ''){
        alert("Please select `Type Of Fiber Laying` of "+typeNo);
        $("#fibreNodeN"+typeNo).focus();
        return false;
      }
      else if(feas == this.PROPOSED && $("#fibreNodeO"+typeNo).val() == ''){
        alert("Please select `Type Of FMS` of "+typeNo);
        $("#fibreNodeO"+typeNo).focus();
        return false;
      }
      else{
        let json = {
          typeNo : typeNo,
          Feasibility : $("#fibreFeas"+typeNo).val(),
          Action : $("#fibreNodeAction"+typeNo).val(),
          Node_Type : $("#fibreNodeA"+typeNo).val(),
          Node_Location : $("#fibreNodeB"+typeNo).val(),
          Node_Manufacturer : $("#fibreNodeC"+typeNo).val(),
          Node_Model : $("#fibreNodeD"+typeNo).val(),
          Length_Mtrs : $("#fibreNodeE"+typeNo).val(),
          Breadth_Mtrs : $("#fibreNodeF"+typeNo).val(),
          Height_Mtrs : $("#fibreNodeG"+typeNo).val(),
          Weight_Kg : $("#fibreNodeH"+typeNo).val(),
          Node_Voltage : $("#fibreNodeI"+typeNo).val(),
          Power_Rating_in_Kw : $("#fibreNodeJ"+typeNo).val(),
          FullRack : $("#fibreNodeK"+typeNo).val(),
          Tx_Rack_Space_required_in_Us : $("#fibreNodeL"+typeNo).val(),
          Is_Right_Of_Way_ROW_Required_Inside_The_TOCO_Premises : $("#fibreNodeM"+typeNo).val(),
          Type_Of_Fiber_Laying : $("#fibreNodeN"+typeNo).val(),
          Type_Of_FMS : $("#fibreNodeO"+typeNo).val(),
          Remarks : $("#fibreNodeP"+typeNo).val(),
          Full_Rack : $("#fibreNodeQ"+typeNo).val()
        }
        this.validFibreNodeList.push(json);
      }
    }
    return true;
  }

  validTmaTmbList = [];
  validateTmaTmbData() : any{
    this.validTmaTmbList = [];
    for(let i=0;i<this.tmaTmbList.length;i++){
      let typeNo = this.tmaTmbList[i].typeNo;
      let feas = $("#tmaTmbFeas"+typeNo).val();
      if(feas == ""){
        alert("Please select `Fibre node feasibility` of "+typeNo);
        $("#tmaTmbFeas"+typeNo).focus();
        return false;
      }
      else if(feas == this.PROPOSED && $("#tmaTmbAc"+typeNo).val() == ''){
        alert("Please enter `Action` of "+typeNo);
        $("#tmaTmbAc"+typeNo).focus();
        return false;
      }
      else if(feas == this.PROPOSED && $("#tmaTmbSo"+typeNo).val() == ''){
        alert("Please enter `Source` of "+typeNo);
        $("#tmaTmbSo"+typeNo).focus();
        return false;
      }
      else if(feas == this.PROPOSED && $("#tmaTmbNoOfTmTm"+typeNo).val() == ''){
        alert("Please enter `No of TMA TMB` of "+typeNo);
        $("#tmaTmbNoOfTmTm"+typeNo).focus();
        return false;
      }
      else if(feas == this.PROPOSED && $("#tmaTmbWeOfEaTmTm"+typeNo).val() == ''){
        alert("Please enter `Weight of each TMA TMB` of "+typeNo);
        $("#tmaTmbWeOfEaTmTm"+typeNo).focus();
        return false;
      }
      else if(feas == this.PROPOSED && $("#tmaTmbCoWtOfTmTmKg"+typeNo).val() == ''){
        alert("Please enter `Combined wt of TMA TMB Kgs` of "+typeNo);
        $("#tmaTmbCoWtOfTmTmKg"+typeNo).focus();
        return false;
      }
      else if(feas == this.PROPOSED && $("#tmaTmbHeiAtWhNeToBeMoMt"+typeNo).val() == ''){
        alert("Please enter `Height at which needs to be mounted Mtrs` of "+typeNo);
        $("#tmaTmbHeiAtWhNeToBeMoMt"+typeNo).focus();
        return false;
      }
      else if(feas == this.PROPOSED && $("#tmaTmbCuPuOrPl"+typeNo).val() == ''){
        alert("Please enter `Customer Punched Or Planning` of "+typeNo);
        $("#tmaTmbCuPuOrPl"+typeNo).focus();
        return false;
      }
      else if(feas == this.PROPOSED && $("#tmaTmbSoReReNo"+typeNo).val() == ''){
        alert("Please enter `Source Request Ref No` of "+typeNo);
        $("#tmaTmbSoReReNo"+typeNo).focus();
        return false;
      }
      else if(feas == this.PROPOSED && $("#tmaTmbDeReReNo"+typeNo).val() == ''){
        alert("Please enter `Delete Request Ref No` of "+typeNo);
        $("#tmaTmbDeReReNo"+typeNo).focus();
        return false;
      }
      else{
        let json = {
          typeNo: typeNo,
          Feasibility: feas,
          Action: $("#tmaTmbAc"+typeNo).val(), 
          Source: $("#tmaTmbSo"+typeNo).val(), 
          No_of_TMA_TMB: $("#tmaTmbNoOfTmTm"+typeNo).val(), 
          Weight_of_each_TMA_TMB: $("#tmaTmbWeOfEaTmTm"+typeNo).val(), 
          Combined_wt_of_TMA_TMB_Kgs: $("#tmaTmbCoWtOfTmTmKg"+typeNo).val(), 
          Height_at_which_needs_to_be_mounted_Mtrs: $("#tmaTmbHeiAtWhNeToBeMoMt"+typeNo).val(), 
          Customer_Punched_Or_Planning: $("#tmaTmbCuPuOrPl"+typeNo).val(), 
          Source_Request_Ref_No: $("#tmaTmbSoReReNo"+typeNo).val(), 
          Delete_Request_Ref_No: $("#tmaTmbDeReReNo"+typeNo).val()
        }
        this.validTmaTmbList.push(json);
      }
    }
    return true;
  }

  alertMsg = "";
  validateNbsHoRfData() : any{
    if(this.spLatitude == ""){
      this.alertMsg = "Please enter `Latitude`";
      $("#_spLatitude").focus();
      return false;
    }
    else if(this.spLongitude == ""){
      this.alertMsg = "Please enter `Longitude`";
      $("#_spLongitude").focus();
      return false;
    }
    else if(this.TOCO_Site_Id == ""){
      this.alertMsg = "Please enter `TOCO Site Id`";
      $("#tocoSiteId").focus();
      return false;
    }
    else if(this.clutter == ""){
      this.alertMsg = "Please select `Clutter`";
      $("#_clutter").focus();
      return false;
    }
    else if(this.Date_of_Proposal == ""){
      this.alertMsg = "Please enter `Date of Proposal`";
      $("#_nbs1").focus();
      return false;
    }
    else if(this.Site_Electrification_Distance == ""){
      this.alertMsg = "Please enter `Site Electrification Distance`";
      $("#_nbs2").focus();
      return false;
    }
    else if(this.Tentative_EB_Availibility == ""){
      this.alertMsg = "Please enter `Tentative EB Availibility`";
      $("#_nbs3").focus();
      return false;
    }
    else if(this.Address1 == ""){
      this.alertMsg = "Please enter `Address`";
      $("#_nbs4").focus();
      return false;
    }
    else if(this.Head_Load_Charge == ""){
      this.alertMsg = "Please enter `Head Load Charge`";
      $("#_nbs5").focus();
      return false;
    }
    else if(this.Electrification_Cost == ""){
      this.alertMsg = "Please enter `Electrification Cost`";
      $("#_nbs6").focus();
      return false;
    }
    else if(this.Electrification_Line_Distance == ""){
      this.alertMsg = "Please enter `Electrification Line Distance`";
      $("#_nbs7").focus();
      return false;
    }
    else if(this.Electricity_Connection_HT_LT == ""){
      this.alertMsg = "Please enter `Electricity Connection HT LT`";
      $("#_nbs8").focus();
      return false;
    }
    else if(this.Wind_Speed == ""){
      this.alertMsg = "Please enter `Wind Speed`";
      $("#_nbs9").focus();
      return false;
    }
    else if(this.TowerHeight == ""){
      this.alertMsg = "Please enter `Tower Height`";
      $("#_nbs10").focus();
      return false;
    }
    else if(this.Agl == ""){
      this.alertMsg = "Please enter `AGL`";
      $("#_nbs11").focus();
      return false;
    }
    else if(this.Distance_from_P1_Lat_Long_in_meter == ""){
      this.alertMsg = "Please enter `Distance from P1 Lat Long in meter`";
      $("#_nbs12").focus();
      return false;
    }
    return true;
  }

  validateNbsSnMData() : any{
    let asso = this.Association_AreyouWorkingInAnyBhartiGroup.trim();
    let rel = this.Relative_AnyRelativesareWorkingWithBhartiGroup.trim();
    if(this.Power_Rating == ""){
      this.alertMsg = "Please enter `Power Rating`";
      $("#_nbs13").focus();
      return false;
    }
    else if(this.Additional_Charge == ""){
      this.alertMsg = "Please enter `Additional Charge`";
      $("#_nbs14").focus();
      return false;
    }
    else if(this.Infra_Details == ""){
      this.alertMsg = "Please enter `Infra Details`";
      $("#_nbs15").focus();
      return false;
    }
    else if(this.Site_Classification == ""){
      this.alertMsg = "Please enter `Site Classification`";
      $("#_nbs16").focus();
      return false;
    }
    else if(this.Expected_Rent_to_Landlord == ""){
      this.alertMsg = "Please enter `Expected Rent to Landlord`";
      $("#_nbs17").focus();
      return false;
    }
    else if(this.Non_Refundable_Deposit == ""){
      this.alertMsg = "Please enter `Non Refundable Deposit`";
      $("#_nbs18").focus();
      return false;
    }
    else if(this.Estimated_Deployment_Time__in_days_ == ""){
      this.alertMsg = "Please enter `Estimated Deployment Time in days`";
      $("#_nbs19").focus();
      return false;
    }
    else if(this.Additional_Capex == ""){
      this.alertMsg = "Please enter `Additional Capex`";
      $("#_nbs20").focus();
      return false;
    }
    else if(this.Standard_Rates == ""){
      this.alertMsg = "Please enter `Standard Rates`";
      $("#_nbs21").focus();
      return false;
    }
    else if(this.Fiber_Charges == ""){
      this.alertMsg = "Please enter `Fiber Charges`";
      $("#_nbs22").focus();
      return false;
    }
    else if(this.Rental_Threshold == ""){
      this.alertMsg = "Please enter `Rental Threshold`";
      $("#_nbs23").focus();
      return false;
    }
    else if(this.Excess_Rent_beyond_Threshold == ""){
      this.alertMsg = "Please enter `Excess Rent beyond Threshold`";
      $("#_nbs24").focus();
      return false;
    }
    else if(this.Tentative_Rental_Premium == ""){
      this.alertMsg = "Please enter `Tentative Rental Premium`";
      $("#_nbs25").focus();
      return false;
    }
    else if(this.Additional_Rent == ""){
      this.alertMsg = "Please enter `Additional Rent`";
      $("#_nbs26").focus();
      return false;
    }
    else if(this.IPFee == ""){
      this.alertMsg = "Please enter `IPFee`";
      $("#_nbs27").focus();
      return false;
    }
    else if(this.Field_Operation_Charges == ""){
      this.alertMsg = "Please enter `Field Operation Charges`";
      $("#_nbs28").focus();
      return false;
    }
    else if(this.Security_Guard_Charges == ""){
      this.alertMsg = "Please enter `Security Guard Charges`";
      $("#_nbs29").focus();
      return false;
    }
    else if(this.Mobilization_Charges == ""){
      this.alertMsg = "Please enter `Mobilization Charges`";
      $("#_nbs30").focus();
      return false;
    }
    else if(this.Erection_Charges == ""){
      this.alertMsg = "Please enter `Erection Charges`";
      $("#_nbs31").focus();
      return false;
    }
    else if(this.Battery_backup_Hrs == ""){
      this.alertMsg = "Please enter `Battery backup Hrs`";
      $("#_nbs32").focus();
      return false;
    }
    else if(this.Land_Lord_Charges_or_Rent_Charges == ""){
      this.alertMsg = "Please enter `Land Lord Charges or Rent Charges`";
      $("#_nbs33").focus();
      return false;
    }
    else if(this.Recommended_Product_Type_by_Acquisition == ""){
      this.alertMsg = "Please select `Recommended Product Type by Acquisition`";
      $("#_rptba").focus();
      return false;
    }
    else if(this.Association_AreyouWorkingInAnyBhartiGroup.trim() == ""){
      this.alertMsg = "Please select `Landlord Working with Bharti Group`";
      $("#_ass1").focus();
      return false;
    }
    else if(asso == "Yes" && this.Association_IfyesmentiontheBhartiUnitName.trim() == ""){
        this.alertMsg = "Please enter `Landlord's Bharti Unit Name`";
        $("#_ass2").focus();
        return false;
    }
    else if(asso == "Yes" && this.Association_NameOftheEmployee.trim() == ""){
      this.alertMsg = "Please enter `Landlord Name`";
      $("#_ass3").focus();
      return false;
    }
    else if(asso == "Yes" && this.Association_EmployeeId.trim() == ""){
      this.alertMsg = "Please enter `Landlord Employee ID`";
      $("#_ass4").focus();
      return false;
    }
    
    else if(asso == "No" && this.Relative_AnyRelativesareWorkingWithBhartiGroup.trim() == ""){
      this.alertMsg = "Please select `Landlord's Relative Working with Bharti Group`";
      $("#_rel1").focus();
      return false;
    }
    else if(rel == "Yes" && this.Relative_IfyesmentiontheBhartiUnitName.trim() == ""){
      this.alertMsg = "Please enter `Landlord's Relative Bharti Unit Name`";
      $("#_rel2").focus();
      return false;
    }
    else if(rel == "Yes" && this.Relative_NameOftheEmployee.trim() == ""){
      this.alertMsg = "Please enter `Landlord's Relative Name`";
      $("#_rel3").focus();
      return false;
    }
    else if(rel == "Yes" && this.Relative_EmployeeId.trim() == ""){
      this.alertMsg = "Please enter `Landlord's Relative Employee ID`";
      $("#_rel4").focus();
      return false;
    }
    else if(rel == "Yes" && this.Relative_LandlordRelationshipwithEmployee.trim() == ""){
      this.alertMsg = "Please enter `Landlord's Relationship with Employee`";
      $("#_rel5").focus();
      return false;
    }
    else if(rel == "Yes" && this.Relative_MobileNumberOfrelativeWithAirtel.trim() == ""){
      this.alertMsg = "Please enter `Mobile Number Of Relative Registered With Airtel`";
      $("#_rel6").focus();
      return false;
    }
    else if(this.Declaration == ""){
      this.alertMsg = "Please select `Declaration`";
      $("#_dec").focus();
      return false;
    }
    return true;
  }

  validateNewTenencyDeploymentData() : any{
    if(this.Date_of_Proposal == ""){
      this.alertMsg = "Please enter `Date of Proposal`";
      $("#_nt1").focus();
      return false;
    }
    else if(this.Site_Electrification_Distance == ""){
      this.alertMsg = "Please enter `Site Electrification Distance`";
      $("#_nt2").focus();
      return false;
    }
    else if(this.Tentative_EB_Availibility == ""){
      this.alertMsg = "Please enter `Tentative EB Availibility`";
      $("#_nt3").focus();
      return false;
    }
    else if(this.Head_Load_Charge == ""){
      this.alertMsg = "Please enter `Head_Load Charge`";
      $("#_nt4").focus();
      return false;
    }
    else if(this.Electrification_Cost == ""){
      this.alertMsg = "Please enter `Electrification Cost`";
      $("#_nt5").focus();
      return false;
    }
    else if(this.Electrification_Line_Distance == ""){
      this.alertMsg = "Please enter `Electrification Line Distance`";
      $("#_nt6").focus();
      return false;
    }
    else if(this.Electricity_Connection_HT_LT == ""){
      this.alertMsg = "Please enter `Electricity Connection HT LT`";
      $("#_nt7").focus();
      return false;
    }
    else if(this.Wind_Speed == ""){
      this.alertMsg = "Please enter `Wind Speed`";
      $("#_nt8").focus();
      return false;
    }
    else if(this.TowerHeight == ""){
      this.alertMsg = "Please enter `Tower Height`";
      $("#_nt9").focus();
      return false;
    }
    else if(this.Agl == ""){
      this.alertMsg = "Please enter `AGL`";
      $("#_nt10").focus();
      return false;
    }
    else if(this.Distance_from_P1_Lat_Long_in_meter == ""){
      this.alertMsg = "Please enter `Distance from P1 Lat Long in meter`";
      $("#_nt11").focus();
      return false;
    }
    return true;
  }

  validateNewTenencySnMData() : any{
    let asso = this.Association_AreyouWorkingInAnyBhartiGroup.trim();
    let rel = this.Relative_AnyRelativesareWorkingWithBhartiGroup.trim();
    if(this.Power_Rating == ""){
      this.alertMsg = "Please enter `Power Rating`";
      $("#_nt12").focus();
      return false;
    }
    else if(this.Additional_Charge == ""){
      this.alertMsg = "Please enter `Additional Charge`";
      $("#_nt13").focus();
      return false;
    }
    else if(this.Infra_Details == ""){
      this.alertMsg = "Please enter `Infra Details`";
      $("#_nt14").focus();
      return false;
    }
    else if(this.Site_Classification == ""){
      this.alertMsg = "Please enter `Site Classification`";
      $("#_nt15").focus();
      return false;
    }
    else if(this.Expected_Rent_to_Landlord == ""){
      this.alertMsg = "Please enter `Expected Rent to Landlord`";
      $("#_nt16").focus();
      return false;
    }
    else if(this.Non_Refundable_Deposit == ""){
      this.alertMsg = "Please enter `Non Refundable Deposit`";
      $("#_nt17").focus();
      return false;
    }
    else if(this.Estimated_Deployment_Time__in_days_ == ""){
      this.alertMsg = "Please enter `Estimated Deployment Time in days`";
      $("#_nt18").focus();
      return false;
    }
    else if(this.Additional_Capex == ""){
      this.alertMsg = "Please enter `Additional Capex`";
      $("#_nt19").focus();
      return false;
    }
    else if(this.Standard_Rates == ""){
      this.alertMsg = "Please enter `Standard Rates`";
      $("#_nt20").focus();
      return false;
    }
    else if(this.Fiber_Charges == ""){
      this.alertMsg = "Please enter `Fiber Charges`";
      $("#_nt21").focus();
      return false;
    }
    else if(this.Rental_Threshold == ""){
      this.alertMsg = "Please enter `Rental Threshold`";
      $("#_nt22").focus();
      return false;
    }
    else if(this.Excess_Rent_beyond_Threshold == ""){
      this.alertMsg = "Please enter `Excess Rent beyond Threshold`";
      $("#_nt23").focus();
      return false;
    }
    else if(this.Tentative_Rental_Premium == ""){
      this.alertMsg = "Please enter `Tentative Rental Premium`";
      $("#_nt24").focus();
      return false;
    }
    else if(this.Additional_Rent == ""){
      this.alertMsg = "Please enter `Additional Rent`";
      $("#_nt25").focus();
      return false;
    }
    else if(this.IPFee == ""){
      this.alertMsg = "Please enter `IPFee`";
      $("#_nt26").focus();
      return false;
    }
    else if(this.Field_Operation_Charges == ""){
      this.alertMsg = "Please enter `Field Operation Charges`";
      $("#_nt27").focus();
      return false;
    }
    else if(this.Security_Guard_Charges == ""){
      this.alertMsg = "Please enter `Security Guard Charges`";
      $("#_nt28").focus();
      return false;
    }
    else if(this.Mobilization_Charges == ""){
      this.alertMsg = "Please enter `Mobilization Charges`";
      $("#_nt29").focus();
      return false;
    }
    else if(this.Erection_Charges == ""){
      this.alertMsg = "Please enter `Erection Charges`";
      $("#_nt30").focus();
      return false;
    }
    else if(this.Battery_backup_Hrs == ""){
      this.alertMsg = "Please enter `Battery backup Hrs`";
      $("#_nt31").focus();
      return false;
    }
    else if(this.Land_Lord_Charges_or_Rent_Charges == ""){
      this.alertMsg = "Please enter `Land Lord Charges or Rent Charges`";
      $("#_nt32").focus();
      return false;
    }
    else if(this.Rejection_Remarks == ""){
      this.alertMsg = "Please enter `Rejection Remarks`";
      $("#_nt33").focus();
      return false;
    }
    else if(this.Association_AreyouWorkingInAnyBhartiGroup.trim() == ""){
      this.alertMsg = "Please select `Landlord Working with Bharti Group`";
      $("#_ass1").focus();
      return false;
    }
    else if(asso == "Yes" && this.Association_IfyesmentiontheBhartiUnitName.trim() == ""){
        this.alertMsg = "Please enter `Landlord's Bharti Unit Name`";
        $("#_ass2").focus();
        return false;
    }
    else if(asso == "Yes" && this.Association_NameOftheEmployee.trim() == ""){
      this.alertMsg = "Please enter `Landlord Name`";
      $("#_ass3").focus();
      return false;
    }
    else if(asso == "Yes" && this.Association_EmployeeId.trim() == ""){
      this.alertMsg = "Please enter `Landlord Employee ID`";
      $("#_ass4").focus();
      return false;
    }
    
    else if(asso == "No" && this.Relative_AnyRelativesareWorkingWithBhartiGroup.trim() == ""){
      this.alertMsg = "Please select `Landlord's Relative Working with Bharti Group`";
      $("#_rel1").focus();
      return false;
    }
    else if(rel == "Yes" && this.Relative_IfyesmentiontheBhartiUnitName.trim() == ""){
      this.alertMsg = "Please enter `Landlord's Relative Bharti Unit Name`";
      $("#_rel2").focus();
      return false;
    }
    else if(rel == "Yes" && this.Relative_NameOftheEmployee.trim() == ""){
      this.alertMsg = "Please enter `Landlord's Relative Name`";
      $("#_rel3").focus();
      return false;
    }
    else if(rel == "Yes" && this.Relative_EmployeeId.trim() == ""){
      this.alertMsg = "Please enter `Landlord's Relative Employee ID`";
      $("#_rel4").focus();
      return false;
    }
    else if(rel == "Yes" && this.Relative_LandlordRelationshipwithEmployee.trim() == ""){
      this.alertMsg = "Please enter `Landlord's Relationship with Employee`";
      $("#_rel5").focus();
      return false;
    }
    else if(rel == "Yes" && this.Relative_MobileNumberOfrelativeWithAirtel.trim() == ""){
      this.alertMsg = "Please enter `Mobile Number Of Relative Registered With Airtel`";
      $("#_rel6").focus();
      return false;
    }
    else if(this.Declaration == ""){
      this.alertMsg = "Please select `Declaration`";
      $("#_dec").focus();
      return false;
    }
    return true;
  }

  validateSiteUpgradeSnMData() : any{
    // let asso = this.Association_AreyouWorkingInAnyBhartiGroup.trim();
    // let rel = this.Relative_AnyRelativesareWorkingWithBhartiGroup.trim();
    if(this.Date_of_Proposal == ""){
      this.alertMsg = "Please enter `Date of Proposal`";
      $("#_su1").focus();
      return false;
    }
    else if(this.Power_Rating == ""){
      this.alertMsg = "Please enter `Power Rating`";
      $("#_su2").focus();
      return false;
    }
    else if(this.Site_Electrification_Distance == ""){
      this.alertMsg = "Please enter `Site Electrification Distance`";
      $("#_su3").focus();
      return false;
    }
    else if(this.Tentative_EB_Availibility == ""){
      this.alertMsg = "Please enter `Tentative EB Availibility`";
      $("#_su4").focus();
      return false;
    }
    else if(this.Additional_Charge == ""){
      this.alertMsg = "Please enter `Additional Charge`";
      $("#_su5").focus();
      return false;
    }
    else if(this.Head_Load_Charge == ""){
      this.alertMsg = "Please enter `Head Load Charge`";
      $("#_su6").focus();
      return false;
    }
    else if(this.Electrification_Cost == ""){
      this.alertMsg = "Please enter `Electrification Cost`";
      $("#_su7").focus();
      return false;
    }
    else if(this.Electrification_Line_Distance == ""){
      this.alertMsg = "Please enter `Electrification Line Distance`";
      $("#_su8").focus();
      return false;
    }
    else if(this.Electricity_Connection_HT_LT == ""){
      this.alertMsg = "Please enter `Electricity Connection HT LT`";
      $("#_su9").focus();
      return false;
    }
    // else if(this.Infra_Details == ""){
    //   this.alertMsg = "Please enter `Infra Details`";
    //   $("#_su10").focus();
    //   return false;
    // }
    // else if(this.Site_Classification == ""){
    //   this.alertMsg = "Please enter `Site Classification`";
    //   $("#_su11").focus();
    //   return false;
    // }
    // else if(this.Expected_Rent_to_Landlord == ""){
    //   this.alertMsg = "Please enter `Expected Rent to Landlord`";
    //   $("#_su12").focus();
    //   return false;
    // }
    // else if(this.Non_Refundable_Deposit == ""){
    //   this.alertMsg = "Please enter `Non Refundable Deposit`";
    //   $("#_su13").focus();
    //   return false;
    // }
    // else if(this.Estimated_Deployment_Time__in_days_ == ""){
    //   this.alertMsg = "Please enter `Estimated Deployment Time in days`";
    //   $("#_su14").focus();
    //   return false;
    // }
    // else if(this.Additional_Capex == ""){
    //   this.alertMsg = "Please enter `Additional Capex`";
    //   $("#_su15").focus();
    //   return false;
    // }
    // else if(this.Standard_Rates == ""){
    //   this.alertMsg = "Please enter `Standard Rates`";
    //   $("#_su16").focus();
    //   return false;
    // }
    // else if(this.Fiber_Charges == ""){
    //   this.alertMsg = "Please enter `Fiber Charges`";
    //   $("#_su17").focus();
    //   return false;
    // }
    // else if(this.Rental_Threshold == ""){
    //   this.alertMsg = "Please enter `Rental Threshold`";
    //   $("#_su18").focus();
    //   return false;
    // }
    // else if(this.Excess_Rent_beyond_Threshold == ""){
    //   this.alertMsg = "Please enter `Excess Rent beyond Threshold`";
    //   $("#_su19").focus();
    //   return false;
    // }
    // else if(this.Tentative_Rental_Premium == ""){
    //   this.alertMsg = "Please enter `Tentative Rental Premium`";
    //   $("#_su20").focus();
    //   return false;
    // }
    // else if(this.Additional_Rent == ""){
    //   this.alertMsg = "Please enter `Additional Rent`";
    //   $("#_su21").focus();
    //   return false;
    // }
    // else if(this.IPFee == ""){
    //   this.alertMsg = "Please enter `IPFee`";
    //   $("#_su22").focus();
    //   return false;
    // }
    // else if(this.Field_Operation_Charges == ""){
    //   this.alertMsg = "Please enter `Field Operation Charges`";
    //   $("#_su23").focus();
    //   return false;
    // }
    // else if(this.Security_Guard_Charges == ""){
    //   this.alertMsg = "Please enter `Security Guard Charges`";
    //   $("#_su24").focus();
    //   return false;
    // }
    // else if(this.Mobilization_Charges == ""){
    //   this.alertMsg = "Please enter `Mobilization Charges`";
    //   $("#_su25").focus();
    //   return false;
    // }
    // else if(this.Erection_Charges == ""){
    //   this.alertMsg = "Please enter `Erection Charges`";
    //   $("#_su26").focus();
    //   return false;
    // }
    // else if(this.Battery_backup_Hrs == ""){
    //   this.alertMsg = "Please enter `Battery backup Hrs`";
    //   $("#_su27").focus();
    //   return false;
    // }
    // else if(this.Land_Lord_Charges_or_Rent_Charges == ""){
    //   this.alertMsg = "Please enter `Land Lord Charges or Rent Charges`";
    //   $("#_su28").focus();
    //   return false;
    // }
    // else if(this.Wind_Speed == ""){
    //   this.alertMsg = "Please enter `Wind Speed`";
    //   $("#_su29").focus();
    //   return false;
    // }
    // else if(this.TowerHeight == ""){
    //   this.alertMsg = "Please enter `Tower Height`";
    //   $("#_su30").focus();
    //   return false;
    // }
    // else if(this.Agl == ""){
    //   this.alertMsg = "Please enter `AGL`";
    //   $("#_su31").focus();
    //   return false;
    // }
    // else if(this.Distance_from_P1_Lat_Long_in_meter == ""){
    //   this.alertMsg = "Please enter `Distance from P1 Lat Long in meter`";
    //   $("#_su32").focus();
    //   return false;
    // }
    // else if(this.Rejection_Remarks == ""){
    //   this.alertMsg = "Please enter `Rejection Remarks`";
    //   $("#_su33").focus();
    //   return false;
    // }
    else if(this.Difficult == ""){
      this.alertMsg = "Please enter `Difficult`";
      $("#_su34").focus();
      return false;
    }
    // else if(this.Association_AreyouWorkingInAnyBhartiGroup.trim() == ""){
    //   this.alertMsg = "Please select `Landlord Working with Bharti Group`";
    //   $("#_ass1").focus();
    //   return false;
    // }
    // else if(asso == "Yes" && this.Association_IfyesmentiontheBhartiUnitName.trim() == ""){
    //     this.alertMsg = "Please enter `Landlord's Bharti Unit Name`";
    //     $("#_ass2").focus();
    //     return false;
    // }
    // else if(asso == "Yes" && this.Association_NameOftheEmployee.trim() == ""){
    //   this.alertMsg = "Please enter `Landlord Name`";
    //   $("#_ass3").focus();
    //   return false;
    // }
    // else if(asso == "Yes" && this.Association_EmployeeId.trim() == ""){
    //   this.alertMsg = "Please enter `Landlord Employee ID`";
    //   $("#_ass4").focus();
    //   return false;
    // }
    
    // else if(asso == "No" && this.Relative_AnyRelativesareWorkingWithBhartiGroup.trim() == ""){
    //   this.alertMsg = "Please select `Landlord's Relative Working with Bharti Group`";
    //   $("#_rel1").focus();
    //   return false;
    // }
    // else if(rel == "Yes" && this.Relative_IfyesmentiontheBhartiUnitName.trim() == ""){
    //   this.alertMsg = "Please enter `Landlord's Relative Bharti Unit Name`";
    //   $("#_rel2").focus();
    //   return false;
    // }
    // else if(rel == "Yes" && this.Relative_NameOftheEmployee.trim() == ""){
    //   this.alertMsg = "Please enter `Landlord's Relative Name`";
    //   $("#_rel3").focus();
    //   return false;
    // }
    // else if(rel == "Yes" && this.Relative_EmployeeId.trim() == ""){
    //   this.alertMsg = "Please enter `Landlord's Relative Employee ID`";
    //   $("#_rel4").focus();
    //   return false;
    // }
    // else if(rel == "Yes" && this.Relative_LandlordRelationshipwithEmployee.trim() == ""){
    //   this.alertMsg = "Please enter `Landlord's Relationship with Employee`";
    //   $("#_rel5").focus();
    //   return false;
    // }
    // else if(rel == "Yes" && this.Relative_MobileNumberOfrelativeWithAirtel.trim() == ""){
    //   this.alertMsg = "Please enter `Mobile Number Of Relative Registered With Airtel`";
    //   $("#_rel6").focus();
    //   return false;
    // }
    // else if(this.Declaration == ""){
    //   this.alertMsg = "Please select `Declaration`";
    //   $("#_dec").focus();
    //   return false;
    // }
    return true;
  }

  validateHpscSuggestedData() : any{
    if(this.suggestedSiteAddress == ""){
      this.alertMsg = "Site Address can't be blank";
      $("#_sugg1").focus();
      return false;
    }
    else if(this.suggestedDistrict == ""){
      this.alertMsg = "District can't be blank";
      $("#_sugg2").focus();
      return false;
    }
    else if(this.suggestedState == ""){
      this.alertMsg = "State can't be blank";
      $("#_sugg3").focus();
      return false;
    }
    else if(this.suggestedPincode == ""){
      this.alertMsg = "Pincode can't be blank";
      $("#_sugg4").focus();
      return false;
    }
    else if(this.suggestedTownVillage == ""){
      this.alertMsg = "Town can't be blank";
      $("#_sugg5").focus();
      return false;
    }
    else if(this.suggestedCity == ""){
      this.alertMsg = "City can't be blank";
      $("#_sugg6").focus();
      return false;
    }
    else if(this.suggestedLatitude == ""){
      this.alertMsg = "Latitude can't be blank";
      $("#_sugg7").focus();
      return false;
    }
    else if(this.suggestedLongitude == ""){
      this.alertMsg = "Longitude can't be blank";
      $("#_sugg8").focus();
      return false;
    }
    else if(this.suggestedDeviation == ""){
      this.alertMsg = "Deviation can't be blank";
      $("#_sugg9").focus();
      return false;
    }
    else if(this.suggestedTowerType == ""){
      this.alertMsg = "TowerType can't be blank";
      $("#_sugg10").focus();
      return false;
    }
    else if(this.suggestedBuildingHeight == ""){
      this.alertMsg = "Building Height can't be blank";
      $("#_sugg11").focus();
      return false;
    }
    else if(this.suggestedTowerHeight == ""){
      this.alertMsg = "Tower Height can't be blank";
      $("#_sugg12").focus();
      return false;
    }
    else if(this.suggestedClutter == ""){
      this.alertMsg = "Clutter can't be blank";
      $("#_sugg13").focus();
      return false;
    }
    else if(this.suggestedLandOwnerRent == ""){
      this.alertMsg = "Land Owner Rent can't be blank";
      $("#_sugg14").focus();
      return false;
    }
    else if(this.suggestedElectrificationCharges == ""){
      this.alertMsg = "Electrification Charges can't be blank";
      $("#_sugg15").focus();
      return false;
    }
    else if(this.suggestedMcCharges == ""){
      this.alertMsg = "MC Charges can't be blank";
      $("#_sugg16").focus();
      return false;
    }
    return true;
  }

  changeAirtelSrStatus(afterStatus){
    if(this.isNBS_SR && afterStatus == 'NB03' && this.sharingPotential == ""){
      alert("Please select sharing potential value");
      $("#_sharingPotential").focus();
      return false;
    }
    else if(this.isHPSC_SR && (afterStatus == "NB04" || afterStatus == "NB06") && !this.validateHpscSuggestedData()){
      alert(this.alertMsg);
      return;
    }
    else if((this.isNBS_SR && afterStatus == "NB08") || (this.isHPSC_SR && afterStatus == "NB09")){
      if(!this.validateBtsData()){
        return;
      }
      else if(!this.validateRruData()){
        return;
      }
      else if(!this.validateRadioAntennaData()){
        return;
      }
      else if(!this.validateMwAntennaData()){
        return;
      }
      else if(!this.validateBscRncData()){
        return;
      }
      else if(!this.validateOtherNodeData()){
        return;
      }
      else if(!this.validateMwIduData()){
        return;
      }
      else if(!this.validateMcbData()){
        return;
      }
      else if(!this.validateFibreNodeData()){
        return;
      }
      else if($("#mcbTotalNo").val() > 50){
        alert("`Total No of MCB Required` should be not more than 50");
        return false;
      }
      else if(!this.validateNbsHoRfData()){
        alert(this.alertMsg);
        return;
      } 
      else if(this.isHPSC_SR && afterStatus == "NB09" && !this.validateNbsSnMData()){
        alert(this.alertMsg);
        return;
      }
    }
    else if((this.isNBS_SR) && afterStatus == "NB09" && !this.validateNbsSnMData()){
      alert(this.alertMsg);
      return;
    }
    else if(this.isSiteUpgrade_SR && afterStatus == "NB02"){
      if(!this.validateBtsData()){
        return;
      }
      else if(!this.validateRruData()){
        return;
      }
      else if(!this.validateRadioAntennaData()){
        return;
      }
      else if(!this.validateMwAntennaData()){
        return;
      }
      else if(!this.validateBscRncData()){
        return;
      }
      else if(!this.validateOtherNodeData()){
        return;
      }
      else if(!this.validateMwIduData()){
        return;
      }
      else if(!this.validateMcbData()){
        return;
      }
      else if(!this.validateFibreNodeData()){
        return;
      }
      else if(!this.validateTmaTmbData()){
        return;
      }
      else if($("#mcbTotalNo").val() > 50){
        alert("`Total No of MCB Required` should be not more than 50");
        return false;
      }
      else if(!this.validateSiteUpgradeSnMData()){
        alert(this.alertMsg);
        return;
      }
    }
    else if(this.isNewTenency_SR && afterStatus == "NB03"){
      if(!this.validateBtsData()){
        return;
      }
      else if(!this.validateRruData()){
        return;
      }
      else if(!this.validateRadioAntennaData()){
        return;
      }
      else if(!this.validateMwAntennaData()){
        return;
      }
      else if(!this.validateBscRncData()){
        return;
      }
      else if(!this.validateOtherNodeData()){
        return;
      }
      else if(!this.validateMwIduData()){
        return;
      }
      else if(!this.validateMcbData()){
        return;
      }
      else if(!this.validateFibreNodeData()){
        return;
      }
      else if($("#mcbTotalNo").val() > 50){
        alert("`Total No of MCB Required` should be not more than 50");
        return false;
      }
      else if(!this.validateNewTenencyDeploymentData()){
        alert(this.alertMsg);
        return;
      }
      
    }
    else if(this.isNewTenency_SR && afterStatus == "NB04" && !this.validateNewTenencySnMData()){
      alert(this.alertMsg);
      return;
    }
    else if(((this.isNBS_SR || this.isHPSC_SR) && afterStatus == "NB16") ||  
    (this.isSiteUpgrade_SR && afterStatus == "NB05") || 
    (this.isNewTenency_SR && afterStatus == "NB07")){
      if(this.Tower_Completion == ""){
        alert("Please select Tower_Completion ");
        $("#rfai1").focus();
        return false;
      }
      else if(this.Shelter_Equipment_RoomReady == ""){
        alert("Please select Shelter_Equipment_RoomReady ");
        $("#rfai2").focus();
        return false;
      }
      else if(this.AirConditioner_Commissioned == ""){
        alert("Please select AirConditioner_Commissioned ");
        $("#rfai3").focus();
        return false;
      }
      else if(this.DG_Commissioned == ""){
        alert("Please select DG_Commissioned ");
        $("#rfai4").focus();
        return false;
      }
      else if(this.Acceptance_Testing_Of_Site_Infrastructure_Completed_Status == ""){
        alert("Please select Acceptance_Testing_Of_Site_Infrastructure_Completed_Status ");
        $("#rfai5").focus();
        return false;
      }
      else if(this.EB_Status == ""){
        alert("Please select EB_Status ");
        $("#rfai6").focus();
        return false;
      }
      else if(this.Created_By == ""){
        alert("Please select Created_By ");
        $("#rfai7").focus();
        return false;
      }
      else if(this.OFC_Duct_Laying_Done == ""){
        alert("Please select OFC_Duct_Laying_Done ");
        $("#rfai8").focus();
        return false;
      }
      else if(this.Access_To_Site_Available_Status == ""){
        alert("Please select Access_To_Site_Available_Status ");
        $("#rfai9").focus();
        return false;
      }
      else if(this.Engineer_Name == ""){
        alert("Please enter Engineer_Name ");
        $("#rfai10").focus();
        return false;
      }
      else if(this.Engineer_Phone_Number == ""){
        alert("Please enter Engineer_Phone_Number ");
        $("#rfai11").focus();
        return false;
      }
      else if(this.Engineer_Phone_Number.length < 10){
        alert("Please Engineer_Phone_Number length should be equal to 10 ");
        $("#rfai11").focus();
        return false;
      }
      else if(this.Notice_Form_Generation_Date == ""){
        alert("Please select Notice_Form_Generation_Date ");
        $("#rfai12").focus();
        return false;
      }
      else if(this.rfiDate == ""){
        alert("Please select RFI Date ");
        $("#rfai13").focus();
        return false;
      }
    }

    else if((this.isNBS_SR || this.isHPSC_SR) && this.rfsDate == "" && afterStatus == "NB19"){
      alert("Please select RFS Date");
      return false;
    }

    else if(this.isNewTenency_SR && this.rfsDate == "" && afterStatus == "NB10"){
      alert("Please select RFS Date");
      return false;
    }

    else if(this.isSiteUpgrade_SR && this.rfsDate == "" && afterStatus == "NB08"){
      alert("Please select RFS Date");
      return false;
    }

    this.TowerHeight = this.TowerHeight == "" ? "0" : this.TowerHeight;
    this.Agl = this.Agl == "" ? "0" : this.Agl;
    this.Distance_from_P1_Lat_Long_in_meter = this.Distance_from_P1_Lat_Long_in_meter == "" ? "0" : this.Distance_from_P1_Lat_Long_in_meter;
    this.Site_Electrification_Distance = this.Site_Electrification_Distance == "" ? "0" : this.Site_Electrification_Distance;
    this.Additional_Charge = this.Additional_Charge == "" ? "0" : this.Additional_Charge;
    this.Head_Load_Charge = this.Head_Load_Charge == "" ? "0" : this.Head_Load_Charge;
    this.Electrification_Line_Distance = this.Electrification_Line_Distance == "" ? "0" : this.Electrification_Line_Distance;
    this.Electrification_Cost = this.Electrification_Cost == "" ? "0" : this.Electrification_Cost;
    
    let attachedList = [];
    let obj = this.attachmentList.filter(x => x.action == afterStatus)[0];
    if(obj != undefined){
      let attList = obj.attList;
      for(let i=0;i<attList.length;i++){
        let id = attList[i]["id"];
        let attName = attList[i]["attName"];
        let mandatory = attList[i]["mandatory"];
        let fileVal = $("#att_"+id).val();
        //alert(id+":"+attName+":"+mandatory);
        if(fileVal == "" && mandatory == "1"){
          if(attName == 'Seaf Portal URL')
            alert("Please enter "+attName);
          else
            alert("Please attach "+attName);
          return false;
        }
        else{
          if(fileVal != ""){
            let json = {
              attName:attName,
              imageStr: fileVal
            }
            attachedList.push(json);
          }
        }
      }
    }
    //console.log(obj)
  
    if(this.remark == ""){
      alert("Enter remark");
      return;
    }
    if(this.validRruList.length !=0){
      for(let i=0;i<this.validRruList.length;i++){
        let ob = this.validRruList[i];
        this.validBtsList.push(ob);
      }
    }
    if(this.validMwIduList.length !=0){
      for(let i=0;i<this.validMwIduList.length;i++){
        let ob = this.validMwIduList[i];
        this.validOtherNodeList.push(ob);
      }  
    }
    
    let jsonData = {
      loginEmpId : this.loginEmpId,
      loginEmpRole : this.loginEmpRole,
      srNumber : this.viewSrNumber,
      spNumber : this.viewSpNumber,
      soNumber : this.viewSoNumber,
      circleName : this.viewCircleName,
      currentStatus : this.currentStatus,
      afterStatus : afterStatus,
      remark : this.remark,
      validBtsList : this.validBtsList,
      validRadioAntennaList : this.validRadioAntennaList,
      validMwAntennaList : this.validMwAntennaList,
      validBscRncList : this.validBscRncList,
      validOtherNodeList : this.validOtherNodeList,
      validMcbList : this.validMcbList,
      validFibreNodeList : this.validFibreNodeList,
      validTmaTmbList : this.validTmaTmbList,
      tabName : this.tabName,
      Latitude : this.spLatitude,
      Longitude : this.spLongitude,
      clutter : this.clutter,
      TOCO_Site_Id : this.TOCO_Site_Id,
      viewTocoSiteId: this.viewTocoSiteId,
      Date_of_Proposal : this.Date_of_Proposal,
      Power_Rating : this.Power_Rating,
      Site_Electrification_Distance : this.Site_Electrification_Distance,
      Tentative_EB_Availibility : this.Tentative_EB_Availibility,
      Additional_Charge : this.Additional_Charge,
      Address1 : this.Address1,
      Head_Load_Charge : this.Head_Load_Charge,
      Electrification_Cost : this.Electrification_Cost,
      Electrification_Line_Distance : this.Electrification_Line_Distance,
      Electricity_Connection_HT_LT : this.Electricity_Connection_HT_LT,
      Infra_Details : this.Infra_Details,
      Site_Classification : this.Site_Classification,
      Expected_Rent_to_Landlord : this.Expected_Rent_to_Landlord,
      Non_Refundable_Deposit: this.Non_Refundable_Deposit,
      Estimated_Deployment_Time__in_days_: this.Estimated_Deployment_Time__in_days_,
      Additional_Capex: this.Additional_Capex,
      Standard_Rates: this.Standard_Rates,
      Fiber_Charges: this.Fiber_Charges,
      Rental_Threshold: this.Rental_Threshold,
      Excess_Rent_beyond_Threshold: this.Excess_Rent_beyond_Threshold,
      Tentative_Rental_Premium: this.Tentative_Rental_Premium,
      Additional_Rent: this.Additional_Rent,
      IPFee: this.IPFee,
      Field_Operation_Charges: this.Field_Operation_Charges,
      Security_Guard_Charges: this.Security_Guard_Charges,
      Mobilization_Charges: this.Mobilization_Charges,
      Erection_Charges: this.Erection_Charges,
      Battery_backup_Hrs: this.Battery_backup_Hrs,
      Land_Lord_Charges_or_Rent_Charges: this.Land_Lord_Charges_or_Rent_Charges,
      Wind_Speed: this.Wind_Speed,
      TowerHeight: this.TowerHeight,
      Recommended_Product_Type_by_Acquisition:this.Recommended_Product_Type_by_Acquisition,
      Association_AreyouWorkingInAnyBhartiGroup:this.Association_AreyouWorkingInAnyBhartiGroup,
      Association_IfyesmentiontheBhartiUnitName:this.Association_IfyesmentiontheBhartiUnitName,
      Association_NameOftheEmployee:this.Association_NameOftheEmployee,
      Association_EmployeeId:this.Association_EmployeeId,
      Relative_AnyRelativesareWorkingWithBhartiGroup:this.Relative_AnyRelativesareWorkingWithBhartiGroup,
      Relative_IfyesmentiontheBhartiUnitName:this.Relative_IfyesmentiontheBhartiUnitName,
      Relative_NameOftheEmployee:this.Relative_NameOftheEmployee,
      Relative_EmployeeId:this.Relative_EmployeeId,
      Relative_LandlordRelationshipwithEmployee:this.Relative_LandlordRelationshipwithEmployee,
      Relative_MobileNumberOfrelativeWithAirtel:this.Relative_MobileNumberOfrelativeWithAirtel,
      Declaration:this.Declaration,
      Agl: this.Agl,
      Distance_from_P1_Lat_Long_in_meter: this.Distance_from_P1_Lat_Long_in_meter,
      Rejection_Remarks : this.Rejection_Remarks,
      Difficult : this.Difficult,
      Tower_Completion : this.Tower_Completion,
      Shelter_Equipment_RoomReady : this.Shelter_Equipment_RoomReady,
      AirConditioner_Commissioned : this.AirConditioner_Commissioned,
      DG_Commissioned : this.DG_Commissioned,
      Acceptance_Testing_Of_Site_Infrastructure_Completed_Status : this.Acceptance_Testing_Of_Site_Infrastructure_Completed_Status,
      EB_Status : this.EB_Status,
      Created_By : this.Created_By,
      OFC_Duct_Laying_Done : this.OFC_Duct_Laying_Done,
      Access_To_Site_Available_Status : this.Access_To_Site_Available_Status,
      Engineer_Name : this.Engineer_Name,
      Engineer_Phone_Number : this.Engineer_Phone_Number,
      Notice_Form_Generation_Date : this.Notice_Form_Generation_Date,
      rfiDate : this.rfiDate,
      rfsDate: this.rfsDate,
      attachedList : attachedList,
      sharingPotential: this.sharingPotential,
      suggestedSiteAddress: this.suggestedSiteAddress,
      suggestedDistrict: this.suggestedDistrict,
      suggestedState: this.suggestedState,
      suggestedPincode: this.suggestedPincode,
      suggestedTownVillage: this.suggestedTownVillage,
      suggestedCity: this.suggestedCity,
      suggestedLatitude: this.suggestedLatitude,
      suggestedLongitude: this.suggestedLongitude,
      suggestedDeviation: this.suggestedDeviation,
      suggestedTowerType: this.suggestedTowerType,
      suggestedBuildingHeight: this.suggestedBuildingHeight,
      suggestedTowerHeight: this.suggestedTowerHeight,
      suggestedClutter: this.suggestedClutter,
      suggestedLandOwnerRent: this.suggestedLandOwnerRent,
      suggestedElectrificationCharges: this.suggestedElectrificationCharges,
      suggestedMcCharges: this.suggestedMcCharges
    }
    this.spinner.show();
    this.airtelService.anyPostRequest('changeAirtelSrStatus',jsonData)
    .subscribe(
      (response)=>{
        if(response.responseCode == Constant.SUCCESSFUL_RESPONSE){
          this.closeAnyModal('viewAirtelSrModal');
          $(".forMakeBlank").val("");
          this.getAirtetDetails(this.pageNumber);
          this.toastr.success(response.responseDesc,"Alert !");
        }
        else{
          this.toastr.warning(response.responseDesc,"Alert !");
        }
        
        this.spinner.hide();
      },
      (error)=>{
        this.toastr.warning(Constant.returnServerErrorMessage("changeAirtelSrStatus"),"Alert !");
        this.spinner.hide()
      }
    )
  }

  closeAnyModal(modalName){
    $("#"+modalName).modal("hide");
  }

  changeFeasibility(evt,notEdit,edit,typeNo){
    let value = evt.target.value;
    if(value == "Proposed"){
      $("."+notEdit+typeNo).hide();
      $("."+edit+typeNo).show();
    }
    else{
      $("."+edit+typeNo).hide();
      $("."+notEdit+typeNo).show();
    }  
  }

  totalMcb(evt){
    let value = evt.target.value;
    // console.log(value)
    let mcb6 = parseInt($("#mcb6").val() == "" ? "0" : $("#mcb6").val());
    let mcb10 = parseInt($("#mcb10").val() == "" ? "0" : $("#mcb10").val());
    let mcb16 = parseInt($("#mcb16").val() == "" ? "0" : $("#mcb16").val());
    let mcb24 = parseInt($("#mcb24").val() == "" ? "0" : $("#mcb24").val());
    let mcb32 = parseInt($("#mcb32").val() == "" ? "0" : $("#mcb32").val());
    let mcb40 = parseInt($("#mcb40").val() == "" ? "0" : $("#mcb40").val());
    let mcb63 = parseInt($("#mcb63").val() == "" ? "0" : $("#mcb63").val());
    let mcb80 = parseInt($("#mcb80").val() == "" ? "0" : $("#mcb80").val());
    let curTotal = mcb6 + mcb10 + mcb16 + mcb24 + mcb32 + mcb40 + mcb63 + mcb80;
    if(curTotal > 50){
      alert("`Total No of MCB Required` should be not more than 50");
    }
    $("#mcbTotalNo").val(curTotal);
  }

  exportData(){
    if(this.airtelDetailsList.length == 0 ){
      alert("No data for export");
      return;
    }
    this.spinner.show();
    let jsonData = {
      isDashboard : this.isDashboard,
      loginEmpId : this.loginEmpId,
      loginEmpRole : this.loginEmpRole,
      circleName : this.circleName,
      operator : this.operator,
      isHoUser : this.isHoUser,
      filterSrNumber : this.filterSrNumber,
      filterCircleName : this.filterCircleName,
      filterTviSiteId : this.filterTviSiteId,
      filterSiteId : this.filterSiteId,
      filterProductType : this.filterProductType,
      filterSrStatus : this.filterSrStatus,
      filterOperator : this.filterOperator,
      filterStartDate : this.filterStartDate,
      filterEndDate : this.filterEndDate
    }
    this.airtelService.anyPostRequest('exportData',jsonData)
    .subscribe(
      (result)=>{
        let excelDataList = result.wrappedList;
        let columnKeyArr = excelDataList[0].columnKey.split(",");
        let columnTitleArr = excelDataList[0].columnTitle.split(",");
        CommonFunction.downloadFile(excelDataList,
          'Airtel_SR.csv', 
          columnKeyArr, 
          columnTitleArr);
          this.spinner.hide();
      },
      (error)=>{
        this.toastr.warning(Constant.returnServerErrorMessage("exportData"),"Alert !");
        this.spinner.hide();
      }
    )
  }

  changeListener($event, i): void {
    $("#att_"+i).val("");
    this.readThis($event.target, i);
  }

  readThis(inputValue: any, optionNumber): void {
    var file: File = inputValue.files[0];
    let wrongFile = false;
    // let fileName = file.name;
    // if(!(fileName.indexOf(".jpg") > -1 || fileName.indexOf(".jpeg") > -1 || 
    // fileName.indexOf(".png") > -1 || fileName.indexOf(".pdf") > -1)){
    //   this.toastr.warning("only .jpg, .jpeg, .png, .pdf format accepted, please choose right file.","Alert !");
    //   wrongFile = true;
    // }
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      let image = myReader.result;
      $("#att_"+optionNumber).val(image);
      // if(wrongFile){
      //     jQuery("#file_"+optionNumber).val("");
      //     $("#att_"+optionNumber).val("");
      // }
    }
    myReader.readAsDataURL(file);
  }

  rfsDoneColorCode = "#08a008"; // Green
  rejectColorCode = "#f98989"; // Red
  getColor(tabName, status){
    let color = "";
    switch (tabName) {
      case 'CreateNBS':
        if(status == "NB19" || status == "NB20" || status == "NB21" || status == "NB22"|| status == "NB23")
        color = this.rfsDoneColorCode;
        if(status == "NB98" || status == "NB99" || status == "NB100")
        color = this.rejectColorCode;
      break;

      case 'ODSC_Anchor' : case 'ODSC_Sharing' : case 'HPSC' : case 'HPSC_Sharing' : case 'Smart_Split' :
        if(status == "NB19" || status == "NB20" || status == "NB21" || status == "NB22"|| status == "NB23")
        color = this.rfsDoneColorCode;
        if(status == "NB98" || status == "NB99" || status == "NB100")
        color = this.rejectColorCode;
      break;

      case 'New_Tenency': case 'TCL_Redwin' :
        if(status == "NB10" || status == "NB11" || status == "NB12" || status == "NB13" || status == "NB14")
        color = this.rfsDoneColorCode;
        if(status == "NB97" || status == "NB98" || status == "NB99" || status == "NB100")
        color = this.rejectColorCode;
      break;

      case 'Site_Upgrade': case 'I_WAN' : case 'MCU' : case 'UBR' : case 'HEX_OLT' : case 'Fibre_Termination' : case 'TCU' :
        if(status == "NB08" || status == "NB09" || status == "NB10" || status == "NB11" || status == "NB12")
        color = this.rfsDoneColorCode;
        if(status == "NB98" || status == "NB99" || status == "NB100")
        color = this.rejectColorCode;
      break;
    }

    return color;
  }

  bulkRemark = "";
  bulkSharingPotential = "";
  is_show_reject_all_btn : boolean = false;
  getHoRfCheckbox(status:string){
    if(this.loginEmpRole == 'HO_RF_PLANNING' && status == 'NB02'){
      this.is_show_reject_all_btn = true;
      return true;
    }
    return false;
  }

  bulkAction : any = "";
  public cancelCheckedList(sr,action){
    var checkCheckedList = [];
    jQuery.each(jQuery("input[name='TVI_SITE']:checked"), function(){
      let sendJson = {
        srNumber: jQuery(this).val().split("-")[0], // SR number
        circleName: jQuery(this).val().split("-")[1],
        operator: jQuery(this).val().split("-")[2],
        tabName: jQuery(this).val().split("-")[3]
      }
      checkCheckedList.push(sendJson);
    });

    if(checkCheckedList.length != 0){
      if(sr == 1){
        this.bulkRemark = "";
        this.bulkAction = action;
        jQuery("#bulkStatusModal").modal({
          backdrop : 'static',
          keyboard : false
        });
      }
      else{
        if(this.bulkAction == 'NB03' && this.bulkSharingPotential == "" && (this.filterProductType == '' || this.filterProductType == "CreateNBS")){
          alert("please select sharing potential value");
          $("#_bulkSharingPotential").focus();
          return ;
        }
        else if(this.bulkRemark == ""){
          alert("please enter remark.");
          return ;
        }
        let jsonData = {
          loginEmpId : this.loginEmpId,
          loginEmpRole : this.loginEmpRole,
          bulkAction : this.bulkAction,
          bulkRemark : this.bulkRemark,
          bulkSharingPotential : this.bulkSharingPotential,
          checkCheckedList : checkCheckedList,
        }

        this.spinner.show();
        this.airtelService.anyPostRequest('changeAirtelBulkSrStatus',jsonData)
        .subscribe((response)=>{
          if(response.responseCode == Constant.SUCCESSFUL_RESPONSE){
            this.toastr.success('Successfully done', 'Alert');
            this.bulkRemark = "";
            this.bulkSharingPotential = "";
            this.is_show_reject_all_btn = false;
            this.selectAll = false;
            jQuery("#bulkStatusModal").modal("hide");
            this.spinner.hide();
            this.getAirtetDetails(this.pageNumber);
          }
          else {
            this.toastr.error('Something went wrong', 'Alert');
            this.spinner.hide();
          }
        },
        (error)=>{
          this.toastr.warning(Constant.returnServerErrorMessage("changeAirtelBulkSrStatus"),"Alert !");
          this.spinner.hide();
        });
      } 
    }
    else{
      alert("check atleast one record.")
    }
  }

  selectAllCheckbox(){
    if(!this.selectAll){
      jQuery("input[name='TVI_SITE']").prop("checked",true);
    }
    else{
      jQuery("input[name='TVI_SITE']").prop("checked",false);
    }
  }


}
