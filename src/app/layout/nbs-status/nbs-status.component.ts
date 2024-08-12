import { Component, OnInit } from '@angular/core';
import { NbsStatusService } from './service/NbsStatusService';
import { Constant } from 'src/app/shared/constant/Constant';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { CreateNBSService } from 'src/app/shared/services/createNBSService';
import { DatePipe } from '@angular/common';
import { CommonFunction } from 'src/app/shared/constant/CommonFunction';
declare var jQuery;
declare var $;

@Component({
  selector: 'app-nbs-status',
  templateUrl: './nbs-status.component.html',
  styleUrls: ['./nbs-status.component.css']
})
export class NbsStatusComponent implements OnInit {

  filterSrNumber = "";
  filterCircleName = "";
  filterTviSiteId = "";
  filterSiteId = "";
  filterProductType = "";
  filterSrStatus = "";
  filterOperator = "";
  allOperatorList = [];
  selectAll : boolean = false;
  isEdit : boolean = false;
  workflowHistory : boolean = false;
  filterStartDate = "";
  filterEndDate = "";
  airtelSiteId : any = "";
  airtelLocatorId : any = "";
  suggestedLatitude = "";
  suggestedLongitude = "";
  suggestedSiteAddress = "";
  suggestedCity = "";
  suggestedTownVillage = "";
  suggestedDistrict = "";
  cityClass = "";
  cityClassList = [];
  suggestedState = ""
  suggestedPincode = ""
  suggestedClutter = ""
  suggestedSiteType = "";
  ebConnection = "";
  suggestedEbAvailablilityDistance = "";
  suggestedTowerHeight = "";
  suggestedDgAvailability = "";
  suggestedStandardIPFEE = "";
  suggestedLLR = "";
  suggestedCityPremium : any;
  suggestedLoading = "";
  suggestedPropertyTax = "";
  suggestedMunicipalTax = "";
  nbsProductType = "";
  additionalBB = "";
  headLoad = "";
  totalWeightOnTower = "";
  suggestedWindSpeed = "";
  suggestedLockTerm = "";
  suggestedDeviation = "";
  suggestedTowerType = "";
  suggestedBuildingHeight = "";
  suggestedLandOwnerRent = "";
  suggestedElectrificationCharges = "";
  suggestedMcCharges = "";
  rfiDate = "";
  rfiAcceptedDate = "";
  rfsDate = "";
  remark = "";
  loginEmpId = "";
  loginEmpRole = "";
  isHoUser = "";
  circleName = "";
  operator = "";
  nbsDataList = [];
  pagination = "";
  bulkRemark = "";
  bulkSharingPotential = "";
  tabName = "";
  cityPremium = "";
  noOfODSC : any = "";
  noOfRFAntenna : any = "";
  noOfRFAntenna_Delete : any = "";
  noOfRFAntenna_Add : any = "";
  noOfMicrowave : any = "";
  noOfMicrowave_Delete : any = "";
  noOfMicrowave_Add : any = "";
  noOfBBU : any = "";
  noOfBBU_Delete : any = "";
  noOfBBU_Add : any = "";
  noOfRRU : any = "";
  noOfRRU_Delete : any = "";
  noOfRRU_Add : any = "";
  noOfBTS : any = "";
  noOfMCB : any = "";
  noOfMassiveMIMOAntenna : any = "";
  noOfIP55 : any = "";
  btsType = "";
  clutterList = [];
  siteTypeList = [];
  noOfRFAntennaList = [];
  noOfMicrowaveList = [];
  noOfMassiveMIMOAntennaList = [];
  noOfBBUList = [];
  noOfRRUList = [];
  noOfBTSList = [];
  noOfMCBList = [];
  noOfODSCList = [];
  noOfIP55List = [];
  noOfRRU_SwapList = [];
  btsTypeList = [];
  noOfPole : any = "";
  noOfPoleList = [];
  noOfHPSCAntenna : any = "";
  noOfHPSCAntennaList = [];
  windSpeed = "";
  windSpeedList = [];
  uSpaceList = [];
  opcoFrequencyList = [];
  mwRack : any = "";
  fiberTermination : any = "";
  noOfUSpaceRequired : any = "";
  uSpace_ethernet : any = "";
  fiberLength : any = "";
  loadOfU : any = "";
  selectedOpcoFrequencyList = [];
  frequencyUserByOpco = "";
  sharingPotential = "";
  airtelCityPremiumPercentage : number = 0;
  cityPremiumPercentage : number = 0;
  cityPremiumPercentageList = [];
  noRecordFound : boolean = false;
  is_CreateNBS_Tab : boolean = false;
  is_ODSC_Anchor_Tab : boolean = false;
  is_HPSC_Tab : boolean = false;
  is_HPSC_Sharing_Tab : boolean = false;
  is_New_Tenency_Tab : boolean = false;
  is_Site_Upgrade_Tab : boolean = false;
  is_IWan_UBR_Tab : boolean = false;
  is_TCL_Redwin_Tab : boolean = false;
  is_MCU_Tab : boolean = false;
  is_FibreTermination_Tab : boolean = false;
  is_HEX_OLT_Tab : boolean = false;
  is_Smart_Split_Tab : boolean = false;
  is_TCU_Tab : boolean = false;
  allCircleList = "";
  tviSiteId = "";
  version : number = 0;
  portalRunningVersion : number = 0;
  recordOnApage : number = 0;
  multiSelectropdownSettings = {};
  productTypeList = [];
  rruMakeList = [];
  bbuMakeList = [];
  bbuPositioningList = [];
  btsMakeList = [];
  noOfUBRAntennaList = [];
  weightOfAntennaList = [];
  typeOfAntennaList = [];
  noOfUSpaceList = [];
  powerRequiredList = [];
  iwanNoOfMCBList = [];
  powerRequired = "";
  noOfUBR_Antenna = "";
  weightOfAntenna = "";
  typeOfAntenna = "";
  uSpace = "";
  powerConsumption = "";
  mcuNoOfUSpaceList = [];
  mcuPowerRequiredList = [];
  mcuNoOfMCBList = [];
  ftNoOfUSpaceList = [];
  ftPowerConsumptionList = [];
  ftNoOfMCBList = [];
  tclNoOfUBRAntennaList = [];
  tclWeightOfAntennaList = [];
  tclNoOfUSpaceList = [];
  tclPowerRequiredList = [];
  mcbInAmpList = [];
  hexNoOfMCBList = [];
  bbuAutoPopUpList = [];
  rfAntennaAutoPopUpList = [];
  rruAutoPopUpList = [];
  mwAutoPopUpList = [];
  RfAntModelList = [];
  mwMakeList = [];
  floorLength = "";
  fiberEntry = "";
  mcbRequiredInAmp = "";
  currentDate = "";
  isAtDocLink : boolean = false;
  isRfiDocLink : boolean = false;
  isNcsoLink : boolean = false;
  isSurveyReportLink = false;
  isDdrLink = false;
  isSeafLink = false;
  isGoogleSnapshotLink : boolean = false;
  isBoqLink : boolean = false;
  isAggrementLink : boolean = false
  isAnyLink : boolean = false;
  constructor(private route:Router,private sharedService : CreateNBSService,
    private nbsStatusService : NbsStatusService,
    private spinner: NgxSpinnerService,private datePipe : DatePipe,
    private toastr: ToastrService, private commonFunction : CommonFunction) { 
      this.version = Constant.VERSION;
      this.loginEmpId = localStorage.getItem("empId");
      this.loginEmpRole = localStorage.getItem("empRole")
      this.circleName = localStorage.getItem("circleName");
      this.operator = localStorage.getItem("operator");
      this.isHoUser = localStorage.getItem("isHoUser");

      if(this.loginEmpRole == "OPCO") this.filterOperator = this.operator;
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
    this.currentDate = this.datePipe.transform(new Date(),'yyyy-MM-dd');
    this.rfiDate = this.currentDate;
    this.clutterList = [{"paramCode":"Urban","paramDesc":"Urban "},{"paramCode":"Semi Urban","paramDesc":"Semi Urban "},
    {"paramCode":"Rural","paramDesc":"Rural "},{"paramCode":"Metro","paramDesc":"Metro "},
    {"paramCode":"Densc","paramDesc":"Densc "}];
    
    this.siteTypeList = [{"paramCode":"GBT","paramDesc":"GBT "},
    {"paramCode":"RTT","paramDesc":"RTT "},
    {"paramCode":"RTP","paramDesc":"RTP "},
    {"paramCode":"GBM","paramDesc":"GBM "},
    {"paramCode":"COW","paramDesc":"COW "}
    ];
    
    if(localStorage.getItem("empRole") != 'Admin'){
      this.getNoOfList();
      this.getAutoPopUp();
    }
      
  }
  
  rfsDoneColorCode = "#08a008"; // Green
  rejectColorCode = "#f98989"; // Red
  getColor(currentTab, status){
    let color = "";
    switch (currentTab) {
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

  onSelectOrDeSelectOpcoFrequency(item: any) {
    this.frequencyUserByOpco = this.createCommaSeprate(this.selectedOpcoFrequencyList);
  }

  onSelectAllOrDeSelectAllOpcoFrequency(item: any) {
    this.selectedOpcoFrequencyList = item;
    this.frequencyUserByOpco = this.createCommaSeprate(this.selectedOpcoFrequencyList);
  }

  selectAllCheckbox(){
    if(!this.selectAll){
      jQuery("input[name='TVI_SITE']").prop("checked",true);
    }
    else{
      jQuery("input[name='TVI_SITE']").prop("checked",false);
    }
  }

  calculateCityPremium(){
    if(this.cityPremium == "Yes" && this.suggestedStandardIPFEE != ''){
      let ipfee = parseInt(this.suggestedStandardIPFEE);
      let cityPre = (ipfee * this.airtelCityPremiumPercentage) / 100;
      this.suggestedCityPremium = cityPre;
    }
    else{
      this.suggestedCityPremium = "0";
    }
  }

  calculateCityPremiumForVILandRJIO(){
    if(this.cityPremium == "Yes" && this.suggestedStandardIPFEE != ''){
      let ipfee = parseInt(this.suggestedStandardIPFEE);
      let cityPre = (ipfee * this.cityPremiumPercentage) / 100;
      this.suggestedCityPremium = cityPre;
    }
    else{
      this.suggestedCityPremium = "0";
    }
  }


  createRange(number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }

  findPage(){
    this.noRecordFound = false;
    let currentUrl = this.route.url;
    if(currentUrl === "/layout/dashbord"){
      this.tabName = "dashbord";
    }
    else if(currentUrl === "/layout/nbs-status"){
      this.tabName = "status";
    }
  }

  getAutoPopUp(){
    this.sharedService.getAutoPopUp()
    .subscribe(
      (result) =>{
        // BBU
        this.bbuAutoPopUpList = result.bbuPopUpList;
        localStorage.setItem("bbuAutoPopUpList", JSON.stringify(this.bbuAutoPopUpList));
        let tempBbuMakeList = [];
        let bbuMakeList = this.bbuAutoPopUpList
        .map(item => item.make)
        .filter((value, index, self) => self.indexOf(value) === index);
        for(let i=0;i<bbuMakeList.length;i++){
          let json = {
            "paramCode" : bbuMakeList[i],
            "paramDesc" : bbuMakeList[i]+" "
          }
          tempBbuMakeList.push(json);
        }
        this.bbuMakeList = tempBbuMakeList;
        
        // RF Antenna
        this.rfAntennaAutoPopUpList = result.rfAntennaPopUpList;
        localStorage.setItem("rfAntennaAutoPopUpList", JSON.stringify(this.rfAntennaAutoPopUpList));
        let tempRfModelList = [];
        let rfModelList = this.rfAntennaAutoPopUpList
        .map(item => item.model)
        .filter((value, index, self) => self.indexOf(value) === index);
        for(let i=0;i<rfModelList.length;i++){
          let json = {
            "paramCode" : rfModelList[i],
            "paramDesc" : rfModelList[i]+" "
          }
          tempRfModelList.push(json);
        }
        this.RfAntModelList = tempRfModelList;
        
        // RRU
        this.rruAutoPopUpList = result.rruPopUpList;
        localStorage.setItem("rruAutoPopUpList", JSON.stringify(this.rruAutoPopUpList));
        let tempRruMakeList = [];
        let rruMakeList = this.rruAutoPopUpList
        .map(item => item.make)
        .filter((value, index, self) => self.indexOf(value) === index);
        for(let i=0;i<rruMakeList.length;i++){
          let json = {
            "paramCode" : rruMakeList[i],
            "paramDesc" : rruMakeList[i]+" "
          }
          tempRruMakeList.push(json);
        }
        this.rruMakeList = tempRruMakeList;
        
        // MW
        this.mwAutoPopUpList = result.mwPopUpList;
        localStorage.setItem("mwAutoPopUpList", JSON.stringify(this.mwAutoPopUpList));
        let tempMwMakeList = [];
        let mwMakeList = this.mwAutoPopUpList
        .map(item => item.make)
        .filter((value, index, self) => self.indexOf(value) === index);
        for(let i=0;i<mwMakeList.length;i++){
          let json = {
            "paramCode" : mwMakeList[i],
            "paramDesc" : mwMakeList[i]+" "
          }
          tempMwMakeList.push(json);
        }
        this.mwMakeList = tempMwMakeList;
        
      },
      (error) =>{

      }
    )
  }

  opcoRemarkInSP = "";
  allNoOfList = [];
  getNoOfList(){
    this.sharedService.getNoOfList()
    .subscribe((response) =>{
      //console.log(response);
      this.allNoOfList = response.wrappedList;

      localStorage.setItem("allNoOfList", JSON.stringify(this.allNoOfList));
      
      for(let i=0;i<this.allNoOfList.length;i++){
        let paramCode = this.allNoOfList[i].paramCode;
        let paramDesc = this.allNoOfList[i].paramDesc; 
        if(paramCode == "OPCO_Remark_In_SP"){
          this.opcoRemarkInSP = paramDesc;
        }
        else if(paramCode == "noOfRFAntenna"){
          for(let i=0;i<=paramDesc;i++){
            let json = {
              id : i
            }
            this.noOfRFAntennaList.push(json)
          }
        }
        else if(paramCode == "noOfMicrowave"){
          for(let i=0;i<=paramDesc;i++){
            let json = {
              id : i
            }
            this.noOfMicrowaveList.push(json)
          }
        }
        else if(paramCode == "noOfBBU"){
          for(let i=0;i<=paramDesc;i++){
            let json = {
              id : i
            }
            this.noOfBBUList.push(json)
          }
        }
        else if(paramCode == "noOfBTS"){
          for(let i=0;i<=paramDesc;i++){
            let json = {
              id : i
            }
            this.noOfBTSList.push(json)
          }
        }
        else if(paramCode == "noOfMassiveMIMOAntenna"){
          for(let i=0;i<=paramDesc;i++){
            let json = {
              id : i
            }
            this.noOfMassiveMIMOAntennaList.push(json)
          }
        }
        else if(paramCode == "noOfMCB"){
          for(let i=0;i<=paramDesc;i++){
            let json = {
              id : i
            }
            this.noOfMCBList.push(json)
          }
        }
        else if(paramCode == "noOfODSC"){
          for(let i=0;i<=paramDesc;i++){
            let json = {
              id : i
            }
            this.noOfODSCList.push(json)
          }
        }
        else if(paramCode == "noOfRRU"){
          for(let i=0;i<=paramDesc;i++){
            let json = {
              id : i
            }
            this.noOfRRUList.push(json)
          }
        }
        else if(paramCode == "noOfIP55"){
          for(let i=0;i<=paramDesc;i++){
            let json = {
              id : i
            }
            this.noOfIP55List.push(json)
          }
        }
        else if(paramCode == "noOfRRU_Swap"){
          for(let i=0;i<=paramDesc;i++){
            let json = {
              id : i
            }
            this.noOfRRU_SwapList.push(json)
          }
        }
        else if(paramCode == "btsType"){
          let btsTypeSplit = paramDesc.split(",");
          for(let i=0;i<btsTypeSplit.length;i++){
            let json = {
              id : btsTypeSplit[i]
            }
            this.btsTypeList.push(json)
          }
        }
        else if(paramCode == "windSpeed"){
          let windSpeedSplit = paramDesc.split(",");
          for(let i=0;i<windSpeedSplit.length;i++){
            let json = {
              id : windSpeedSplit[i]
            }
            this.windSpeedList.push(json)
          }
        }
        else if(paramCode == "noOfU_spaceRequired"){
          let uSpaceSplit = paramDesc.split(",");
          for(let i=0;i<uSpaceSplit.length;i++){
            let json = {
              id : uSpaceSplit[i]
            }
            this.uSpaceList.push(json)
          }
        }
        else if(paramCode == "frequency"){
          let frequencySplit = paramDesc.split(",");
          let tempFreqList = [];
          for(let i=0;i<frequencySplit.length;i++){
            let json = {
              "paramCode" : frequencySplit[i],
              "paramDesc" : frequencySplit[i]+" "
            }
            tempFreqList.push(json);
          }
          this.opcoFrequencyList = tempFreqList;
        }
        else if(paramCode == 'cityClass'){
          this.cityClassList = paramDesc.split(",");
        }
        else if(paramCode == 'allOperator'){
          this.allOperatorList = paramDesc.split(",");
        }
        else if(paramCode == 'cityPremiumPercentage'){
          this.cityPremiumPercentageList = paramDesc.split(",");
        }
        else if(paramCode == 'airtelCityPremiumPercentage'){
          this.airtelCityPremiumPercentage = paramDesc;
        }
        else if(paramCode == 'allCircleList'){
          this.allCircleList = paramDesc;
        }
        else if(paramCode == 'portalRunningVersion'){
          this.portalRunningVersion = paramDesc;
        }
        else if(paramCode == 'productTypeList'){
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

        else if(paramCode == 'recordOnApage'){
          this.recordOnApage = paramDesc;
        }
        
        else if(paramCode == "bbuPositioning"){
          let splitData = paramDesc.split(",");
          let tempList = [];
          for(let i=0;i<splitData.length;i++){
            let json = {
              "paramCode" : splitData[i],
              "paramDesc" : splitData[i]+" "
            }
            tempList.push(json);
          }
          this.bbuPositioningList = tempList;
        }
        else if(paramCode == "btsMake"){
          let btsMakeSplit = paramDesc.split(",");
          let tempBtsMakeList = [];
          for(let i=0;i<btsMakeSplit.length;i++){
            let json = {
              "paramCode" : btsMakeSplit[i],
              "paramDesc" : btsMakeSplit[i]+" "
            }
            tempBtsMakeList.push(json);
          }
          this.btsMakeList = tempBtsMakeList;
        }
        else if(paramCode == "iWan_noOfUBR_Antenna"){
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
            this.iwanNoOfMCBList.push(json)
          }
        }
        else if(paramCode == "MCU_noOfUSpace"){
          let splitData = paramDesc.split(",");
          for(let i=0;i<splitData.length;i++){
            let json = {
              id : splitData[i]
            }
            this.mcuNoOfUSpaceList.push(json)
          }
        }
        else if(paramCode == "MCU_powerRequired"){
          let splitData = paramDesc.split(",");
          for(let i=0;i<splitData.length;i++){
            let json = {
              id : splitData[i]
            }
            this.mcuPowerRequiredList.push(json)
          }
        }
        else if(paramCode == "MCU_noOfMCB"){
          let splitData = paramDesc.split(",");
          for(let i=0;i<splitData.length;i++){
            let json = {
              id : splitData[i]
            }
            this.mcuNoOfMCBList.push(json)
          }
        }
        else if(paramCode == "FiberTermination_noOfUSpace"){
          let splitData = paramDesc.split(",");
          for(let i=0;i<splitData.length;i++){
            let json = {
              id : splitData[i]
            }
            this.ftNoOfUSpaceList.push(json)
          }
        }
        else if(paramCode == "FiberTermination_powerConsumption"){
          let splitData = paramDesc.split(",");
          for(let i=0;i<splitData.length;i++){
            let json = {
              id : splitData[i]
            }
            this.ftPowerConsumptionList.push(json)
          }
        }
        else if(paramCode == "FiberTermination_noOfMCB"){
          let splitData = paramDesc.split(",");
          for(let i=0;i<splitData.length;i++){
            let json = {
              id : splitData[i]
            }
            this.ftNoOfMCBList.push(json)
          }
        }
        else if(paramCode == "tclRedwin_noOfUBR"){
          let splitData = paramDesc.split(",");
          for(let i=0;i<splitData.length;i++){
            let json = {
              id : splitData[i]
            }
            this.tclNoOfUBRAntennaList.push(json)
          }
        }
        else if(paramCode == "tclRedwin_WeightOfUBR"){
          let splitData = paramDesc.split(",");
          for(let i=0;i<splitData.length;i++){
            let json = {
              id : splitData[i]
            }
            this.tclWeightOfAntennaList.push(json)
          }
        }
        else if(paramCode == "tclRedwin_noOfUSpace"){
          let splitData = paramDesc.split(",");
          for(let i=0;i<splitData.length;i++){
            let json = {
              id : splitData[i]
            }
            this.tclNoOfUSpaceList.push(json)
          }
        }
        else if(paramCode == "tclRedwin_powerRequired"){
          let splitData = paramDesc.split(",");
          for(let i=0;i<splitData.length;i++){
            let json = {
              id : splitData[i]
            }
            this.tclPowerRequiredList.push(json)
          }
        } 
        if(paramCode == "hexOlt_mcbInAMP"){
          let splitData = paramDesc.split(",");
          for(let i=0;i<splitData.length;i++){
            let json = {
              id : splitData[i]
            }
            this.mcbInAmpList.push(json)
          }
        }
        else if(paramCode == "hexOlt_noOfMCB"){
          let splitData = paramDesc.split(",");
          for(let i=0;i<splitData.length;i++){
            let json = {
              id : splitData[i]
            }
            this.hexNoOfMCBList.push(json)
          }
        } 
        

        if(i == this.allNoOfList.length-1){
          if(this.version != this.portalRunningVersion){
            alert("Some update on portal, please reload page by using key (CTRL + F5).")
            localStorage.clear();
            this.route.navigate(['/login']);
          }
          else{
            this.getNbsDetails(1);
          }
        }
      }
    },
    (error)=>{
      this.toastr.warning(Constant.returnServerErrorMessage("getNoOfList"),"Alert !");
      // this.spinner.hide();
    });
  }
  is_show_reject_all_btn = false;
  
  showCurrentModal(modalId : any){
    $("#"+modalId).modal({
      backdrop : 'static',
      keyboard : false
    });
  }
  pageNumber = 0; 
  getNbsDetails(pageNum){
    this.pageNumber = pageNum
    this.findPage();
    this.is_show_reject_all_btn = false;
    this.nbsDataList = [];
    let sendJson = {
      pageNum : this.pageNumber,
      recordOnApage : this.recordOnApage,
      loginEmpId : this.loginEmpId,
      loginEmpRole : this.loginEmpRole,
      isHoUser : this.isHoUser,
      circleName : this.circleName,
      operator : this.operator,
      tabName : this.tabName,
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
    //console.log(JSON.stringify(sendJson));
    this.spinner.show();
    this.nbsStatusService.getNbsDetails(sendJson)
    .subscribe((response) => {
      if(response.responseCode == Constant.SUCCESSFUL_RESPONSE){
        this.nbsDataList = response.wrappedList;
        this.pagination = response.pagination;
        if(this.pagination !="") this.createPagination();
        for(let i=0;i<this.nbsDataList.length;i++){
          if(this.loginEmpRole == "HO_RF_PLANNING" && this.nbsDataList[i].status == "NB02"){
            this.is_show_reject_all_btn = true;
          }
        }
      }
      else if(response.responseCode == Constant.NO_RECORDS_FOUND_CODE){
        this.pagination = "";
        this.noRecordFound = true;
      }
      else{
        this.toastr.error('Something went wrong', 'Alert');
      }
      setTimeout(() => {
        $(".my-pagination").removeClass("pagination-active");
        $(".my-pagination_"+this.pageNumber).addClass("pagination-active");
      }, 100);

      this.spinner.hide();
      
    },
    (error) => {
      this.toastr.warning(Constant.returnServerErrorMessage("getNbsDetails"),"Alert !");
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
    this.getNbsDetails(10*i+1);
  }
  gotoNext(i){
    $("#div"+i).hide()
    $("#div"+(i+1)).show();
    i = i+1;
    this.activeIndex = i;
    $("#page-select").prop('selectedIndex', this.activeIndex);
    this.getNbsDetails(10*i+1);
  }

  gotoBeginEnd(hideIndex,showIndex){
    $("#div"+hideIndex).hide();
    $("#div"+showIndex).show();
    this.activeIndex = showIndex;
    $("#page-select").prop('selectedIndex', this.activeIndex);
    this.getNbsDetails(10*showIndex+1);
  }

  changePagination(evt){
    let v = evt.target.value;
    $("#div"+this.activeIndex).hide();
    $("#div"+v).show();
    this.activeIndex = v;
    this.getNbsDetails(10*v+1);
  }

  exportData(){

    if(this.nbsDataList.length == 0){
      this.toastr.warning("No data found for export","Alert !");
      return ;
    }
    let localCircle = "";
    if(this.isHoUser == "N"){
      localCircle = this.circleName;
    }
    else{
      localCircle = this.allCircleList;
    }
    let localRole = "";
    if(this.loginEmpRole == "S&M"){
      localRole = "SnM";
    }
    else if(this.loginEmpRole == "HO_S&M"){
      localRole = "HO_SnM";
    }
    else if(this.loginEmpRole == "S&M_MIS_Head"){
      localRole = "SnM_MIS_Head";
    }
    else{
      localRole = this.loginEmpRole;
    }
    let sendJson = {
      loginEmpId : this.loginEmpId,
      loginEmpRole : localRole,
      isHoUser : this.isHoUser,
      circleName : localCircle,
      operator : this.operator,
      tabName : this.tabName,
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
    window.open(Constant.phpServerURL+'exportNbs.php?jsonData='+JSON.stringify(sendJson));
  }

  totalRatedPower : any = "";
  additionalLoad = "";

  addInTotal(){

    let bbuTotalRatedPower : any = 0.0;
    for(let i=1;i<=this.noOfBBU;i++){
      bbuTotalRatedPower += parseFloat($("#bbuPowerConsumption"+i).val());
    }
    $("#bbuTotalRatedPower").val(bbuTotalRatedPower);

    let rruTotalRatedPower : any = 0.0;
    for(let i=1;i<=this.noOfRRU;i++){
      rruTotalRatedPower += parseFloat($("#rruPowerConsumption"+i).val());
    }
    $("#rruTotalRatedPower").val(rruTotalRatedPower);

    let btsTotalRatedPower : any = 0.0;
    for(let i=1;i<=this.noOfBTS;i++){
      btsTotalRatedPower += parseFloat($("#btsPower"+i).val());
    }
    $("#btsTotalRatedPower").val(btsTotalRatedPower);
    
  }

  

  loadOfUDisabled : boolean = true;
  selectNoOfUspaceRequired(){
    if(this.noOfUSpaceRequired == "" || this.noOfUSpaceRequired == "0"){
      this.loadOfUDisabled = true;
      this.loadOfU = "";
    }
    else{
      this.loadOfUDisabled = false;
    }
  }

  addInTotalEdit(){
    let bbuTotalRatedPower : any = 0.0;
    for(let i=1;i<=this.noOfBBU;i++){
      bbuTotalRatedPower += parseFloat($("#bbuPowerConsumptionEdit"+i).val());
    }
    $("#bbuEditTotalRatedPower").val(bbuTotalRatedPower);

    let bbuDeleteTotalRatedPower : any = 0.0;
    for(let i=1;i<=this.noOfBBU_Delete;i++){
      bbuDeleteTotalRatedPower += parseFloat($("#bbuDeletePowerConsumption"+i).val());
    }
    $("#bbuDeleteTotalRatedPower").val(bbuDeleteTotalRatedPower);

    let bbuAddTotalRatedPower : any = 0.0;
    for(let i=1;i<=this.noOfBBU_Add;i++){
      bbuAddTotalRatedPower += parseFloat($("#bbuAddPowerConsumption"+i).val());
    }
    $("#bbuAddTotalRatedPower").val(bbuAddTotalRatedPower);

    let rruTotalRatedPower : any = 0.0;
    for(let i=1;i<=this.noOfRRU;i++){
      rruTotalRatedPower += parseFloat($("#rruPowerConsumptionEdit"+i).val());
    }
    $("#rruEditTotalRatedPower").val(rruTotalRatedPower);

    let rruDeleteTotalRatedPower : any = 0.0;
    for(let i=1;i<=this.noOfRRU_Delete;i++){
      rruDeleteTotalRatedPower += parseFloat($("#rruDeletePower"+i).val());
    }
    $("#rruDeleteTotalRatedPower").val(rruDeleteTotalRatedPower);

    let rruAddTotalRatedPower : any = 0.0;
    for(let i=1;i<=this.noOfRRU_Add;i++){
      rruAddTotalRatedPower += parseFloat($("#rruAddPower"+i).val());
    }
    $("#rruAddTotalRatedPower").val(rruAddTotalRatedPower);

    let btsTotalRatedPower : any = 0.0;
    for(let i=1;i<=this.noOfBTS;i++){
      btsTotalRatedPower += parseFloat($("#btsPowerEdit"+i).val());
    }
    $("#btsEditTotalRatedPower").val(btsTotalRatedPower);

    let mimoTotalRatedPower : any = 0.0;
    for(let i=1;i<=this.noOfMassiveMIMOAntenna;i++){
      mimoTotalRatedPower += parseFloat($("#mimoPower"+i).val());
    }
    $("#mimoTotalRatedPower").val(mimoTotalRatedPower);

    let ip55TotalRatedPower : any = 0.0;
    for(let i=1;i<=this.noOfIP55;i++){
      ip55TotalRatedPower += parseFloat($("#ip55Power"+i).val());
    }
    $("#ip55TotalRatedPower").val(ip55TotalRatedPower);
    
  }

  addInTotalRatedPowerEdit(){
    this.addInTotalEdit();
    let loadOfU = (this.loadOfU == '' || this.loadOfU == undefined) ? '0' : this.loadOfU;
    let bbuTotalRatedPower = $("#bbuEditTotalRatedPower").val() == '' ? '0' : $("#bbuEditTotalRatedPower").val();
    let bbuDeleteTotalRatedPower = $("#bbuDeleteTotalRatedPower").val() == '' ? '0' : $("#bbuDeleteTotalRatedPower").val();
    let bbuAddTotalRatedPower = $("#bbuAddTotalRatedPower").val() == '' ? '0' : $("#bbuAddTotalRatedPower").val();
    let rruTotalRatedPower = $("#rruEditTotalRatedPower").val() == '' ? '0' : $("#rruEditTotalRatedPower").val();
    let rruDeleteTotalRatedPower = $("#rruDeleteTotalRatedPower").val() == '' ? '0' : $("#rruDeleteTotalRatedPower").val();
    let rruAddTotalRatedPower = $("#rruAddTotalRatedPower").val() == '' ? '0' : $("#rruAddTotalRatedPower").val();
    let btsTotalRatedPower = $("#btsEditTotalRatedPower").val() == '' ? '0' : $("#btsEditTotalRatedPower").val();
    let mimoTotalRatedPower = $("#mimoTotalRatedPower").val() == '' ? '0' : $("#mimoTotalRatedPower").val();
    let ip55TotalRatedPower = $("#ip55TotalRatedPower").val() == '' ? '0' : $("#ip55TotalRatedPower").val();
  
    this.totalRatedPower = 
                            parseFloat(bbuTotalRatedPower) + 
                            parseFloat(rruTotalRatedPower) +
                            parseFloat(btsTotalRatedPower) +
                            parseFloat(this.additionalLoad) +
                            parseFloat(mimoTotalRatedPower) +
                            parseFloat(ip55TotalRatedPower) +
                            parseFloat(bbuAddTotalRatedPower) - parseFloat(bbuDeleteTotalRatedPower) +
                            parseFloat(rruAddTotalRatedPower) - parseFloat(rruDeleteTotalRatedPower) +
                            parseFloat(loadOfU);
  }


  addInTotalRatedPower(){
    this.addInTotal();
    let loadOfU = this.loadOfU == '' ? '0' : this.loadOfU;
    let bbuTotalRatedPower = $("#bbuTotalRatedPower").val() == '' ? '0' : $("#bbuTotalRatedPower").val();
    let rruTotalRatedPower = $("#rruTotalRatedPower").val() == '' ? '0' : $("#rruTotalRatedPower").val();
    let btsTotalRatedPower = $("#btsTotalRatedPower").val() == '' ? '0' : $("#btsTotalRatedPower").val();
  
    this.totalRatedPower = 
                            parseFloat(bbuTotalRatedPower) + 
                            parseFloat(rruTotalRatedPower) +
                            parseFloat(btsTotalRatedPower) +
                            parseFloat(this.additionalLoad) +
                            parseFloat(loadOfU);
  }

  addInTotalRatedPowerIwan(){
    let powerRequired = this.powerRequired == '' ? '0' : this.powerRequired;
    let additionalLoad = this.additionalLoad == '' ? '0' : this.additionalLoad;

    this.totalRatedPower = 
                            parseFloat(powerRequired) + 
                            parseFloat(additionalLoad);
  }
  addInTotalRatedPowerMcu(){
    let powerRequired = this.powerRequired == '' ? '0' : this.powerRequired;
    let additionalLoad = this.additionalLoad == '' ? '0' : this.additionalLoad;

    this.totalRatedPower = 
                            parseFloat(powerRequired) + 
                            parseFloat(additionalLoad);
  }

  addInTotalRatedPowerFt(){

    let powerConsumption = this.powerConsumption == '' ? '0' : this.powerConsumption;
    let additionalLoad = this.additionalLoad == '' ? '0' : this.additionalLoad;

    this.totalRatedPower = 
                            parseFloat(powerConsumption) + 
                            parseFloat(additionalLoad);
  }

  addInTotalRatedPowerTcl(){

    let powerRequired = this.powerRequired == '' ? '0' : this.powerRequired;
    let additionalLoad = this.additionalLoad == '' ? '0' : this.additionalLoad;

    this.totalRatedPower = 
                            parseFloat(powerRequired) + 
                            parseFloat(additionalLoad);
  }

  addInTotalRatedPowerHexolt(){

    let powerRequired = this.powerRequired == '' ? '0' : this.powerRequired;
    let additionalLoad = this.additionalLoad == '' ? '0' : this.additionalLoad;

    this.totalRatedPower = 
                            parseFloat(powerRequired) + 
                            parseFloat(additionalLoad);
  }

  generatePdf(srNumber){
    let pdfUrl = "http://www.in3.co.in/in3.co.in/TVI_CP/fpdf-1-6-es/generatePDF.php?srNumber=";
    window.open(pdfUrl+srNumber);
  }

  isOpcoApproveSuggestedLocation : boolean = false;
  currentStatus = "";
  nbsDataObj : any = {};
  viewDataObj : any = {};
  viewSrNumber = "";
  viewSpNumber = "";
  viewSoNumber = "";
  viewRfiDate = "";
  viewRfiDate1 = "";
  rfiDateEditable = "";
  viewRfiAcceptedDate = "";
  viewRfiAcceptedDate1 = "";
  rfiAcceptedDateEditable = "";
  viewRfsDate = "";
  viewRfsDate1 = "";
  rfsDateEditable = "";
  viewCircleName = "";
  viewOperator = "";
  viewBackhaul = "";
  viewPoleList = [];
  viewHPSCAntennaList = [];
  viewBbuList = [];
  viewRruList = [];
  viewOdscList = [];
  viewGsmAntennaList = [];
  viewMicrowaveList = [];
  viewRfAntennaList = [];
  viewRfAntennaDeleteList = [];
  viewRfAntennaAddList = [];
  viewBtsList = [];
  viewMcbList = [];
  viewMimoList = [];
  viewIp55List = [];
  viewRruDeleteList = [];
  viewRruAddList = [];
  viewBbuDeleteList = [];
  viewBbuAddList = [];
  viewMicrowaveDeleteList = [];
  viewMicrowaveAddList = [];
  powerRatingOfEquipment = "";
  noOfU = "";
  typeOfSite = "";
  isNoOfPolesEdit : boolean = false;
  isNoOfHpscAntennaEdit : boolean = false;
  isNoOfBbuEdit : boolean = false;
  isBBUAdd_Edit : boolean = false;
  isBBUDelete_Edit : boolean = false;
  isNoOfRruEdit : boolean = false;
  isRRUAdd_Edit : boolean = false;
  isRRUDelete_Edit : boolean = false;
  isRFEdit : boolean = false;
  isRFAdd_Edit : boolean = false;
  isRFDelete_Edit : boolean = false;
  isMWEdit : boolean = false;
  isMWAdd_Edit : boolean = false;
  isMWDelete_Edit : boolean = false;
  isBTSEdit : boolean = false;
  isMCBEdit : boolean = false;
  isMimoEdit : boolean = false;
  isIp55Edit : boolean = false;
  isODSCEdit : boolean = false;
  viewSrDetails(srNumber,spNumber,soNumber,tabType,circleName,operator){
    this.setTabAsDefault();
    this.currentTab = tabType;
    if(tabType == "CreateNBS"){
      this.is_CreateNBS_Tab = true;
    }
    else if(tabType == "ODSC_Anchor" || tabType == "ODSC_Sharing"){
      this.is_ODSC_Anchor_Tab = true;
    }
    else if(tabType == "HPSC"){
      this.is_HPSC_Tab = true;
    }
    else if(tabType == "HPSC_Sharing"){
      this.is_HPSC_Sharing_Tab = true;
    }
    else if(tabType == "Smart_Split"){
      this.is_Smart_Split_Tab = true;
    }
    else if(tabType == "New_Tenency"){
      this.is_New_Tenency_Tab = true;
    }
    else if(tabType == "Site_Upgrade"){
      this.is_Site_Upgrade_Tab = true;
    }
    else if(tabType == "I_WAN" || tabType == "UBR"){
      this.is_IWan_UBR_Tab = true;
    }
    else if(tabType == "MCU"){
      this.is_MCU_Tab = true;
    }
    else if(tabType == "Fibre_Termination"){
      this.is_FibreTermination_Tab = true;
    }
    else if(tabType == "TCL_Redwin"){
      this.is_TCL_Redwin_Tab = true;
    }
    else if(tabType == "HEX_OLT"){
      this.is_HEX_OLT_Tab = true;
    }
    else if(tabType == "TCU"){
      this.is_TCU_Tab = true;
    }
    this.nbsDataObj = this.nbsDataList.filter(x => x.srNumber == srNumber)[0];

    this.viewSrNumber = srNumber;
    this.viewSpNumber = spNumber;
    this.viewSoNumber = soNumber;
    this.viewCircleName = circleName;
    this.viewOperator = operator;
    this.btsType = this.commonFunction.getBlankIfNULL(this.nbsDataObj.btsType);
    this.additionalLoad = this.commonFunction.getBlankIfNULL(this.nbsDataObj.additionalLoad);
    this.totalRatedPower = this.commonFunction.getBlankIfNULL(this.nbsDataObj.totalRatedPower);
    this.loadOfU = this.commonFunction.getBlankIfNULL(this.nbsDataObj.loadOfU);
    this.currentStatus = this.nbsDataObj.status;
    this.airtelLocatorId = this.nbsDataObj.airtelLocatorId;
    this.airtelSiteId = this.nbsDataObj.airtelSiteId;
    this.viewBackhaul = this.nbsDataObj.airtelBackhaul;
    this.noOfPole = this.commonFunction.getBlankIfNULL(this.nbsDataObj.noOfPole);
    this.noOfHPSCAntenna = this.commonFunction.getBlankIfNULL(this.nbsDataObj.noOfHPSCAntenna);
    this.noOfBBU = this.commonFunction.getBlankIfNULL(this.nbsDataObj.noOfBBU);
    this.noOfRRU = this.commonFunction.getBlankIfNULL(this.nbsDataObj.noOfRRU);
    this.powerRatingOfEquipment = this.commonFunction.getBlankIfNULL(this.nbsDataObj.powerRatingOfEquipment);
    this.noOfU = this.commonFunction.getBlankIfNULL(this.nbsDataObj.uSpace);
    this.typeOfSite = this.nbsDataObj.siteType;
    this.noOfODSC = this.commonFunction.getBlankIfNULL(this.nbsDataObj.noOfODSC);
    this.noOfMicrowave = this.commonFunction.getBlankIfNULL(this.nbsDataObj.noOfMicrowave);
    this.noOfRFAntenna = this.commonFunction.getBlankIfNULL(this.nbsDataObj.noOfRFAntenna);
    this.noOfRFAntenna_Delete = this.commonFunction.getBlankIfNULL(this.nbsDataObj.noOfRFAntenna_Delete);
    this.noOfRFAntenna_Add = this.commonFunction.getBlankIfNULL(this.nbsDataObj.noOfRFAntenna_Add);
    this.noOfBTS = this.commonFunction.getBlankIfNULL(this.nbsDataObj.noOfBTS);
    this.noOfMCB = this.commonFunction.getBlankIfNULL(this.nbsDataObj.noOfMCB);
    this.noOfMassiveMIMOAntenna = this.commonFunction.getBlankIfNULL(this.nbsDataObj.noOfMassiveMIMOAntenna);
    this.noOfIP55 = this.commonFunction.getBlankIfNULL(this.nbsDataObj.noOfIP55);
    this.noOfRRU_Delete = this.commonFunction.getBlankIfNULL(this.nbsDataObj.noOfRRU_Delete);
    this.noOfRRU_Add = this.commonFunction.getBlankIfNULL(this.nbsDataObj.noOfRRU_Add);
    this.noOfBBU_Delete = this.commonFunction.getBlankIfNULL(this.nbsDataObj.noOfBBU_Delete);
    this.noOfBBU_Add = this.commonFunction.getBlankIfNULL(this.nbsDataObj.noOfBBU_Add);
    this.noOfMicrowave_Delete = this.commonFunction.getBlankIfNULL(this.nbsDataObj.noOfMicrowave_Delete);
    this.noOfMicrowave_Add = this.commonFunction.getBlankIfNULL(this.nbsDataObj.noOfMicrowave_Add);
    this.noOfUBR_Antenna = this.commonFunction.getBlankIfNULL(this.nbsDataObj.noOfUBR_Antenna);
    this.weightOfAntenna = this.commonFunction.getBlankIfNULL(this.nbsDataObj.weightOfAdditionalAntenna);
    this.typeOfAntenna = this.commonFunction.getBlankIfNULL(this.nbsDataObj.typeOfAntenna);
    this.uSpace = this.commonFunction.getBlankIfNULL(this.nbsDataObj.uSpace);
    this.powerRequired = this.commonFunction.getBlankIfNULL(this.nbsDataObj.additionalPowerRequired);
    this.powerConsumption = this.commonFunction.getBlankIfNULL(this.nbsDataObj.powerConsumption);
    this.noOfUSpaceRequired = this.commonFunction.getBlankIfNULL(this.nbsDataObj.noOfUSpaceRequired);
    this.uSpace_ethernet = this.commonFunction.getBlankIfNULL(this.nbsDataObj.uSpace_ethernet);
    this.floorLength = this.commonFunction.getBlankIfNULL(this.nbsDataObj.floorLength);
    this.fiberEntry = this.nbsDataObj.fiberEntry;
    this.mcbRequiredInAmp = this.commonFunction.getBlankIfNULL(this.nbsDataObj.mcbRequiredInAmp);
    if(
      (this.is_CreateNBS_Tab || this.is_ODSC_Anchor_Tab || this.is_HPSC_Tab || this.is_HPSC_Sharing_Tab || this.is_Smart_Split_Tab) && 
      (this.currentStatus === "NB10" || this.currentStatus === "NB11" || this.currentStatus === "NB12" || this.currentStatus === "NBB12" || 
      this.currentStatus === "NB13" || this.currentStatus === "NB14" || this.currentStatus === "NB015" || 
      this.currentStatus === "NB15" || this.currentStatus === "NB16" || this.currentStatus === "NB17" || 
      this.currentStatus === "NB18" || this.currentStatus === "NB19" || this.currentStatus === "NB20" || 
      this.currentStatus === "NB21" || this.currentStatus === "NB22" || this.currentStatus === "NB23" || 
      this.currentStatus === "RNB15" || this.currentStatus === "RNB16")
      ){
        this.isOpcoApproveSuggestedLocation = true;
      }
    else if(
        this.currentStatus === "NB96" || this.currentStatus === "NB97" || this.currentStatus === "NB98" || 
        this.currentStatus === "NB99" || this.currentStatus === "NB100"
        )
    {}

    if((this.is_ODSC_Anchor_Tab || this.is_HPSC_Tab || this.is_HPSC_Sharing_Tab || this.is_Smart_Split_Tab) && this.currentStatus === "NB05"){
      this.suggestedSiteAddress = this.nbsDataObj.suggestedSiteAddress;
      this.suggestedDistrict = this.nbsDataObj.suggestedDistrict;
      this.suggestedState = this.nbsDataObj.suggestedState;
      this.suggestedPincode = this.nbsDataObj.suggestedPincode;
      this.suggestedTownVillage = this.nbsDataObj.suggestedTownVillage;
      this.suggestedCity = this.nbsDataObj.suggestedCity;
      this.suggestedLatitude = this.nbsDataObj.suggestedLatitude;
      this.suggestedLongitude = this.nbsDataObj.suggestedLongitude;
      this.suggestedDeviation = this.nbsDataObj.suggestedDeviation;
      this.suggestedTowerType = this.nbsDataObj.suggestedTowerType;
      this.suggestedBuildingHeight = this.nbsDataObj.poleHeight;
      this.suggestedTowerHeight = this.nbsDataObj.suggestedTowerHeight;
      this.suggestedClutter = this.nbsDataObj.suggestedClutter;
      this.suggestedLandOwnerRent = this.nbsDataObj.suggestedLandOwnerRent;
      this.suggestedElectrificationCharges = this.nbsDataObj.suggestedElectrificationCharges;
      this.suggestedMcCharges = this.nbsDataObj.suggestedMcCharges;
    }
  
    this.viewRfiDate = this.nbsDataObj.rfiDate;
    if(this.viewRfiDate != ""){
      let s = this.viewRfiDate.split("-");
      this.viewRfiDate1 = s[2]+"-"+s[1]+"-"+s[0];
    }
    this.rfiDateEditable = this.viewRfiDate1;
    
    this.viewRfiAcceptedDate = this.nbsDataObj.rfiAcceptedDate;
    if(this.viewRfiAcceptedDate != ""){
      let s = this.viewRfiAcceptedDate.split("-");
      this.viewRfiAcceptedDate1 = s[2]+"-"+s[1]+"-"+s[0];
    }
    this.rfiAcceptedDateEditable = this.viewRfiAcceptedDate1;

    this.viewRfsDate = this.nbsDataObj.rfsDate;
    if(this.viewRfsDate != ""){
      let s = this.viewRfsDate.split("-");
      this.viewRfsDate1 = s[2]+"-"+s[1]+"-"+s[0];
    }
    this.rfsDateEditable = this.viewRfsDate1;

    let jsonData = {
      srNumber : this.viewSrNumber,
      loginEmpRole : this.loginEmpRole
    }
    this.spinner.show();
    this.nbsStatusService.viewSrDetails(jsonData)
    .subscribe((response)=>{
      if(response.responseCode == Constant.SUCCESSFUL_RESPONSE){
        this.viewDataObj = response.wrappedList[0];
        this.viewOdscList = this.viewDataObj.viewOdscList;
        this.viewGsmAntennaList = this.viewDataObj.viewGsmAntennaList;
        this.viewMicrowaveList = this.viewDataObj.viewMicrowaveList;
        this.viewRfAntennaList = this.viewDataObj.viewRfAntennaList;
        this.viewRfAntennaDeleteList = this.viewDataObj.viewRfAntennaDeleteList;
        this.viewRfAntennaAddList = this.viewDataObj.viewRfAntennaAddList;
        this.viewBbuList = this.viewDataObj.viewBbuList;
        this.viewRruList = this.viewDataObj.viewRruList;
        this.viewBtsList = this.viewDataObj.viewBtsList;
        this.viewMcbList = this.viewDataObj.viewMcbList;
        this.viewMimoList = this.viewDataObj.viewMimoList;
        this.viewIp55List = this.viewDataObj.viewIp55List;
        this.viewRruDeleteList = this.viewDataObj.viewRruDeleteList;
        this.viewRruAddList = this.viewDataObj.viewRruAddList;
        this.viewBbuDeleteList = this.viewDataObj.viewBbuDeleteList;
        this.viewBbuAddList = this.viewDataObj.viewBbuAddList;
        this.viewMicrowaveDeleteList = this.viewDataObj.viewMicrowaveDeleteList;
        this.viewMicrowaveAddList = this.viewDataObj.viewMicrowaveAddList;
        this.viewPoleList = this.viewDataObj.viewPoleList;
        this.viewHPSCAntennaList = this.viewDataObj.viewHPSCAntennaList;

        if(this.is_HPSC_Tab && (this.currentStatus === "NB16" || this.currentStatus === "NB21")){
          for(let a=0;a<4;a++){
            let l = this.viewDataObj.noOfPoleList[a];
            let j = {};
            if(l == null){
              j = {poleHeight:'',poleWeight:''};
            }
            else{
              j = {poleHeight:l.poleHeight,poleWeight:l.poleWeight};
            }
            this.viewPoleList.push(j);
          }
          for(let b=0;b<8;b++){
            let l = this.viewDataObj.noOfHPSCAntennaList[b];
            let j = {};
            if(l == null){
              j = {typeOfHpscAntenna:''};
            }
            else{
              j = {typeOfHpscAntenna:l.typeOfHpscAntenna};
            }
            this.viewHPSCAntennaList.push(j);
          }
          for(let c=0;c<6;c++){
            let l = this.viewDataObj.bbuList[c];
            let j = {};
            if(l == null){
              j = {bbuMake:'',bbuModel:'',bbuPowerConsumption:'',bbuPositioning:''};
            }
            else{
              j = {bbuMake:l.bbuMake,bbuModel:l.bbuModel,bbuPowerConsumption:l.bbuPowerConsumption,bbuPositioning:l.bbuPositioning};
            }
            this.viewBbuList.push(j);
          }
          for(let d=0;d<25;d++){
            let l = this.viewDataObj.rruList[d];
            let j = {};
            if(l == null){
              j = {rruMake:'',rruModel:'',rruFreqBand:'',rruPowerConsumption:'',rruWeight:''};
            }
            else{
              j = {rruMake:l.rruMake,rruModel:l.rruModel,rruFreqBand:l.rruFreqBand,rruPowerConsumption:l.rruPowerConsumption,rruWeight:l.rruWeight};
            }
            this.viewRruList.push(j);
          }
        }

        jQuery("#viewDetailsModal").modal({
          backdrop : 'static',
          keyboard : false
        });
      }
      else if(response.responseCode == Constant.NO_RECORDS_FOUND_CODE){

      }
      else{
        this.toastr.error('Something went wrong', 'Alert');
      }
      this.spinner.hide();
    },
    (error) => {
      this.toastr.warning(Constant.returnServerErrorMessage("viewSrDetails"),"Alert !");
      this.spinner.hide();
    })

    
  }

  currentTab = "";
  setTabAsDefault(){
    this.nbsDataObj = {};
    this.viewDataObj = {};
    this.remark = "";
    jQuery("input[type='file']").val("");
    jQuery("input[type='radio']").prop("checked",false);
    this.isOpcoApproveSuggestedLocation = false;
    this.is_CreateNBS_Tab  = false;
    this.is_ODSC_Anchor_Tab  = false;
    this.is_HPSC_Tab = false;
    this.is_HPSC_Sharing_Tab = false;
    this.is_New_Tenency_Tab  = false;
    this.is_Site_Upgrade_Tab  = false;
    this.is_IWan_UBR_Tab  = false;
    this.is_TCL_Redwin_Tab  = false;
    this.is_MCU_Tab  = false;
    this.is_FibreTermination_Tab  = false;
    this.is_HEX_OLT_Tab = false;
    this.odscList = [];
    this.massiveMIMOAntennaList = [];
    this.mcbList = [];
    this.btsList = [];
    this.bbuList = [];
    this.rruList = [];
    this.microwaveList = [];
    this.rfAntennaList = [];
    this.bulkAction = "";
    this.seafAttachedStr = "";
    this.isSeafLink = false;
    this.ncsoAttachedStr = "";
    // this.isNcsoLink = false;
    this.googleSnapshotStr = "";
    // this.isGoogleSnapshotLink = false;
    this.nfaAttachedStr = "";
    this.boqAttachedStr = "";
    // this.isBoqLink = false;
    this.anyAttachedStr = "";
    // this.isAnyLink = false;
    this.agreementStr = "";
    // this.isAggrementLink = false;
    this.rfiAttachedStr = "";
    // this.isRfiDocLink = false;
    this.atAttachedStr = "";
    // this.isAtDocLink = false;
    this.ddrAttachedStr = "";
    this.isDdrLink = false;
    this.surveyReportAttachedStr = "";
    this.isSurveyReportLink = false;
    this.tviSiteId = "";
    this.currentTab = "";
    this.loadOfUDisabled = true;
    this.additionalLoad = "";
    this.workflowHistory = false;
    this.viewRfsDate = "";
    this.viewRfsDate1 = "";
    this.viewRfiAcceptedDate = "";
    this.viewRfiAcceptedDate1 = "";
    this.viewRfiDate = "";
    this.viewRfiDate1 = "";
    this.suggestedSiteType = "";
    this.noOfRFAntenna = "";
    this.noOfMicrowave = "";
    this.btsType = "";
    this.noOfBBU = "";
    this.noOfRRU = "";
    this.noOfBTS = "";
    this.noOfMCB = "";
    this.noOfODSC = "";
    this.viewPoleList = [];
    this.viewHPSCAntennaList = [];
    this.viewBbuList = [];
    this.viewRruList = [];
    this.powerRatingOfEquipment = "";
    this.noOfU = "";
    this.typeOfSite = "";
    this.isNoOfPolesEdit = false;
    this.isNoOfHpscAntennaEdit = false;
    this.isNoOfBbuEdit = false;
    this.isNoOfRruEdit = false;
    this.isRFEdit = false;
    this.isMWEdit = false;
    this.isBTSEdit = false;
    this.isMCBEdit = false;
    this.isRFAdd_Edit = false;
    this.isRFDelete_Edit = false;
    this.isMWEdit = false;
    this.isMWAdd_Edit = false;
    this.isMWDelete_Edit = false;
    this.isBTSEdit = false;
    this.isMCBEdit = false;
    this.isMimoEdit = false;
    this.isIp55Edit = false;
    this.isODSCEdit = false;
    jQuery(".forMakeBlank").val("");
  }

  changeListener($event, i): void {
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
      if (optionNumber == 1) {
        this.seafAttachedStr = image;
        if(wrongFile){
          jQuery("#seaf").val("");
          this.seafAttachedStr = "";
        }
      }
      else if (optionNumber == 2) {
        this.ncsoAttachedStr = image;
        if(wrongFile){
          jQuery("#ncso").val("");
          this.ncsoAttachedStr = "";
        }
      }
      else if (optionNumber == 3) {
        this.googleSnapshotStr = image;
        if(wrongFile){
          jQuery("#googleSnapshot").val("");
          this.googleSnapshotStr = "";
        }
      }
      // else if (optionNumber == 4) {
      //   this.nfaAttachedStr = image;
      //   if(wrongFile){
      //     jQuery("#nfa").val("");
      //     this.nfaAttachedStr = "";
      //   }
      // }
      else if (optionNumber == 5) {
        this.boqAttachedStr = image;
        if(wrongFile){
          jQuery("#boq").val("");
          this.boqAttachedStr = "";
        }
      }
      else if (optionNumber == 6) {
        this.anyAttachedStr = image;
        if(wrongFile){
          jQuery("#anyAttach").val("");
          this.anyAttachedStr = "";
        }
      }
      else if (optionNumber == 7) {
        this.agreementStr = image;
        if(wrongFile){
          jQuery("#aggrement").val("");
          this.agreementStr = "";
        }
      }
      else if (optionNumber == 8) {
        this.rfiAttachedStr = image;
        if(wrongFile){
          jQuery("#rfiDocument").val("");
          this.rfiAttachedStr = "";
        }
      }
      else if (optionNumber == 9) {
        this.atAttachedStr = image;
        if(wrongFile){
          jQuery("#atDocument").val("");
          this.atAttachedStr = "";
        }
      }
      else if (optionNumber == 10) {
        this.ddrAttachedStr = image;
        if(wrongFile){
          jQuery("#ddr").val("");
          this.ddrAttachedStr = "";
        }
      }
      else if (optionNumber == 11) {
        this.surveyReportAttachedStr = image;
        if(wrongFile){
          jQuery("#surveyReport").val("");
          this.surveyReportAttachedStr = "";
        }
      }
    }
    myReader.readAsDataURL(file);
  }

  validateNbsData(status) : any{
    if(this.loginEmpRole == 'HO_RF_PLANNING' &&  status == "NB03" && this.sharingPotential == ""){
      alert("please select sharing potential value");
      return false;
    }
    else if(this.loginEmpRole == 'HO_RF_PLANNING' && status == "NB08" && this.tviSiteId == ""){
      alert("please enter valid TVI site id");
      return false;
    }
    else if(this.loginEmpRole == 'HO_RF_PLANNING' && status == "NB08" && this.suggestedLatitude == ""){
      alert("please enter valid suggest latitude value");
      return false;
    }
    else if(this.loginEmpRole == 'HO_RF_PLANNING' &&  status == "NB08" && this.suggestedLongitude == ""){
      alert("please enter valid suggest longitude value");
      return false;
    }
    else if(this.loginEmpRole == 'HO_RF_PLANNING' &&  status == "NB08" && this.suggestedSiteAddress == ""){
      alert("please enter suggest site address value");
      return false;
    }
    else if(this.loginEmpRole == 'HO_RF_PLANNING' &&  status == "NB08" && this.suggestedCity == ""){
      alert("please enter suggest city value");
      return false;
    }
    else if(this.loginEmpRole == 'HO_RF_PLANNING' &&  status == "NB08" && this.suggestedTownVillage == ""){
      alert("please enter suggest town/village value");
      return false;
    }
    else if(this.loginEmpRole == 'HO_RF_PLANNING' &&  status == "NB08" && this.suggestedDistrict == ""){
      alert("please enter suggest district value");
      return false;
    }
    else if(this.loginEmpRole == 'HO_RF_PLANNING' &&  status == "NB08" && this.suggestedState == ""){
      alert("please enter suggest state value");
      return false;
    }
    else if(this.loginEmpRole == 'HO_RF_PLANNING' &&  status == "NB08" && this.suggestedPincode == ""){
      alert("please enter suggest pincode value");
      return false;
    }
    else if(this.loginEmpRole == 'HO_RF_PLANNING' &&  status == "NB08" && this.suggestedClutter == ""){
      alert("please enter suggest clutter value");
      return false;
    }
    else if(this.loginEmpRole == 'HO_RF_PLANNING' &&  status == "NB08" && this.windSpeed == ""){
      alert("please select Wind Speed Zone(In KMPH) value");
      return false;
    }
    else if(this.loginEmpRole == 'HO_RF_PLANNING' &&  status == "NB08" && this.suggestedSiteType == ""){
      alert("please enter suggest site type value");
      return false;
    }
    else if(this.loginEmpRole == 'HO_RF_PLANNING' &&  status == "NB08" && 
    (this.suggestedSiteType == "RTT" || this.suggestedSiteType == "RTP") && 
    this.suggestedBuildingHeight == ""){
      alert("please enter Building Height value");
      return false;
    }
    else if(this.loginEmpRole == 'HO_RF_PLANNING' &&  status == "NB08" && this.ebConnection == ""){
      alert("Please select EB connection");
      return false;
    }
    else if(this.loginEmpRole == 'HO_RF_PLANNING' &&  status == "NB08" && this.suggestedEbAvailablilityDistance == ""){
      alert("please enter suggest eb availablily distance value");
      return false;
    }
    else if(this.loginEmpRole == 'HO_RF_PLANNING' &&  status == "NB08" && this.suggestedTowerHeight == ""){
      alert("please enter suggest tower height value");
      return false;
    }
    else if(this.loginEmpRole == 'HO_RF_PLANNING' &&  status == "NB08" && this.suggestedDgAvailability == ""){
      alert("please select dg availability value");
      return false;
    }
    else if(this.loginEmpRole == 'HO_RF_PLANNING' &&  status == "NB08" && this.selectedOpcoFrequencyList.length == 0){
      alert("please select Frequency/Band used by opco value");
      return false;
    }
    
    else if(this.loginEmpRole == 'S&M' &&  status == "NB09" && this.suggestedStandardIPFEE == ""){
      alert("please enter Standard IPFEE");
      return false;
    }
    else if(this.loginEmpRole == 'S&M' &&  status == "NB09" && this.suggestedLLR == ""){
      alert("please enter LLR");
      return false;
    }
    else if(this.loginEmpRole == 'S&M' &&  status == "NB09" && this.cityPremium == "" && 
    (this.viewOperator == "Airtel" || this.viewOperator == "RJIO")){
      alert("please select city premium");
      return false;
    }
    
    else if(this.loginEmpRole == 'S&M' &&  status == "NB09" && this.viewOperator !='BSNL' && this.suggestedPropertyTax == ""){
      alert("please select property tax");
      return false;
    }
    else if(this.loginEmpRole == 'S&M' &&  status == "NB09" && this.viewOperator !='BSNL' && this.suggestedMunicipalTax == ""){
      alert("please enter municipal tax");
      return false;
    }
    else if(this.loginEmpRole == 'S&M' &&  status == "NB09" && this.nbsProductType == ""){
      alert("please select Product Type");
      return false;
    }
    else if(this.loginEmpRole == 'S&M' &&  status == "NB09" && this.additionalBB == ""){
      alert("please select Additional Battery Bank");
      return false;
    }
    else if(this.loginEmpRole == 'S&M' &&  status == "NB09" && this.headLoad == ""){
      alert("please select Head Load");
      return false;
    }
    else if(this.loginEmpRole == 'S&M' &&  status == "NB09" && this.totalWeightOnTower == ""){
      alert("please enter Total weight on tower (Except GSM & MW) (in KG)");
      return false;
    }
    else if(this.loginEmpRole == 'DEPLOYMENT' && status == "NB16" && this.rfiDate == ""){
      alert("please enter RFI date");
      return false;
    }
    else if(this.loginEmpRole == 'DEPLOYMENT' && status == "NB05" && this.rfiDate == ""){
      alert("please enter RFI date");
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && status == "NB18" && this.rfiAcceptedDate == ""){
      $("#rfiAcceptedDate").focus();
      alert("please enter RFI accepted date");
      return false;
    }
    // ----------------
    else if(this.loginEmpRole == 'OPCO' && this.viewOperator == 'Airtel' && status == "NB18" && 
    this.airtelLocatorId == ""){
      $("#airtelLocatorId").focus();
      alert("please enter Airtel locator id");
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && this.viewOperator == 'Airtel' && status == "NB18" && 
    this.airtelSiteId == ""){
      $("#airtelSiteId").focus();
      alert("please enter Airtel site id");
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && this.viewOperator == 'VIL' && status == "NB18" && 
    this.airtelSiteId == ""){
      $("#airtelSiteId").focus();
      alert("please enter VIL site id");
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && this.viewOperator == 'RJIO' && status == "NB18" && 
    this.airtelLocatorId == ""){
      $("#airtelLocatorId").focus();
      alert("please enter RJIO SAP id");
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && this.viewOperator == 'RJIO' && status == "NB18" && 
    this.airtelSiteId == ""){
      $("#airtelSiteId").focus();
      alert("please enter RJIO site id");
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && this.viewOperator == 'BSNL' && status == "NB18" && 
    this.airtelSiteId == ""){
      $("#airtelSiteId").focus();
      alert("please enter BSNL site id");
      return false;
    }
    // ----------------
    else if(this.loginEmpRole == 'OPCO' && status == "NB19" && this.rfsDate == ""){
      alert("please enter RFS date");
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && status == "NB08" && this.rfsDate == ""){
      alert("please enter RFS date");
      return false;
    }
    // else if(this.loginEmpRole == 'Acquisition' && status == "NB04" && this.seafAttachedStr == ""){
    //   alert("please attach SEAF");
    //   return false;
    // }
    // else if(this.loginEmpRole == 'Acquisition' && status == "NB04" && this.ddrAttachedStr == ""){
    //   alert("please attach DDR");
    //   return false;
    // }
    // else if(this.loginEmpRole == 'Acquisition' && status == "NB04" && this.surveyReportAttachedStr == ""){
    //   alert("please attach survey report");
    //   return false;
    // }
    else if(this.loginEmpRole == 'Acquisition' && status == "NB04" && this.eSeafPortalUrl == ""){
      alert("please E-SEAF Portal URL");
      return false;
    }
    
    else if(this.loginEmpRole == 'HO_AQ' && status == "RNB08" && this.nfaAttachedStr == ""){
      alert("please attach NFA");
      return false;
    }

    // else if(this.loginEmpRole == 'DEPLOYMENT' && status == "NB15" && this.tviSiteId == ""){
    //   alert("please enter valid TVI site id");
    //   return false;
    // }
    else if(this.loginEmpRole == 'DEPLOYMENT' && status == "NB16" && this.rfiAttachedStr == ""){
      alert("please attach RFI document");
      return false;
    }

    else if(this.loginEmpRole == 'DEPLOYMENT' && status == "NB98" && this.ncsoAttachedStr == ""){
      alert("please attach NCSO");
      return false;
    }
    

    else if(this.loginEmpRole == 'Acquisition' && status == "NBB12" && this.agreementStr == ""){
      alert("please attach agreement");
      return false;
    }
    // else if(this.loginEmpRole == 'Acquisition' && status == "NB12" && this.agreementStr == ""){
    //   alert("please attach agreement");
    //   return false;
    // }
    else if(this.loginEmpRole == 'OPCO' && status == "NB18" && this.atAttachedStr == ""){
      alert("please attach AT document");
      return false;
    }

    else if(this.loginEmpRole == 'OPCO' && status == "NB10" && !this.validateRFAntennaDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && status == "NB10" && !this.validateMicroweveDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && status == "NB10" && this.btsType == ''){
      alert("please select BTS type");
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && status == "NB10" && !this.validateBBUDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && status == "NB10" && !this.validateRRUDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && status == "NB10" && !this.validateBTSDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && status == "NB10" && !this.validateMCBDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && status == "NB10" && !this.validateOtherActiveInfoDetails()){
      return false;
    }
    // New editable condition
    else if(this.loginEmpRole == 'HO_SnM_AT' && status == "NB22" && this.isRFEdit && !this.validateRFAntennaEditDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'HO_SnM_AT' && status == "NB22" && this.isMWEdit && !this.validateMicroweveEditDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'HO_SnM_AT' && status == "NB22" && this.isNoOfBbuEdit && !this.validateBBUEditDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'HO_SnM_AT' && status == "NB22" && this.isNoOfRruEdit && !this.validateRRUEditDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'HO_SnM_AT' && status == "NB22" && this.isBTSEdit && !this.validateBTSEditDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'HO_SnM_AT' && status == "NB22" && this.isMCBEdit && !this.validateMCBEditDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'LEGAL' && status == "NB12" && this.anyAttachedStr == ""){
      alert("please attach attachment");
      return false;
    }
    return true;
  }

  validateODSCData(status) : any{
    if(this.loginEmpRole == 'Acquisition' &&  status == "NB04" && this.suggestedSiteAddress == ""){
      alert("please enter suggest site address value");
      return false;
    }
    else if(this.loginEmpRole == 'Acquisition' &&  status == "NB04" && this.suggestedDistrict == ""){
      alert("please enter suggest district value");
      return false;
    }
    else if(this.loginEmpRole == 'Acquisition' && status == "NB04" && this.suggestedState == ""){
      alert("please enter suggest state value");
      return false;
    }
    else if(this.loginEmpRole == 'Acquisition' && status == "NB04" && this.suggestedPincode == ""){
      alert("please enter suggest pincode value");
      return false;
    }
    else if(this.loginEmpRole == 'Acquisition' && status == "NB04" && this.suggestedTownVillage == ""){
      alert("Please enter town value");
      return false;
    }
    else if(this.loginEmpRole == 'Acquisition' && status == "NB04" && this.suggestedCity == ""){
      alert("Please enter city value");
      return false;
    }
    else if(this.loginEmpRole == 'Acquisition' && status == "NB04" && this.suggestedLatitude == ""){
      alert("Please enter latitude value");
      return false;
    }
    else if(this.loginEmpRole == 'Acquisition' && status == "NB04" && this.suggestedLongitude == ""){
      alert("Please enter longitude value");
      return false;
    }
    else if(this.loginEmpRole == 'Acquisition' && status == "NB04" && this.suggestedDeviation == ""){
      alert("Please enter deviation value");
      return false;
    }
    else if(this.loginEmpRole == 'Acquisition' && status == "NB04" && this.suggestedTowerType == ""){
      alert("Please select tower type value");
      return false;
    }
    else if(this.loginEmpRole == 'Acquisition' && status == "NB04" && this.suggestedBuildingHeight == ""){
      alert("Please enter building height");
      return false;
    }
    else if(this.loginEmpRole == 'Acquisition' && status == "NB04" && this.suggestedTowerHeight == ""){
      alert("Please enter tower height");
      return false;
    }
    else if(this.loginEmpRole == 'Acquisition' && status == "NB04" && this.suggestedClutter == ""){
      alert("Please select clutter");
      return false;
    }
    else if(this.loginEmpRole == 'Acquisition' && status == "NB04" && this.suggestedLandOwnerRent == ""){
      alert("Please enter land owner rent");
      return false;
    }
    else if(this.loginEmpRole == 'Acquisition' && status == "NB04" && this.suggestedElectrificationCharges == ""){
      alert("Please enter Electrification Charges");
      return false;
    }
    else if(this.loginEmpRole == 'Acquisition' && status == "NB04" && this.suggestedMcCharges == ""){
      alert("Please enter MC Charges");
      return false;
    }
    else if(this.loginEmpRole == 'S&M' && status == "NB09" && this.tviSiteId == ""){
      alert("please enter valid TVI site id");
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && status == "NB10" && !this.validateODSCDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && status == "NB10" && (this.viewBackhaul == 'MW' || this.viewBackhaul == 'UBR') && 
    !this.validateMicroweveDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && status == "NB10" && this.viewBackhaul == 'Fiber' && this.fiberLength == ""){
      $("#fiberLengthTxt").focus();
      alert("please enter fiber length");
      return false;
    }
    else if(this.loginEmpRole == 'Acquisition' && status == "NBB12" && this.ddrAttachedStr == ""){
      alert("please attach DDR");
      return false;
    }
    else if(this.loginEmpRole == 'Acquisition' && status == "NBB12" && this.agreementStr == ""){
      alert("please attach agreement");
      return false;
    }
    // else if(this.loginEmpRole == 'Acquisition' && status == "NB12" && this.ddrAttachedStr == ""){
    //   alert("please attach DDR");
    //   return false;
    // }
    // else if(this.loginEmpRole == 'Acquisition' && status == "NB12" && this.agreementStr == ""){
    //   alert("please attach agreement");
    //   return false;
    // }
    // else if(this.loginEmpRole == 'HO_PROJECT_CIVIL' && status == "NB15" && this.boqAttachedStr == ""){
    //   alert("please attach BOQ");
    //   return false;
    // }
    else if(this.loginEmpRole == 'DEPLOYMENT' && status == "NB98" && this.ncsoAttachedStr == ""){
      alert("please attach NCSO");
      return false;
    }
    // else if(this.loginEmpRole == 'DEPLOYMENT' && status == "NB16" && this.tviSiteId == ""){
    //   alert("please enter valid TVI site id");
    //   return false;
    // }
    else if(this.loginEmpRole == 'DEPLOYMENT' && status == "NB16" && this.rfiAttachedStr == ""){
      alert("please attach RFI document");
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && status == "NB18" && this.rfiAcceptedDate == ""){
      $("#rfiAcceptedDate").focus();
      alert("please enter RFI accepted date");
      return false;
    }
    // ----------------
    else if(this.loginEmpRole == 'OPCO' && this.viewOperator == 'Airtel' && status == "NB18" && 
    this.airtelLocatorId == ""){
      $("#airtelLocatorId").focus();
      alert("please enter Airtel locator id");
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && this.viewOperator == 'Airtel' && status == "NB18" && 
    this.airtelSiteId == ""){
      $("#airtelSiteId").focus();
      alert("please enter Airtel site id");
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && this.viewOperator == 'VIL' && status == "NB18" && 
    this.airtelSiteId == ""){
      $("#airtelSiteId").focus();
      alert("please enter VIL site id");
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && this.viewOperator == 'RJIO' && status == "NB18" && 
    this.airtelLocatorId == ""){
      $("#airtelLocatorId").focus();
      alert("please enter RJIO SAP id");
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && this.viewOperator == 'RJIO' && status == "NB18" && 
    this.airtelSiteId == ""){
      $("#airtelSiteId").focus();
      alert("please enter RJIO site id");
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && this.viewOperator == 'BSNL' && status == "NB18" && 
    this.airtelSiteId == ""){
      $("#airtelSiteId").focus();
      alert("please enter BSNL site id");
      return false;
    }
    // ----------------
    else if(this.loginEmpRole == 'OPCO' && status == "NB18" && this.atAttachedStr == ""){
      alert("please attach AT document");
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && status == "NB19" && this.rfsDate == ""){
      alert("please enter RFS date");
      return false;
    }
    // new editable condition
    else if(this.loginEmpRole == 'HO_SnM_AT' && status == "NB22" && this.isODSCEdit && !this.validateODSCEditDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'HO_SnM_AT' && status == "NB22" && this.isMWEdit && !this.validateMicroweveEditDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'LEGAL' && status == "NB12" && this.anyAttachedStr == ""){
      alert("please attach attachment");
      return false;
    }
    
    return true;
  }

  validateNewTenencyData(status) : any{
    if(this.loginEmpRole == 'DEPLOYMENT' && status == "NB07" && this.rfiAttachedStr == ""){
      alert("please attach RFI document");
      return false;
    }
    else if(this.loginEmpRole == 'DEPLOYMENT' && status == "NB98" && this.ncsoAttachedStr == ""){
      alert("please attach NCSO");
      return false;
    }
    else if(this.loginEmpRole == 'DEPLOYMENT' && status == "NB07" && this.rfiDate == ""){
      alert("please enter RFI date");
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && status == "NB09" && this.rfiAcceptedDate == ""){
      $("#rfiAcceptedDate").focus();
      alert("please enter RFI accepted date");
      return false;
    }
    // ----------------
    else if(this.loginEmpRole == 'OPCO' && this.viewOperator == 'Airtel' && status == "NB09" && 
    this.airtelLocatorId == ""){
      $("#airtelLocatorId").focus();
      alert("please enter Airtel locator id");
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && this.viewOperator == 'Airtel' && status == "NB09" && 
    this.airtelSiteId == ""){
      $("#airtelSiteId").focus();
      alert("please enter Airtel site id");
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && this.viewOperator == 'VIL' && status == "NB09" && 
    this.airtelSiteId == ""){
      $("#airtelSiteId").focus();
      alert("please enter VIL site id");
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && this.viewOperator == 'RJIO' && status == "NB09" && 
    this.airtelLocatorId == ""){
      $("#airtelLocatorId").focus();
      alert("please enter RJIO SAP id");
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && this.viewOperator == 'RJIO' && status == "NB09" && 
    this.airtelSiteId == ""){
      $("#airtelSiteId").focus();
      alert("please enter RJIO site id");
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && this.viewOperator == 'BSNL' && status == "NB09" && 
    this.airtelSiteId == ""){
      $("#airtelSiteId").focus();
      alert("please enter BSNL site id");
      return false;
    }
    // ----------------
    else if(this.loginEmpRole == 'OPCO' && status == "NB10" && this.rfsDate == ""){
      alert("please enter RFS date");
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && status == "NB09" && this.atAttachedStr == ""){
      alert("please attach AT document");
      return false;
    }
    // New editable condition
    else if(this.loginEmpRole == 'HO_SnM_AT' && status == "NB13" && this.isRFEdit && !this.validateRFAntennaEditDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'HO_SnM_AT' && status == "NB13" && this.isMWEdit && !this.validateMicroweveEditDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'HO_SnM_AT' && status == "NB13" && this.isNoOfBbuEdit && !this.validateBBUEditDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'HO_SnM_AT' && status == "NB13" && this.isNoOfRruEdit && !this.validateRRUEditDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'HO_SnM_AT' && status == "NB13" && this.isBTSEdit && !this.validateBTSEditDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'HO_SnM_AT' && status == "NB13" && this.isMCBEdit && !this.validateMCBEditDetails()){
      return false;
    }
    return true;
  }

  validateSiteUpgradeData(status) : any{
    if(this.loginEmpRole == 'DEPLOYMENT' && status == "NB05" && this.rfiAttachedStr == ""){
      alert("please attach RFI document");
      return false;
    }
    else if(this.loginEmpRole == 'DEPLOYMENT' && status == "NB98" && this.ncsoAttachedStr == ""){
      alert("please attach NCSO");
      return false;
    }
    else if(this.loginEmpRole == 'DEPLOYMENT' && status == "NB05" && this.rfiDate == ""){
      alert("please enter RFI date");
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && status == "NB07" && this.rfiAcceptedDate == ""){
      $("#rfiAcceptedDate").focus();
      alert("please enter RFI accepted date");
      return false;
    }
    // ----------------
    else if(this.loginEmpRole == 'OPCO' && this.viewOperator == 'Airtel' && status == "NB07" && 
    !this.is_TCL_Redwin_Tab && this.airtelLocatorId == ""){
      $("#airtelLocatorId").focus();
      alert("please enter Airtel locator id");
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && this.viewOperator == 'Airtel' && status == "NB07" && 
    this.airtelSiteId == ""){
      $("#airtelSiteId").focus();
      if(!this.is_TCL_Redwin_Tab)
        alert("please enter Airtel site id");
      else
        alert("please enter TCL Site id");
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && this.viewOperator == 'VIL' && status == "NB07" && 
    this.airtelSiteId == ""){
      $("#airtelSiteId").focus();
      if(!this.is_TCL_Redwin_Tab)
        alert("please enter VIL site id");
      else
        alert("Please enter TCL Site Id");
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && this.viewOperator == 'RJIO' && status == "NB07" && 
    !this.is_TCL_Redwin_Tab && this.airtelLocatorId == ""){
      $("#airtelLocatorId").focus();
      alert("please enter RJIO SAP id");
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && this.viewOperator == 'RJIO' && status == "NB07" && 
    this.airtelSiteId == ""){
      $("#airtelSiteId").focus();
      if(!this.is_TCL_Redwin_Tab)
        alert("please enter RJIO site id");
      else
        alert("please enter TCL site id")
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && this.viewOperator == 'BSNL' && status == "NB07" && 
    this.airtelSiteId == ""){
      $("#airtelSiteId").focus();
      if(!this.is_TCL_Redwin_Tab)
        alert("please enter BSNL site id");
      else  
        alert("please enter TCL Site id");
      return false;
    }
    // ----------------
    else if(this.loginEmpRole == 'OPCO' && status == "NB07" && this.atAttachedStr == ""){
      alert("please attach AT document");
      return false;
    }
    else if(this.loginEmpRole == 'OPCO' && status == "NB08" && this.rfsDate == ""){
      alert("please enter RFS date");
      return false;
    }

    // New editable condition
    else if(this.loginEmpRole == 'HO_SnM_AT' && status == "NB11" && this.isRFEdit && !this.validateRFAntennaEditDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'HO_SnM_AT' && status == "NB11" && this.isRFAdd_Edit && !this.validateRFAntennaAddDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'HO_SnM_AT' && status == "NB11" && this.isRFDelete_Edit && !this.validateRFAntennaDeleteDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'HO_SnM_AT' && status == "NB11" && this.isMWEdit && !this.validateMicroweveEditDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'HO_SnM_AT' && status == "NB11" && this.isMWAdd_Edit && !this.validateMicroweveAddDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'HO_SnM_AT' && status == "NB11" && this.isMWDelete_Edit && !this.validateMicroweveDeleteDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'HO_SnM_AT' && status == "NB11" && this.isNoOfBbuEdit && !this.validateBBUEditDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'HO_SnM_AT' && status == "NB11" && this.isBBUAdd_Edit && !this.validateBBUAddDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'HO_SnM_AT' && status == "NB11" && this.isBBUDelete_Edit && !this.validateBBUDeleteDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'HO_SnM_AT' && status == "NB11" && this.isNoOfRruEdit && !this.validateRRUEditDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'HO_SnM_AT' && status == "NB11" && this.isRRUAdd_Edit && !this.validateRRUAddDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'HO_SnM_AT' && status == "NB11" && this.isRRUDelete_Edit && !this.validateRRUDeleteDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'HO_SnM_AT' && status == "NB11" && this.isBTSEdit && !this.validateBTSEditDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'HO_SnM_AT' && status == "NB11" && this.isMCBEdit && !this.validateMCBEditDetails()){
      return false;
    }
    else if(this.loginEmpRole == 'HO_SnM_AT' && status == "NB11" && this.isIp55Edit && !this.validateIP55Details()){
      return false;
    }
    else if(this.loginEmpRole == 'HO_SnM_AT' && status == "NB11" && this.isMimoEdit && !this.validateMassiveMIMOAntennaDetails()){
      return false;
    }
    
    return true;
  }

  validateTclEditDeta() : any{
    if(this.noOfUBR_Antenna == ''){
      alert("please select No of UBR");
      return false;
    }
    else if(this.weightOfAntenna == ''){
      alert("please select Weight of UBR");
      return false;
    }
    else if(this.uSpace == ''){
      alert("please select U Space");
      return false;
    }
    else if(this.uSpace_ethernet == ''){
      alert("please select `E1 to Ethernet converting unit` ");
      return false;
    }
    else if(this.powerRequired == ''){
      alert("please select `Power required at -48 V (watt)`");
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

  eSeafPortalUrl = "";
  seafAttachedStr : any = "";
  ncsoAttachedStr : any = "";
  googleSnapshotStr : any = "";
  nfaAttachedStr : any = "";
  boqAttachedStr : any = "";
  anyAttachedStr : any = "";
  agreementStr : any = "";
  rfiAttachedStr : any = "";
  atAttachedStr : any = "";
  ddrAttachedStr : any = "";
  surveyReportAttachedStr : any = "";
  changeSrStatus(status){
    if(this.is_CreateNBS_Tab && !this.validateNbsData(status)){
      return ;
    }
    else if((this.is_ODSC_Anchor_Tab || this.is_HPSC_Tab || this.is_HPSC_Sharing_Tab || this.is_Smart_Split_Tab) && !this.validateODSCData(status)){
      return ;
    }
    else if((this.is_New_Tenency_Tab || this.is_TCL_Redwin_Tab) && !this.validateNewTenencyData(status)){
      return ;
    }
    else if((this.is_Site_Upgrade_Tab || this.is_IWan_UBR_Tab || this.is_MCU_Tab || this.is_HEX_OLT_Tab || this.is_TCU_Tab) 
    && !this.validateSiteUpgradeData(status)){
      return ;
    }
    else if(this.is_HPSC_Tab && this.loginEmpRole == "S&M" && status == "NB17" && !this.validateNoOfPole()){
      return ;
    }
    else if(this.is_HPSC_Tab && this.loginEmpRole == "HO_SnM_AT" && status == "NB22" && !this.validateNoOfPole()){
      return ;
    }
    else if(this.is_HPSC_Tab && this.loginEmpRole == "S&M" && status == "NB17" && !this.validateNoOfHpscAntenna()){
      return ;
    }
    else if(this.is_HPSC_Tab && this.loginEmpRole == "HO_SnM_AT" && status == "NB22" && !this.validateNoOfHpscAntenna()){
      return ;
    }
    else if(this.is_HPSC_Tab && this.loginEmpRole == "S&M" && status == "NB17" && !this.validateBBUDetails()){
      return ;
    }
    else if(this.is_HPSC_Tab && this.loginEmpRole == "HO_SnM_AT" && status == "NB22" && !this.validateBBUDetails()){
      return ;
    }
    else if(this.is_HPSC_Tab && this.loginEmpRole == "S&M" && status == "NB17" && !this.validateRRUDetails()){
      return ;
    }
    else if(this.is_HPSC_Tab && this.loginEmpRole == "HO_SnM_AT" && status == "NB22" && !this.validateRRUDetails()){
      return ;
    }
    else if(this.is_HPSC_Tab && this.loginEmpRole == "S&M" && status == "NB17" && this.powerRatingOfEquipment == ""){
      alert("please enter Power rating of equipment(In Watt) value");
      return false;
    }
    else if(this.is_HPSC_Tab && this.loginEmpRole == "HO_SnM_AT" && status == "NB22" && this.powerRatingOfEquipment == ""){
      alert("please enter Power rating of equipment(In Watt) value");
      return false;
    }
    else if(this.is_HPSC_Tab && this.loginEmpRole == "S&M" && status == "NB17" && this.noOfU == ""){
      alert("please enter No of U value ");
      return false;
    }
    else if(this.is_HPSC_Tab && this.loginEmpRole == "HO_SnM_AT" && status == "NB22" && this.noOfU == ""){
      alert("please enter No of U value ");
      return false;
    }
    else if(this.is_HPSC_Tab && this.loginEmpRole == "S&M" && status == "NB17" && this.typeOfSite == ""){
      alert("please enter Type of sites value");
      return false;
    }
    else if(this.is_HPSC_Tab && this.loginEmpRole == "HO_SnM_AT" && status == "NB22" && this.typeOfSite == ""){
      alert("please enter Type of sites value");
      return false;
    }
    else if(this.is_TCL_Redwin_Tab && status == "NB13" && !this.validateTclEditDeta()){
      return false;
    }
    else if(this.loginEmpRole == "HO_SnM_AT" && (status == "NB11" || status == "NB13" || status == "NB22")){
      if(this.rfiDateEditable == ""){
        alert("please select editable RFI date");
        $("#rfiEdit").focus();
        return ;
      }
      else if(this.rfiAcceptedDateEditable == ""){
        alert("please select editable RFI Accepted date");
        $("#rfiAcceptedEdit").focus();
        return ;
      }
      else if(this.rfsDateEditable == ""){
        alert("please select editable RFS date");
        $("#rfsDateEdit").focus();
        return ;
      }
    }
    
    if(this.is_CreateNBS_Tab && status == "NB10") this.addInTotalRatedPower();
    else if((this.is_CreateNBS_Tab && status == "NB22") || (this.is_New_Tenency_Tab && status == "NB13") || 
    (this.is_Site_Upgrade_Tab && status == "NB11")){
      this.addInTotalRatedPowerEdit();
    } 
    else if(this.is_IWan_UBR_Tab && status == "NB11") this.addInTotalRatedPowerIwan();
    else if(this.is_MCU_Tab && status == "NB11") this.addInTotalRatedPowerMcu();
    else if(this.is_FibreTermination_Tab && status == "NB11") this.addInTotalRatedPowerFt();
    else if(this.is_TCL_Redwin_Tab && status == "NB13") this.addInTotalRatedPowerTcl();

    if(this.remark == ""){
      alert("please enter remark");
      return ;
    }

    this.suggestedLatitude = this.suggestedLatitude == "" ? '0.0' : this.suggestedLatitude;
    this.suggestedLongitude = this.suggestedLongitude == "" ? '0.0' : this.suggestedLongitude;
    this.suggestedPincode = this.suggestedPincode == "" ? '0' : this.suggestedPincode;
    this.suggestedStandardIPFEE = this.suggestedStandardIPFEE == "" ? '0' : this.suggestedStandardIPFEE;
    this.suggestedLLR = this.suggestedLLR == "" ? '0' : this.suggestedLLR;
    this.suggestedCityPremium = this.suggestedCityPremium == "" ? '0' : this.suggestedCityPremium;
    this.suggestedLoading = this.suggestedLoading == "" ? '0' : this.suggestedLoading;
    this.suggestedEbAvailablilityDistance = this.suggestedEbAvailablilityDistance == "" ? '0.0' : this.suggestedEbAvailablilityDistance;
    this.suggestedTowerHeight = this.suggestedTowerHeight == "" ? '0.0' : this.suggestedTowerHeight;
    this.noOfRFAntenna = this.noOfRFAntenna == "" ? "0" : this.noOfRFAntenna;
    this.noOfBBU = this.noOfBBU == "" ? "0" : this.noOfBBU;
    this.noOfRRU = this.noOfRRU == "" ? "0" : this.noOfRRU;
    this.noOfBTS = this.noOfBTS == "" ? "0" : this.noOfBTS;
    this.noOfMCB = this.noOfMCB == "" ? "0" : this.noOfMCB;
    this.noOfODSC = this.noOfODSC == "" ? "0" : this.noOfODSC;
    this.noOfMicrowave = this.noOfMicrowave == "" ? "0" : this.noOfMicrowave;
    this.noOfUSpaceRequired = this.noOfUSpaceRequired == "" ? "0" : this.noOfUSpaceRequired;
    this.totalRatedPower = this.totalRatedPower == "" ? "0" : this.totalRatedPower;
    this.additionalLoad = this.additionalLoad == "" ? "0" : this.additionalLoad;
    this.windSpeed = this.windSpeed == "" ? "0" : this.windSpeed;
    this.loadOfU = this.loadOfU == "" ? "0.0" : this.loadOfU;
    this.suggestedDeviation = this.suggestedDeviation == "" ? "0.0" : this.suggestedDeviation;
    this.suggestedBuildingHeight = this.suggestedBuildingHeight == "" ? "0.0" : this.suggestedBuildingHeight;
    this.fiberLength = this.fiberLength == "" ? "0.0" : this.fiberLength;
    this.suggestedElectrificationCharges = this.suggestedElectrificationCharges == "" ? "0" : this.suggestedElectrificationCharges;
    this.suggestedMcCharges = this.suggestedMcCharges == "" ? "0" : this.suggestedMcCharges;
    this.noOfPole = this.noOfPole == "" ? "0" : this.noOfPole;
    this.noOfHPSCAntenna = this.noOfHPSCAntenna == "" ? "0" : this.noOfHPSCAntenna;
    this.powerRatingOfEquipment = this.powerRatingOfEquipment == "" ? "0" : this.powerRatingOfEquipment;
    this.noOfU = this.noOfU == "" ? "0" : this.noOfU;
    this.totalWeightOnTower = this.totalWeightOnTower == "" ? "0" : this.totalWeightOnTower;
    this.uSpace_ethernet = this.uSpace_ethernet == "" ? null : this.uSpace_ethernet;
    this.powerConsumption = this.powerConsumption == "" ? null : this.powerConsumption;
    this.floorLength = this.floorLength == "" ? null : this.floorLength;
    this.mcbRequiredInAmp = this.mcbRequiredInAmp == "" ? null : this.mcbRequiredInAmp;
    
    this.noOfMassiveMIMOAntenna = this.noOfMassiveMIMOAntenna == "" ? null : this.noOfMassiveMIMOAntenna;
    this.noOfIP55 = this.noOfIP55 == "" ? null : this.noOfIP55;
    this.noOfRRU_Delete = this.noOfRRU_Delete == "" ? null : this.noOfRRU_Delete;
    this.noOfRRU_Add = this.noOfRRU_Add == "" ? null : this.noOfRRU_Add;
    this.noOfBBU_Delete = this.noOfBBU_Delete == "" ? null : this.noOfBBU_Delete;
    this.noOfBBU_Add = this.noOfBBU_Add == "" ? null : this.noOfBBU_Add;
    this.noOfMicrowave_Delete = this.noOfMicrowave_Delete == "" ? null : this.noOfMicrowave_Delete;
    this.noOfMicrowave_Add = this.noOfMicrowave_Add == "" ? null : this.noOfMicrowave_Add;
    this.noOfRFAntenna_Delete = this.noOfRFAntenna_Delete == "" ? null : this.noOfRFAntenna_Delete;
    this.noOfRFAntenna_Add = this.noOfRFAntenna_Add == "" ? null : this.noOfRFAntenna_Add;

    this.noOfUBR_Antenna = this.noOfUBR_Antenna == "" ? null : this.noOfUBR_Antenna;
    this.weightOfAntenna = this.weightOfAntenna == "" ? null : this.weightOfAntenna;
    this.uSpace = this.uSpace == "" ? null : this.uSpace;
    this.powerRequired = this.powerRequired == "" ? null : this.powerRequired;
    let sendJson = {
      loginEmpId : this.loginEmpId,
      loginEmpRole : this.loginEmpRole,
      srNumber : this.viewSrNumber,
      spNumber : this.viewSpNumber,
      soNumber : this.viewSoNumber,
      circleName : this.viewCircleName,
      operator : this.viewOperator,
      currentTab : this.currentTab,
      tviSiteId : this.tviSiteId,
      status : status,
      remark : this.remark,
      airtelSiteId : this.airtelSiteId,
      airtelLocatorId : this.airtelLocatorId,
      suggestedLatitude : this.suggestedLatitude,
      suggestedLongitude : this.suggestedLongitude,
      suggestedSiteAddress : this.suggestedSiteAddress,
      suggestedCity : this.suggestedCity,
      suggestedTownVillage : this.suggestedTownVillage,
      suggestedDistrict : this.suggestedDistrict,
      suggestedState : this.suggestedState,
      suggestedPincode : this.suggestedPincode,
      suggestedClutter : this.suggestedClutter,
      suggestedSiteType : this.suggestedSiteType,
      suggestedEbAvailablilityDistance : this.suggestedEbAvailablilityDistance,
      suggestedTowerHeight : this.suggestedTowerHeight,
      suggestedDgAvailability : this.suggestedDgAvailability,
      suggestedStandardIPFEE : this.suggestedStandardIPFEE,
      suggestedLLR : this.suggestedLLR,
      airtelCityPremiumPercentage : this.airtelCityPremiumPercentage,
      suggestedCityPremium : this.suggestedCityPremium,
      cityPremiumPercentage : this.cityPremiumPercentage,
      cityClass : this.cityClass,
      suggestedLoading : this.suggestedLoading,
      suggestedPropertyTax : this.suggestedPropertyTax,
      suggestedMunicipalTax : this.suggestedMunicipalTax,
      rfiDate : this.rfiDate,
      rfiAcceptedDate : this.rfiAcceptedDate,
      rfsDate : this.rfsDate,
      seafAttachedStr : this.seafAttachedStr,
      isSeafLink : this.isSeafLink,
      ddrAttachedStr : this.ddrAttachedStr,
      isDdrLink : this.isDdrLink,
      surveyReportAttachedStr : this.surveyReportAttachedStr,
      isSurveyReportLink : this.isSurveyReportLink,
      eSeafPortalUrl : this.eSeafPortalUrl,
      ncsoAttachedStr : this.ncsoAttachedStr,
      isNcsoLink : this.isNcsoLink,
      googleSnapshotStr : this.googleSnapshotStr,
      isGoogleSnapshotLink : this.isGoogleSnapshotLink,
      nfaAttachedStr : this.nfaAttachedStr,
      boqAttachedStr : this.boqAttachedStr,
      isBoqLink : this.isBoqLink,
      anyAttachedStr : this.anyAttachedStr,
      isAnyLink : this.isAnyLink,
      agreementStr : this.agreementStr,
      isAggrementLink : this.isAggrementLink,
      rfiAttachedStr : this.rfiAttachedStr,
      isRfiDocLink : this.isRfiDocLink,
      atAttachedStr : this.atAttachedStr,
      isAtDocLink : this.isAtDocLink,
      btsType : this.btsType,
      noOfRFAntenna : this.noOfRFAntenna,
      rfAntennaList : this.rfAntennaList,
      noOfMicrowave : this.noOfMicrowave,
      microwaveList : this.microwaveList,
      noOfBBU : this.noOfBBU,
      bbuList : this.bbuList,
      noOfRRU : this.noOfRRU,
      rruList : this.rruList,
      noOfBTS : this.noOfBTS,
      btsList : this.btsList,
      noOfMCB : this.noOfMCB,
      mcbList : this.mcbList,
      isODSCEdit : this.isODSCEdit,
      noOfODSC : this.noOfODSC,
      odscList : this.odscList,
      fiberLength : this.fiberLength,
      totalRatedPower : this.totalRatedPower,
      additionalLoad : this.additionalLoad,
      mwRack : this.mwRack,
      noOfUSpaceRequired : this.noOfUSpaceRequired,
      loadOfU : this.loadOfU,
      fiberTermination : this.fiberTermination,
      frequencyUserByOpco : this.frequencyUserByOpco,
      windSpeed : this.windSpeed,
      suggestedDeviation : this.suggestedDeviation,
      suggestedTowerType : this.suggestedTowerType,
      suggestedBuildingHeight : this.suggestedBuildingHeight,
      suggestedLandOwnerRent : this.suggestedLandOwnerRent,
      suggestedElectrificationCharges : this.suggestedElectrificationCharges,
      suggestedMcCharges : this.suggestedMcCharges,
      sharingPotential : this.sharingPotential,
      noOfPole : this.noOfPole,
      noOfPoleList : this.noOfPoleList,
      noOfHPSCAntenna : this.noOfHPSCAntenna,
      noOfHPSCAntennaList : this.noOfHPSCAntennaList,
      powerRatingOfEquipment : this.powerRatingOfEquipment,
      uSpace : this.noOfU,
      siteType : this.typeOfSite,
      isNoOfPolesEdit : this.isNoOfPolesEdit,
      isNoOfHpscAntennaEdit : this.isNoOfHpscAntennaEdit,
      isNoOfBbuEdit : this.isNoOfBbuEdit,
      isNoOfRruEdit : this.isNoOfRruEdit,
      nbsProductType : this.nbsProductType,
      additionalBB : this.additionalBB,
      headLoad : this.headLoad,
      ebConnection : this.ebConnection,
      totalWeightOnTower : this.totalWeightOnTower,
      isRFEdit : this.isRFEdit,
      isMWEdit : this.isMWEdit,
      isBTSEdit : this.isBTSEdit,
      isMCBEdit : this.isMCBEdit,
      isMimoEdit : this.isMimoEdit,
      noOfMassiveMIMOAntenna : this.noOfMassiveMIMOAntenna,
      massiveMIMOAntennaList : this.massiveMIMOAntennaList,
      isIp55Edit : this.isIp55Edit,
      noOfIP55 : this.noOfIP55,
      ip55List : this.ip55List,
      isRRUDelete_Edit : this.isRRUDelete_Edit,
      noOfRRU_Delete : this.noOfRRU_Delete,
      rruDeleteList : this.rruDeleteList,
      isRRUAdd_Edit : this.isRRUAdd_Edit,
      noOfRRU_Add : this.noOfRRU_Add,
      rruAddList : this.rruAddList,
      isBBUDelete_Edit : this.isBBUDelete_Edit,
      noOfBBU_Delete : this.noOfBBU_Delete,
      bbuDeleteList : this.bbuDeleteList,
      isBBUAdd_Edit : this.isBBUAdd_Edit,
      noOfBBU_Add : this.noOfBBU_Add,
      bbuAddList : this.bbuAddList,
      isMWDelete_Edit : this.isMWDelete_Edit,
      noOfMicrowave_Delete : this.noOfMicrowave_Delete,
      microwaveDeleteList : this.microwaveDeleteList,
      isMWAdd_Edit : this.isMWAdd_Edit,
      noOfMicrowave_Add : this.noOfMicrowave_Add,
      microwaveAddList : this.microwaveAddList,
      noOfUBR_Antenna : this.noOfUBR_Antenna,
      weightOfAntenna : this.weightOfAntenna,
      typeOfAntenna : this.typeOfAntenna,
      uSpace_ethernet : this.uSpace_ethernet,
      uSpaceIwan : this.uSpace,
      uSpaceMcu : this.uSpace,
      uSpaceTcl : this.uSpace,
      powerRequired : this.powerRequired,
      powerConsumption : this.powerConsumption,
      floorLength : this.floorLength,
      fiberEntry : this.fiberEntry,
      mcbRequiredInAmp : this.mcbRequiredInAmp,
      rfiDateEditable : this.rfiDateEditable,
      rfiAcceptedDateEditable : this.rfiAcceptedDateEditable,
      rfsDateEditable : this.rfsDateEditable,
      suggestedWindSpeed : this.suggestedWindSpeed,
      suggestedLockTerm : this.suggestedLockTerm
    }
    // console.log(JSON.stringify(sendJson));
    this.spinner.show();
    this.nbsStatusService.changeSrStatus(sendJson)
    .subscribe((response)=>{
      if(response.responseCode == Constant.SUCCESSFUL_RESPONSE){
        this.toastr.success('Successfully done', 'Alert');
        this.remark = "";
        jQuery("#viewDetailsModal").modal("hide");
        this.getNbsDetails(this.pageNumber);
      }
      else if(response.responseCode == Constant.ALREADY_EXIST_CODE){
        this.toastr.warning(response.responseDesc,"Alert !");
      }
      else {
        this.toastr.error('Something went wrong', 'Alert');
      }
      this.spinner.hide();
    },
    (error)=>{
      this.toastr.warning(Constant.returnServerErrorMessage("changeSrStatus"),"Alert !");
      this.spinner.hide();
    });
  }

  findSuggestedLocation(lati,longi){
    this.suggestedLatitude = lati;
    this.suggestedLongitude = longi;
  }

  bulkAction : any = "";
  public cancelCheckedList(sr,action){
    var checkCheckedList = [];
    jQuery.each(jQuery("input[name='TVI_SITE']:checked"), function(){
      let sendJson = {
        "srNumber" : jQuery(this).val().split("-")[0], // SR number
        "circleName" : jQuery(this).val().split("-")[1],
        "operator" : jQuery(this).val().split("-")[2],
        "tabName" : jQuery(this).val().split("-")[3],
      }
      checkCheckedList.push(sendJson);
    });

    if(checkCheckedList.length != 0){
      if(sr == 1){
        this.bulkRemark = "";
        this.bulkSharingPotential = "";
        this.bulkAction = action;
        jQuery("#bulkStatusModal").modal({
          backdrop : 'static',
          keyboard : false
        });
      }
      else{
        if(this.bulkAction == 'NB03' && this.bulkSharingPotential == "" && (this.filterProductType == '' || this.filterProductType == "CreateNBS")){
          alert("please select sharing potential value");
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
        this.nbsStatusService.changeBulkSrStatus(jsonData)
        .subscribe((response)=>{
          if(response.responseCode == Constant.SUCCESSFUL_RESPONSE){
            this.toastr.success('Successfully done', 'Alert');
            this.bulkRemark = "";
            this.bulkSharingPotential = "";
            jQuery("#bulkStatusModal").modal("hide");
            this.spinner.hide();
            this.getNbsDetails(this.pageNumber);
          }
          else {
            this.toastr.error('Something went wrong', 'Alert');
            this.spinner.hide();
          }
        },
        (error)=>{
          this.toastr.warning(Constant.returnServerErrorMessage("changeSrStatus"),"Alert !");
          this.spinner.hide();
        });
      } 
    }
    else{
      alert("check atleast one record.")
    }

  }

  validateDecimalDataValue(fieldValue : any) : any{
    let splitValue = fieldValue.split(".");
    if(splitValue.length > 2){
      return true;
    }
    return false;
  }
  
  validateOtherActiveInfoDetails() : any{
    if(this.additionalLoad == ''){
      alert("please enter additional load value");
      return false;
    }
    
    else if(this.mwRack == ''){
      alert("please enter mw rack value");
      return false;
    }
    else if(this.noOfUSpaceRequired == ''){
      alert("please select no of space required value ");
      return false;
    }
    else if(this.noOfUSpaceRequired != '0' && this.loadOfU == ""){
      alert("please enter Load of U value ");
      return false;
    }
    else if(this.fiberTermination == ''){
      alert("please select fiber termination value");
      return false;
    }
    else {
      return true;
    }
  }

  rfAntennaList = [];
  validateRFAntennaDetails() : any{
    this.rfAntennaList = [];
    if(this.noOfRFAntenna === ''){
      alert("please select RF antenna value");
      return false;
    }
    else {
      for(let i=1;i<=this.noOfRFAntenna;i++){
        if($("#rfSize"+i).val() == ''){
          alert("please enter RF height " +i+ " value");
          return false;
        }
        else if($("#rfWeight"+i).val() == ''){
          alert("please enter RF weight " +i+ " value");
          return false;
        }
        else if(this.validateDecimalDataValue($("#rfWeight"+i).val())){
          alert("please verify RF weight " +i+ " value, you enter more than one decimal");
          return false;
        }
        else if($("#rfAzimuth"+i).val() == ''){
          alert("please enter RF azimuth " +i+ " value");
          return false;
        }
        else if(this.validateDecimalDataValue($("#rfAzimuth"+i).val())){
          alert("please verify RF azimuth " +i+ " value, you enter more than one decimal");
          return false;
        }
        else if($("#rfMake"+i).val() == ''){
          alert("please enter RF Make " +i+ " value");
          return false;
        }
        else if($("#rfModel"+i).val() == ''){
          alert("please enter RF model " +i+ " value");
          return false;
        }
        else if($("#rfGain"+i).val() == ''){
          alert("please enter RF gain " +i+ " value");
          return false;
        }
        else if(this.validateDecimalDataValue($("#rfGain"+i).val())){
          alert("please verify RF gain " +i+ " value, you enter more than one decimal");
          return false;
        }
        else if($("#rfBand"+i).val() == ''){
          alert("please select RF band " +i+ " value");
          return false;
        }
        else{
          let json = {
            id : i,
            rfSize : $("#rfSize"+i).val(),
            rfWeight : $("#rfWeight"+i).val(),
            rfAzimuth : $("#rfAzimuth"+i).val(),
            rfMake : $("#rfMake"+i).val(),
            rfModel : $("#rfModel"+i).val(),
            rfGain : $("#rfGain"+i).val(),
            rfBand : $("#rfBand"+i).val()
          }
          this.rfAntennaList.push(json);

        }
      }
      
      return true;
    }
  }

  validateRFAntennaEditDetails() : any{
    this.rfAntennaList = [];
    if(this.noOfRFAntenna === ''){
      alert("please select RF antenna value");
      return false;
    }
    else {
      for(let i=1;i<=this.noOfRFAntenna;i++){
        if($("#rfSizeEdit"+i).val() == ''){
          alert("please enter RF height " +i+ " value");
          return false;
        }
        else if($("#rfWeightEdit"+i).val() == ''){
          alert("please enter RF weight " +i+ " value");
          return false;
        }
        else if(this.validateDecimalDataValue($("#rfWeightEdit"+i).val())){
          alert("please verify RF weight " +i+ " value, you enter more than one decimal");
          return false;
        }
        else if($("#rfAzimuthEdit"+i).val() == ''){
          alert("please enter RF azimuth " +i+ " value");
          return false;
        }
        else if(this.validateDecimalDataValue($("#rfAzimuthEdit"+i).val())){
          alert("please verify RF azimuth " +i+ " value, you enter more than one decimal");
          return false;
        }
        else if($("#rfMakeEdit"+i).val() == ''){
          alert("please enter RF Make " +i+ " value");
          return false;
        }
        else if($("#rfModelEdit"+i).val() == ''){
          alert("please enter RF model " +i+ " value");
          return false;
        }
        
        else if($("#rfGainEdit"+i).val() == ''){
          alert("please enter RF gain " +i+ " value");
          return false;
        }
        else if(this.validateDecimalDataValue($("#rfGainEdit"+i).val())){
          alert("please verify RF gain " +i+ " value, you enter more than one decimal");
          return false;
        }
        else if($("#rfBandEdit"+i).val() == ''){
          alert("please select RF band " +i+ " value");
          return false;
        }
        else{
          let json = {
            id : i,
            rfSize : $("#rfSizeEdit"+i).val(),
            rfWeight : $("#rfWeightEdit"+i).val(),
            rfAzimuth : $("#rfAzimuthEdit"+i).val(),
            rfMake : $("#rfMakeEdit"+i).val(),
            rfModel : $("#rfModelEdit"+i).val(),
            rfGain : $("#rfGainEdit"+i).val(),
            rfBand : $("#rfBandEdit"+i).val()
          }
          this.rfAntennaList.push(json);
        }
      }
      return true;
    }
  }

  rfAntennaDeleteList = [];
  validateRFAntennaDeleteDetails() : any{
    this.rfAntennaDeleteList = [];
    if(this.noOfRFAntenna_Delete == ''){
      alert("please select RF Antenna Delete value");
      return false;
    }
    else {
      for(let i=1;i<=this.noOfRFAntenna_Delete;i++){
        if($("#rfSizeDelete"+i).val() == ''){
          alert("please enter RF height " +i+ " delete value");
          return false;
        }
        else if($("#rfWeightDelete"+i).val() == ''){
          alert("please enter RF weight " +i+ " delete value");
          return false;
        }
        else if(this.validateDecimalDataValue($("#rfWeightDelete"+i).val())){
          alert("please verify RF weight " +i+ " delete value, you enter more than one decimal");
          return false;
        }
        else if($("#rfAzimuthDelete"+i).val() == ''){
          alert("please enter RF azimuth " +i+ " delete value");
          return false;
        }
        else if(this.validateDecimalDataValue($("#rfAzimuthDelete"+i).val())){
          alert("please verify RF azimuth " +i+ " delete value, you enter more than one decimal");
          return false;
        }
        else if($("#rfMakeDelete"+i).val() == ''){
          alert("please enter RF Make " +i+ " delete value");
          return false;
        }
        else if($("#rfModelDelete"+i).val() == ''){
          alert("please enter RF model " +i+ " delete value");
          return false;
        }
        else if($("#rfGainDelete"+i).val() == ''){
          alert("please enter RF gain " +i+ " delete value");
          return false;
        }
        else if(this.validateDecimalDataValue($("#rfGainDelete"+i).val())){
          alert("please verify RF gain " +i+ " delete value, you enter more than one decimal");
          return false;
        }
        else if($("#rfBandDelete"+i).val() == ''){
          alert("please select RF band " +i+ " delete value");
          return false;
        }
        else{
          let json = {
            id : i,
            rfSize : $("#rfSizeDelete"+i).val(),
            rfWeight : $("#rfWeightDelete"+i).val(),
            rfAzimuth : $("#rfAzimuthDelete"+i).val(),
            rfMake : $("#rfMakeDelete"+i).val(),
            rfModel : $("#rfModelDelete"+i).val(),
            rfGain : $("#rfGainDelete"+i).val(),
            rfBand : $("#rfBandDelete"+i).val()
          }
          this.rfAntennaDeleteList.push(json);
        }
      }
      return true;
    }
  }
  

  rfAntennaAddList = [];
  validateRFAntennaAddDetails() : any{
    this.rfAntennaAddList = [];
    if(this.noOfRFAntenna_Add == ''){
      alert("please select RF Antenna Add value");
      return false;
    }
    else {
      for(let i=1;i<=this.noOfRFAntenna_Add;i++){
        if($("#rfSizeAdd"+i).val() == ''){
          alert("please enter RF height " +i+ " add value");
          return false;
        }
        else if($("#rfWeightAdd"+i).val() == ''){
          alert("please enter RF weight " +i+ " add value");
          return false;
        }
        else if(this.validateDecimalDataValue($("#rfWeightAdd"+i).val())){
          alert("please verify RF weight " +i+ " add value, you enter more than one decimal");
          return false;
        }
        else if($("#rfAzimuthAdd"+i).val() == ''){
          alert("please enter RF azimuth " +i+ " add value");
          return false;
        }
        else if(this.validateDecimalDataValue($("#rfAzimuthAdd"+i).val())){
          alert("please verify RF azimuth " +i+ " add value, you enter more than one decimal");
          return false;
        }
        else if($("#rfMakeAdd"+i).val() == ''){
          alert("please enter RF Make " +i+ " add value");
          return false;
        }
        else if($("#rfModelAdd"+i).val() == ''){
          alert("please enter RF model " +i+ " add value");
          return false;
        }
        else if($("#rfGainAdd"+i).val() == ''){
          alert("please enter RF gain " +i+ " add value");
          return false;
        }
        else if(this.validateDecimalDataValue($("#rfGainAdd"+i).val())){
          alert("please verify RF gain " +i+ " add value, you enter more than one decimal");
          return false;
        }
        else if($("#rfBandAdd"+i).val() == ''){
          alert("please select RF band " +i+ " add value");
          return false;
        }
        else{
          let json = {
            id : i,
            rfSize : $("#rfSizeAdd"+i).val(),
            rfWeight : $("#rfWeightAdd"+i).val(),
            rfAzimuth : $("#rfAzimuthAdd"+i).val(),
            rfMake : $("#rfMakeAdd"+i).val(),
            rfModel : $("#rfModelAdd"+i).val(),
            rfGain : $("#rfGainAdd"+i).val(),
            rfBand : $("#rfBandAdd"+i).val()
          }
          this.rfAntennaAddList.push(json);
        }
      }
      return true;
    }
  }

  microwaveList = [];
  validateMicroweveDetails() : any{
    this.microwaveList = [];
    if(this.noOfMicrowave === ""){
      alert("Please no of microwave");
      return false;
    }
    else{
      for(let i=1;i<=this.noOfMicrowave;i++){
        if($("#microwaveMake"+i).val() == ''){
          alert("please select microwave make " +i+ " value");
          return false;
        }
        else if($("#microwaveModel"+i).val() == ''){
          alert("please select microwave model " +i+ " value");
          return false;
        }
        else if($("#microwaveHeight"+i).val() == ''){
          alert("please enter microwave height " +i+ " value");
          return false;
        }
        else if($("#microwaveDia"+i).val() == ''){
          alert("please enter microwave dia " +i+ " value");
          return false;
        }
        else if($("#microwaveAzimuth"+i).val() == ''){
          alert("please enter microwave azimuth " +i+ " value");
          return false;
        }
        else{
          let json = {
            id : i,
            make : $("#microwaveMake"+i).val(),
            model : $("#microwaveModel"+i).val(),
            microwaveHeight : $("#microwaveHeight"+i).val(),
            dia : $("#microwaveDia"+i).val(),
            microwaveAzimuth : $("#microwaveAzimuth"+i).val()
          }
          this.microwaveList.push(json);
        }
      }
    }
    return true;
  }

  validateMicroweveEditDetails() : any{
    this.microwaveList = [];
    if(this.noOfMicrowave === ""){
      alert("Please no of microwave");
      return false;
    }
    else{
      for(let i=1;i<=this.noOfMicrowave;i++){
        if($("#microwaveMakeEdit"+i).val() == ''){
          alert("please enter microwave make " +i+ " value");
          return false;
        }
        else if($("#microwaveModelEdit"+i).val() == ''){
          alert("please enter microwave model " +i+ " value");
          return false;
        }
        else if($("#microwaveHeightEdit"+i).val() == ''){
          alert("please enter microwave height " +i+ " value");
          return false;
        }
        else if($("#microwaveDiaEdit"+i).val() == ''){
          alert("please enter microwave dia " +i+ " value");
          return false;
        }
        else if($("#microwaveAzimuthEdit"+i).val() == ''){
          alert("please enter microwave azimuth " +i+ " value");
          return false;
        }
        else{
          let json = {
            id : i,
            make : $("#microwaveMakeEdit"+i).val(),
            model : $("#microwaveModelEdit"+i).val(),
            microwaveHeight : $("#microwaveHeightEdit"+i).val(),
            dia : $("#microwaveDiaEdit"+i).val(),
            microwaveAzimuth : $("#microwaveAzimuthEdit"+i).val()
          }
          this.microwaveList.push(json);
        }
      }
    }
    return true;
  }

  microwaveDeleteList = [];
  validateMicroweveDeleteDetails() : any{
    this.microwaveDeleteList = [];
    if(this.noOfMicrowave_Delete == ""){
      alert("Please no of microwave Delete");
      return false;
    }
    else{
      for(let i=1;i<=this.noOfMicrowave_Delete;i++){
        if($("#microwaveDeleteMake"+i).val() == ''){
          alert("please enter microwave Delete make " +i+ " value");
          return false;
        }
        else if($("#microwaveDeleteModel"+i).val() == ''){
          alert("please enter microwave Delete model " +i+ " value");
          return false;
        }
        else if($("#microwaveDeleteHeight"+i).val() == ''){
          alert("please enter microwave Delete height " +i+ " value");
          return false;
        }
        else if($("#microwaveDeleteDia"+i).val() == ''){
          alert("please enter microwave Delete dia " +i+ " value");
          return false;
        }
        else if($("#microwaveDeleteAzimuth"+i).val() == ''){
          alert("please enter microwave Delete azimuth " +i+ " value");
          return false;
        }
        else{
          let json = {
            id : i,
            make : $("#microwaveDeleteMake"+i).val(),
            model : $("#microwaveDeleteModel"+i).val(),
            microwaveHeight : $("#microwaveDeleteHeight"+i).val(),
            dia : $("#microwaveDeleteDia"+i).val(),
            microwaveAzimuth : $("#microwaveDeleteAzimuth"+i).val()
          }
          this.microwaveDeleteList.push(json);
        }
      }
    }
    return true;
  }

  microwaveAddList = [];
  validateMicroweveAddDetails() : any{
    this.microwaveAddList = [];
    if(this.noOfMicrowave_Add == ""){
      alert("Please no of microwave Add");
      return false;
    }
    else{
      for(let i=1;i<=this.noOfMicrowave_Add;i++){
        if($("#microwaveAddMake"+i).val() == ''){
          alert("please enter microwave Add make " +i+ " value");
          return false;
        }
        else if($("#microwaveAddModel"+i).val() == ''){
          alert("please enter microwave Add model " +i+ " value");
          return false;
        }
        else if($("#microwaveAddHeight"+i).val() == ''){
          alert("please enter microwave Add height " +i+ " value");
          return false;
        }
        else if($("#microwaveAddDia"+i).val() == ''){
          alert("please enter microwave Add dia " +i+ " value");
          return false;
        }
        else if($("#microwaveAddAzimuth"+i).val() == ''){
          alert("please enter microwave Add azimuth " +i+ " value");
          return false;
        }
        else{
          let json = {
            id : i,
            make : $("#microwaveAddMake"+i).val(),
            model : $("#microwaveAddModel"+i).val(),
            microwaveHeight : $("#microwaveAddHeight"+i).val(),
            dia : $("#microwaveAddDia"+i).val(),
            microwaveAzimuth : $("#microwaveAddAzimuth"+i).val()
          }
          this.microwaveAddList.push(json);
        }
      }
    }
    return true;
  }

  rruList = [];
  validateRRUDetails() : any{
    this.rruList = [];
    if(this.noOfRRU === ""){
      alert("please select no of RRU");
      return false;
    }
    else{
      for(let i=1;i<=this.noOfRRU;i++){
        if($("#rruMake"+i).val() == ''){
          alert("please enter RRU make "+i+" value");
          return false;
        }
        else if($("#rruModel"+i).val() == ''){
          alert("please enter rru Model "+i+" value");
          return false;
        }
        else if($("#rruFreqBand"+i).val() == ''){
          alert("please enter Frequenc Band "+i+" value");
          return false;
        }
        else if($("#rruPowerConsumption"+i).val() == ''){
          alert("please enter rru Power Consumption "+i+" value");
          return false;
        }
        else if($("#rruWeight"+i).val() == ''){
          alert("please enter RRU weight "+i+" value");
          return false;
        }
        else{
          let json = {
            id : i,
            rruMake : $("#rruMake"+i).val(),
            rruModel : $("#rruModel"+i).val(),
            rruFreqBand : $("#rruFreqBand"+i).val(),
            rruPowerConsumption : $("#rruPowerConsumption"+i).val(),
            rruWeight : $("#rruWeight"+i).val()
          }
          this.rruList.push(json);
        }
      }
    }
    return true;
  }

  validateRRUEditDetails() : any{
    this.rruList = [];
    if(this.noOfRRU === ""){
      alert("please select no of RRU");
      return false;
    }
    else{
      for(let i=1;i<=this.noOfRRU;i++){
        if($("#rruMakeEdit"+i).val() == ''){
          alert("please enter RRU make "+i+" value");
          return false;
        }
        else if($("#rruModelEdit"+i).val() == ''){
          alert("please enter rru Model "+i+" value");
          return false;
        }
        else if($("#rruFreqBandEdit"+i).val() == ''){
          alert("please enter rru Frequency band "+i+" value");
          return false;
        }
        else if($("#rruPowerConsumptionEdit"+i).val() == ''){
          alert("please enter rru Power Consumption "+i+" value");
          return false;
        }
        else if($("#rruWeightEdit"+i).val() == ''){
          alert("please enter RRU weight "+i+" value");
          return false;
        }
        else{
          let json = {
            id : i,
            rruMake : $("#rruMakeEdit"+i).val(),
            rruModel : $("#rruModelEdit"+i).val(),
            rruFreqBand : $("#rruFreqBandEdit"+i).val(),
            rruPowerConsumption : $("#rruPowerConsumptionEdit"+i).val(),
            rruWeight : $("#rruWeightEdit"+i).val()
          }
          this.rruList.push(json);
        }
      }
    }
    return true;
  }

  rruAddList = [];
  validateRRUAddDetails() : any {
    this.rruAddList = [];
    if(this.noOfRRU_Add == ""){
      alert("please select no of RRU Add");
      return false;
    }
    else{
      for(let i=1;i<=this.noOfRRU_Add;i++){
        if($("#rruAddMake"+i).val() == ''){
          alert("please enter Make in rruAdd "+i+" value");
          return false;
        }
        else if($("#rruAddModel"+i).val() == '' && this.operator == 'RJIO'){
          alert("please select Model in rruAdd "+i+" value");
          return false;
        }
        else if($("#rruAddModel"+i).val() == '' && this.operator != 'RJIO'){
          alert("please enter Model in rruAdd "+i+" value");
          return false;
        }
        else if($("#rruAddPower"+i).val() == ''){
          alert("please enter Power in rruAdd "+i+" value");
          return false;
        }
        else if($("#rruAddFreqBand"+i).val() == ''){
          alert("please enter Frequency band in rruAdd "+i+" value");
          return false;
        }
        else if($("#rruAddWeight"+i).val() == ''){
          alert("please enter Weight in rruAdd "+i+" value");
          return false;
        }
        else {
          let json = {
            id : i,
            rruAddMake : $("#rruAddMake"+i).val(),
            rruAddModel : $("#rruAddModel"+i).val(),
            rruAddFreqBand : $("#rruAddFreqBand"+i).val(),
            rruAddPower : $("#rruAddPower"+i).val(),
            rruAddWeight : $("#rruAddWeight"+i).val()
          }
          this.rruAddList.push(json);
        }
      }
    }
    return true;
  }

  rruDeleteList = [];
  validateRRUDeleteDetails() : any {
    this.rruDeleteList = [];
    if(this.noOfRRU_Delete == ""){
      alert("please select no of RRU Delete");
      return false;
    }
    else{
      for(let i=1;i<=this.noOfRRU_Delete;i++){
        if($("#rruDeleteMake"+i).val() == ''){
          alert("please enter Make in rruDelete "+i+" value");
          return false;
        }
        else if($("#rruDeleteModel"+i).val() == '' && this.operator == 'RJIO'){
          alert("please select Model in rruDelete "+i+" value");
          return false;
        }
        else if($("#rruDeleteModel"+i).val() == '' && this.operator != 'RJIO'){
          alert("please enter Model in rruDelete "+i+" value");
          return false;
        }
        else if($("#rruDeleteFreqBand"+i).val() == ''){
          alert("please enter Frequency band in rruDelete "+i+" value");
          return false;
        }
        else if($("#rruDeletePower"+i).val() == ''){
          alert("please enter Power in rruDelete "+i+" value");
          return false;
        }
        else if($("#rruDeleteWeight"+i).val() == ''){
          alert("please enter Weight in rruDelete "+i+" value");
          return false;
        }
        else {
          let json = {
            id : i,
            rruDeleteMake : $("#rruDeleteMake"+i).val(),
            rruDeleteModel : $("#rruDeleteModel"+i).val(),
            rruDeleteFreqBand : $("#rruDeleteFreqBand"+i).val(),
            rruDeletePower : $("#rruDeletePower"+i).val(),
            rruDeleteWeight : $("#rruDeleteWeight"+i).val()
          }
          this.rruDeleteList.push(json);
        }
      }
    }
    return true;
  }

  bbuList = [];
  validateBBUDetails() : any{
    this.bbuList = [];
    if(this.noOfBBU === ""){
      alert("please select no of BBU");
      return false;
    }
    else{
      for(let i=1;i<=this.noOfBBU;i++){
        if($("#bbuMake"+i).val() == ''){
          alert("please enter BBU make "+i+" value");
          return false;
        }
        else if($("#bbuModel"+i).val() == ''){
          alert("please enter BBU model "+i+" value");
          return false;
        }
        else if($("#bbuPowerConsumption"+i).val() == ''){
          alert("please enter BBU power consumption "+i+" value");
          return false;
        }
        else if($("#bbuPositioning"+i).val() == ''){
          alert("please enter BBU Positioning "+i+" value");
          return false;
        }
        else{
          let json = {
            id : i,
            bbuMake : $("#bbuMake"+i).val(),
            bbuModel : $("#bbuModel"+i).val(),
            bbuPowerConsumption : $("#bbuPowerConsumption"+i).val(),
            bbuPositioning : $("#bbuPositioning"+i).val()
          }
          this.bbuList.push(json);
        }
      }
    }
    return true;
  }

  validateBBUEditDetails() : any{
    this.bbuList = [];
    if(this.noOfBBU === ""){
      alert("please select no of BBU");
      return false;
    }
    else{
      for(let i=1;i<=this.noOfBBU;i++){
        if($("#bbuMakeEdit"+i).val() == ''){
          alert("please enter BBU make "+i+" value");
          return false;
        }
        else if($("#bbuModelEdit"+i).val() == ''){
          alert("please enter BBU model "+i+" value");
          return false;
        }
        else if($("#bbuPowerConsumptionEdit"+i).val() == ''){
          alert("please enter BBU power consumption "+i+" value");
          return false;
        }
        else if($("#bbuPositioningEdit"+i).val() == ''){
          alert("please enter BBU Positioning "+i+" value");
          return false;
        }
        else{
          let json = {
            id : i,
            bbuMake : $("#bbuMakeEdit"+i).val(),
            bbuModel : $("#bbuModelEdit"+i).val(),
            bbuPowerConsumption : $("#bbuPowerConsumptionEdit"+i).val(),
            bbuPositioning : $("#bbuPositioningEdit"+i).val()
          }
          this.bbuList.push(json);
        }
      }
    }
    return true;
  }

  bbuDeleteList = [];
  validateBBUDeleteDetails() : any{
    this.bbuDeleteList = [];
    if(this.noOfBBU_Delete == ""){
      alert("please select no of BBU Delete");
      return false;
    }
    else{
      for(let i=1;i<=this.noOfBBU_Delete;i++){
        if($("#bbuDeleteMake"+i).val() == ''){
          alert("please enter BBU Delete make "+i+" value");
          return false;
        }
        else if($("#bbuDeleteModel"+i).val() == ''){
          alert("please enter BBU Delete model "+i+" value");
          return false;
        }
        else if($("#bbuDeletePowerConsumption"+i).val() == ''){
          alert("please enter BBU Delete power consumption "+i+" value");
          return false;
        }
        else if($("#bbuDeletePositioning"+i).val() == ''){
          alert("please enter BBU Positioning "+i+" value");
          return false;
        }
        else{
          let json = {
            id : i,
            bbuMake : $("#bbuDeleteMake"+i).val(),
            bbuModel : $("#bbuDeleteModel"+i).val(),
            bbuPowerConsumption : $("#bbuDeletePowerConsumption"+i).val(),
            bbuPositioning : $("#bbuDeletePositioning"+i).val()
          }
          this.bbuDeleteList.push(json);
        }
      }
    }
    return true;
  }

  bbuAddList = [];
  validateBBUAddDetails() : any{
    this.bbuAddList = [];
    if(this.noOfBBU_Add == ""){
      alert("please select no of BBU Add");
      return false;
    }
    else{
      for(let i=1;i<=this.noOfBBU_Add;i++){
        if($("#bbuAddMake"+i).val() == ''){
          alert("please enter BBU Add make "+i+" value");
          return false;
        }
        else if($("#bbuAddModel"+i).val() == ''){
          alert("please enter BBU Add model "+i+" value");
          return false;
        }
        else if($("#bbuAddPowerConsumption"+i).val() == ''){
          alert("please enter BBU Add power consumption "+i+" value");
          return false;
        }
        else if($("#bbuAddPositioning"+i).val() == ''){
          alert("please enter BBU Positioning "+i+" value");
          return false;
        }
        else{
          let json = {
            id : i,
            bbuMake : $("#bbuAddMake"+i).val(),
            bbuModel : $("#bbuAddModel"+i).val(),
            bbuPowerConsumption : $("#bbuAddPowerConsumption"+i).val(),
            bbuPositioning : $("#bbuAddPositioning"+i).val()
          }
          this.bbuAddList.push(json);
        }
      }
    }
    return true;
  }

  btsList = [];
  validateBTSDetails() : any {
    this.btsList = [];
    if(this.noOfBTS === ""){
      alert("please select no of BTS");
      return false;
    }
    else{
      for(let i=1;i<=this.noOfBTS;i++){
        if($("#btsType"+i).val() == ''){
          alert("please select bts type "+i+" value");
          return false;
        }
        else if($("#btsMakel"+i).val() == ''){
          alert("please select bts make "+i+" value");
          return false;
        }
        else if($("#btsModel"+i).val() == ''){
          alert("please enter bts model "+i+" value");
          return false;
        }
        else if($("#btsFloorspace"+i).val() == ''){
          alert("please enter bts floorspace "+i+" value");
          return false;
        }
        else if($("#btsPower"+i).val() == ''){
          alert("please enter bts power "+i+" value");
          return false;
        }
        else {
          let json = {
            id : i,
            btsType : $("#btsType"+i).val(),
            btsMake : $("#btsMakel"+i).val(),
            btsModel : $("#btsModel"+i).val(),
            btsFloorspace : $("#btsFloorspace"+i).val(),
            btsPower : $("#btsPower"+i).val()
          }
          this.btsList.push(json);
        }
      }
    }
    return true;
  }
  
  validateBTSEditDetails() : any {
    this.btsList = [];
    if(this.noOfBTS === ""){
      alert("please select no of BTS");
      return false;
    }
    else{
      for(let i=1;i<=this.noOfBTS;i++){
        if($("#btsTypeEdit"+i).val() == ''){
          alert("please select bts type "+i+" value");
          return false;
        }
        else if($("#btsMakelEdit"+i).val() == ''){
          alert("please select bts make "+i+" value");
          return false;
        }
        else if($("#btsModelEdit"+i).val() == ''){
          alert("please enter bts model "+i+" value");
          return false;
        }
        else if($("#btsFloorspaceEdit"+i).val() == ''){
          alert("please enter bts floorspace "+i+" value");
          return false;
        }
        else if($("#btsPowerEdit"+i).val() == ''){
          alert("please enter bts power "+i+" value");
          return false;
        }
        else {
          let json = {
            id : i,
            btsType : $("#btsTypeEdit"+i).val(),
            btsMake : $("#btsMakelEdit"+i).val(),
            btsModel : $("#btsModelEdit"+i).val(),
            btsFloorspace : $("#btsFloorspaceEdit"+i).val(),
            btsPower : $("#btsPowerEdit"+i).val()
          }
          this.btsList.push(json);
        }
      }
    }
    return true;
  }

  mcbList = [];
  validateMCBDetails() : any {
    this.mcbList = [];
    for(let i=1;i<=this.noOfMCB;i++){
      if($("#mcbRating"+i).val() == ''){
        alert("please select mcb mcbRating "+i+" value");
        return false;
      }
      else {
        let json = {
          id : i,
          mcbRating : $("#mcbRating"+i).val()
        }
        this.mcbList.push(json);
      }
    }
    return true;
  } 

  validateMCBEditDetails() : any {
    this.mcbList = [];
    for(let i=1;i<=this.noOfMCB;i++){
      if($("#mcbRatingEdit"+i).val() == ''){
        alert("please select mcb mcbRating "+i+" value");
        return false;
      }
      else {
        let json = {
          id : i,
          mcbRating : $("#mcbRatingEdit"+i).val()
        }
        this.mcbList.push(json);
      }
    }
    return true;
  } 

  massiveMIMOAntennaList = [];
  validateMassiveMIMOAntennaDetails() : any{
    this.massiveMIMOAntennaList = [];
    for(let i=1;i<=this.noOfMassiveMIMOAntenna;i++){
      if($("#mimoAntennaWeight"+i).val() == ''){
        alert("Enter massive mimo antenna weight "+i+" value");
        return false;
      }
      else if($("#mimoPower"+i).val() == ''){
        alert(" Enter massive mimo power "+i+" value");
        return false;
      }
      else if($("#mimoUspace"+i).val() == ''){
        alert("Enter massive mimo U space "+i+" value");
        return false;
      }
      else {
        let json = {
          id : i,
          mimoAntennaWeight : $("#mimoAntennaWeight"+i).val(),
          mimoPower : $("#mimoPower"+i).val(),
          mimoUspace : $("#mimoUspace"+i).val(),
        }
        this.massiveMIMOAntennaList.push(json);
      }
    }
    return true;
  }

  ip55List = [];
  validateIP55Details() : any {
    this.ip55List = [];
    if(this.noOfIP55 == ""){
      alert("please select no of IP55");
      return false;
    }
    else{
      for(let i=1;i<=this.noOfIP55;i++){
        if($("#ip55Power"+i).val() == ''){
          alert("please enter ip55 Power "+i+" value");
          return false;
        }
        else {
          let json = {
            id : i,
            ip55Power : $("#ip55Power"+i).val()
          }
          this.ip55List.push(json);
        }
      }
    }
    return true;
  } 

  odscList = [];
  validateODSCDetails() : any{
    this.odscList = [];
    if(this.noOfODSC === ''){
      alert("please select no of ODSC");
      return false;
    }
    else{
      for(let i=1;i<=this.noOfODSC;i++){
        if($("#odscMake"+i).val()==''){
          alert("please enter ODSC make "+i+" value");
          return false;
        }
        if($("#odscModel"+i).val()==''){
          alert("please enter ODSC model "+i+" value");
          return false;
        }
        else{
          let json = {
            id : i,
            odscMake : $("#odscMake"+i).val(),
            odscModel : $("#odscModel"+i).val()
          }
          this.odscList.push(json);
        }
      }
      return true;
    }
  }
  validateODSCEditDetails() : any{
    this.odscList = [];
    if(this.noOfODSC === ''){
      alert("please select no of ODSC");
      return false;
    }
    else{
      for(let i=1;i<=this.noOfODSC;i++){
        if($("#odscEditMake"+i).val()==''){
          alert("please enter ODSC make "+i+" value");
          return false;
        }
        if($("#odscEditModel"+i).val()==''){
          alert("please enter ODSC model "+i+" value");
          return false;
        }
        else{
          let json = {
            id : i,
            odscMake : $("#odscEditMake"+i).val(),
            odscModel : $("#odscEditModel"+i).val()
          }
          this.odscList.push(json);
        }
      }
      return true;
    }
  }

  validateNoOfPole() : any{
    this.noOfPoleList = [];
    if(this.noOfPole === ""){
      alert("please select No of pole");
      return false;
    }
    else{
      for(let i=1;i<=this.noOfPole;i++){
        if($("#poleHeight"+i).val() == ''){
          alert("please enter Height " +i+ " value");
          return false;
        }
        else if($("#poleWeight"+i).val() == ''){
          alert("please enter Weight on tower(RRU, GPS, Antenna. Not including MW & RF antenna) " +i+ " value");
          return false;
        }
        else{
          let json = {
            id : i,
            poleHeight : $("#poleHeight"+i).val(),
            poleWeight : $("#poleWeight"+i).val() 
          }
          this.noOfPoleList.push(json);
        }
      }
      return true;
    }
  }

  validateNoOfHpscAntenna() : any{
    this.noOfHPSCAntennaList = [];
    if(this.noOfHPSCAntenna === ""){
      alert("please select No of HPSC antenna");
      return false;
    }
    else{
      for(let i=1;i<=this.noOfHPSCAntenna;i++){
        if($("#typeOfHpscAntenna"+i).val() == ''){
          alert("please select Type of HPSC Antenna " +i+ " value");
          return false;
        }
        else{
          let json = {
            id : i,
            typeOfHpscAntenna : $("#typeOfHpscAntenna"+i).val()
          }
          this.noOfHPSCAntennaList.push(json);
        }
      }
      return true;
    }
  }

  closeRFAntennaModal(){
    $("#rfAntennaModal").modal("hide");
  }

  closeMWAntennaModal(){
    $("#microwaveModal").modal("hide");
  }

  closeRruModal(){
    $("#rruModal").modal("hide");
  }

  closeBbuModal(){
    $("#bbuModal").modal("hide");
  }

  closeBtsModal(){
    $("#btsModal").modal("hide");
  }

  closeOdscModal(){
    $("#odscModal").modal("hide");
  }

  closeMcbModal(){
    $("#mcbModal").modal("hide");
  }

  closeCurrentModal(modalId : any){
    $("#"+modalId).modal("hide");
  }

  getBbuModel(evt,id,modelId,powerId){
    let make = evt.target.value;
    // 
    let objList = this.bbuAutoPopUpList.filter(x => x.make == make);
    // 
    let bbuModelList = objList
    .map(item => item.model)
    .filter((value, index, self) => self.indexOf(value) === index);

    let optionList = "<option value=''>Select</option>";
    if(bbuModelList.length == 1){
      let model = bbuModelList[0];
      optionList = "<option value='"+model+"'>"+model+"</option>";
    }
    else{
      for(let i=0;i<bbuModelList.length;i++){
        let model = bbuModelList[i];
        optionList += "<option value='"+model+"'>"+model+"</option>";
      }
    }
    $("#"+modelId+id).html(optionList);
    $("#"+powerId+id).html("<option value=''>Select</option>");
  }

  getBbuRatedPower(evt,id,makeId,powerId){
    let make = $("#"+makeId+id).val();
    let model = evt.target.value;
    // 
    let objList = this.bbuAutoPopUpList.filter(x => x.make == make && x.model == model);
    // 
    let bbuRatedPowerList = objList
    .map(item => item.ratedPowerConsumption)
    .filter((value, index, self) => self.indexOf(value) === index);

    let optionList = "<option value=''>Select</option>";
    if(model == "Other"){
      let otherRatedPower = bbuRatedPowerList[0].split(",");
      if(otherRatedPower.length == 1){
        let ratedPower = bbuRatedPowerList[0];
        optionList = "<option value='"+ratedPower+"'>"+ratedPower+"</option>";
      }
      else{
        for(let i=0;i<otherRatedPower.length;i++){
          let ratedPower = otherRatedPower[i];
          optionList += "<option value='"+ratedPower+"'>"+ratedPower+"</option>";
        }
      }
    }
    else{
      if(bbuRatedPowerList.length == 1){
        let ratedPower = bbuRatedPowerList[0];
        optionList = "<option value='"+ratedPower+"'>"+ratedPower+"</option>";
      }
      else{
        for(let i=0;i<bbuRatedPowerList.length;i++){
          let ratedPower = bbuRatedPowerList[i];
          optionList += "<option value='"+ratedPower+"'>"+ratedPower+"</option>";
        }
      }
    }
    $("#"+powerId+id).html(optionList);
  }

  getRfAntennaBand(evt,id,bandId){
    let model = evt.target.value;
    // 
    let objList = this.rfAntennaAutoPopUpList.filter(x => x.model == model);
    // 
    let rfBandList = objList
    .map(item => item.band)
    .filter((value, index, self) => self.indexOf(value) === index);

    if(model == 'Other'){
      let optionList = "<option value=''>Select</option>";
      let otherBand = rfBandList[0].split(",");
      if(otherBand.length == 1){
        let band = otherBand[0];
        optionList = "<option value='"+band+"'>"+band+"</option>";
      }
      else{
        for(let i=0;i<otherBand.length;i++){
          let band = otherBand[i];
          optionList += "<option value='"+band+"'>"+band+"</option>";
        }
      }
      $("#"+bandId+id).html(optionList);
    }
    else{
      let optionList = "<option value=''>Select</option>";
      if(rfBandList.length == 1){
        let band = rfBandList[0];
        optionList = "<option value='"+band+"'>"+band+"</option>";
      }
      else{
        for(let i=0;i<rfBandList.length;i++){
          let band = rfBandList[i];
          optionList += "<option value='"+band+"'>"+band+"</option>";
        }
      }
      $("#"+bandId+id).html(optionList);
    }
  }

  getRruModel(evt,id,modelId,freqBandId,powerId){
    let make = evt.target.value;
    // 
    let objList = this.rruAutoPopUpList.filter(x => x.make == make);
    // 
    let rruModelList = objList
    .map(item => item.model)
    .filter((value, index, self) => self.indexOf(value) === index);

    let optionList = "<option value=''>Select</option>";
    if(rruModelList.length == 1){
      let model = rruModelList[0];
      optionList = "<option value='"+model+"'>"+model+"</option>";
    }
    else{
      for(let i=0;i<rruModelList.length;i++){
        let model = rruModelList[i];
        optionList += "<option value='"+model+"'>"+model+"</option>";
      }
    }
    $("#"+modelId+id).html(optionList);
    $("#"+freqBandId+id).html("<option value=''>Select</option>");
    $("#"+powerId+id).html("<option value=''>Select</option>");
  }
  getRruFreqBand(evt,id,makeId,freqBandId,powerId){
    let make = $("#"+makeId+id).val();
    let model = evt.target.value;
    // 
    let objList = this.rruAutoPopUpList.filter(x => x.make == make && x.model == model);
    // 
    let rruFreqBandList = objList
    .map(item => item.frequencyBand)
    .filter((value, index, self) => self.indexOf(value) === index);

    let optionList = "<option value=''>Select</option>";
    let ratedPowerOption = "<option value=''>Select</option>";
    if(model == 'Other'){
      let otherFreqBand = rruFreqBandList[0].split(",");
      for(let i=0;i<otherFreqBand.length;i++){
        let freqBand = otherFreqBand[i];
        optionList += "<option value='"+freqBand+"'>"+freqBand+"</option>";
      }

      // 
      let rruRatedPowerList = objList
      .map(item => item.ratedPower)
      .filter((value, index, self) => self.indexOf(value) === index);

      for(let i=0;i<rruRatedPowerList.length;i++){
        let rp = rruRatedPowerList[i].split(",");
        if(rp.length == 1){
          let ratedPower = rp[0];
          ratedPowerOption = "<option value='"+ratedPower+"'>"+ratedPower+"</option>";
        }
        else{
          for(let j=0;j<rp.length;j++){
            let ratedPower = rp[j];
            ratedPowerOption += "<option value='"+ratedPower+"'>"+ratedPower+"</option>";
          } 
        }
      }
    }
    else{
      for(let i=0;i<rruFreqBandList.length;i++){
        let freqBand = rruFreqBandList[i];
        optionList += "<option value='"+freqBand+"'>"+freqBand+"</option>";
      }
    }
    $("#"+freqBandId+id).html(optionList);
    $("#"+powerId+id).html(ratedPowerOption); 
  }
  getRruRatedPower(evt,id,makeId,modelId,powerId){
    let make = $("#"+makeId+id).val();
    let model = $("#"+modelId+id).val();
    if(model == "Other"){
      return;
    }
    let freqBand = evt.target.value;
    // 
    let objList = this.rruAutoPopUpList.filter(x => x.make == make && x.model == model && x.frequencyBand == freqBand);
    // 
    let rruRatedPowerList = objList
    .map(item => item.ratedPower)
    .filter((value, index, self) => self.indexOf(value) === index);

    let optionList = "<option value=''>Select</option>";
    for(let i=0;i<rruRatedPowerList.length;i++){
      let rp = rruRatedPowerList[i].split(",");
      if(rp.length == 1){
        let ratedPower = rp[0];
        optionList = "<option value='"+ratedPower+"'>"+ratedPower+"</option>";
      }
      else{
        for(let j=0;j<rp.length;j++){
          let ratedPower = rp[j];
          optionList += "<option value='"+ratedPower+"'>"+ratedPower+"</option>";
        } 
      }
    }
    $("#"+powerId+id).html(optionList);
  }

  getMwModel(evt,id,modelId){
    let make = evt.target.value;
    let objList = this.mwAutoPopUpList.filter(x => x.make == make);

    let mwModelList = objList
    .map(item => item.model)
    .filter((value, index, self) => self.indexOf(value) === index);

    let optionList = "<option value=''>Select</option>";
    if(mwModelList.length == 1){
      let model = mwModelList[0];
      optionList = "<option value='"+model+"'>"+model+"</option>";
    }
    else{
      for(let i=0;i<mwModelList.length;i++){
        let model = mwModelList[i];
        optionList += "<option value='"+model+"'>"+model+"</option>";
      }
    }
    $("#"+modelId+id).html(optionList);

  }
}
