import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { TabsetComponent } from 'ngx-bootstrap';
import { Router } from '@angular/router';
import { CreateNBSService } from 'src/app/shared/services/createNBSService';
import { Constant } from 'src/app/shared/constant/Constant';
declare var $: any;

@Component({
  selector: 'app-nbs',
  templateUrl: './nbs.component.html',
  styleUrls: ['./nbs.component.css']
})
export class NbsComponent implements OnInit {
  @ViewChild('staticTabs') staticTabs: TabsetComponent;

  circleName : any = "";
  tviSiteId : any = "";
  tviSiteIdList = [];
  selectedTviSiteIdList = [];
  airtelSiteId : any = "";
  airtelLocatorId : any = "";
  technology : any = "";
  technologyList = [];
  selectedTechnologyList = [];
  opcoId : any = "";
  siteAddress : any = "";
  city : any = "";
  townVillage : any = "";
  district : any = "";
  districtList = [];
  selectedDistrictList = [];
  state : any = "";
  stateList = [];
  selectedStateList = [];
  pincode : any = "";
  clutter : any = "";
  clutterList = [];
  selectedClutterList = [];
  windSpeed : any = "";
  siteType : any = "";
  siteTypeList = [];
  selectedSiteTypeList = [];
  towerHeight : any = "";
  aglRequired : any = "";
  frequencyUserByOpco = "";
  opcoFrequencyList = [];
  selectedOpcoFrequencyList = [];
  latitude1 : any = "";
  longitude1 : any = "";
  latitude2 : any = "";
  longitude2 : any = "";
  ebAvailability : any = "";
  ebAvailabilityDistance : any = "";
  dgAvailability : any = "";
  smartSplitType : any = "";
  floorSpaceOfODCabinet : any = "";
  acPowerLoad : any = "";
  totalPowerRequired : any = "";
  cowType : any = "";
  serviceContractPeriod : any = "";
  ratedPowerConsumption : any = "";
  towerWeight : any = "";
  rackSpaceForBBU : any = "";
  rackSpaceForMW : any = "";
  aglRequiredODSC : any = "";
  aglRequiredMW : any = "";
  poleHeight : any = "";
  additionalPoles : any = "0";
  airtelBackhaul : any = "";
  acDcBackup : any = "";
  additionalPowerBackup2Hrs : any = "";
  totalRatedPower : any = "";
  camuflauging : any = "";
  noOfSmallCell : any = "";
  areaPerSmallCell : any = "";
  depthPerSmallCell : any = "";
  heightOfHighestAntenna : any = "";
  weightOfSmallCell : any = "";
  uSpace : any = "";
  powerRequired : any = "";
  additionalODSCRequired : any = "";
  additionalPowerRequired : any = "";
  existingLLROfTVISite : any = "";
  additionalLLRDueToAdditionalODSC : any = "";
  cumulativePANIndiaODCSSharingSOCount : any = "";
  conversionOfSharingODSCIntoMacroSite : any = "";
  existingAirtelConfigurationBeforeMIMO : any = "";
  
  uSpaceForBBU : any = "";
  powerRequirement : any = "";
  powerThresholdInCaseOfMIMOExpansion : any = "";
  additionalLLRDueToAdditionalMIMO : any = "";
  additionBTSFloorSpace : any = "";
  ratedPower : any = "";
  acbackupRequired2Hrs : any = "";


  noOfGSMAntenna : any = "0";
  noOfRFAntenna : any = "";
  noOfMicrowave : any = "";
  noOfBBU : any = "";
  noOfRRU : any = "";
  noOfBTS : any = "";
  noOfMCB : any = "";
  mwRack : any = "";
  weightOfAdditionalAntenna : any = "";
  rfAntennaMountHeight : any = "";
  mwAntennaMountHeight : any = "";
  floorLength : any = "";
  floorWidth : any = "";
  floorHeight : any = "";
  btsPower : any = "";
  powerSupply : any = "";
  totalPowerConsumption : any = "";
  noOfUSpaceRequired : any = "";
  fiberEntry : any = "";
  fiberTermination : any = "";
  remark : any = "";
  
  noOfMassiveMIMOAntenna : any = "0";
  noOfRFAntennaList = [];
  noOfMicrowaveList = [];
  noOfMassiveMIMOAntennaList = [];
  noOfBBUList = [];
  noOfRRUList = [];
  noOfBTSList = [];
  noOfMCBList = [];
  
  loginEmpId = "";
  loginEmpRole = "";
  
  btsType1 = "";
  btsMakel1 = "";
  btsModel1 = "";
  btsFloorspace1 = "";
  btsPower1 = "";
  btsType2 = "";
  btsMakel2 = "";
  btsModel2 = "";
  btsFloorspace2 = "";
  btsPower2 = "";

  noOfODSC : any = "";
  noOfODSCList = [];

  commaSeparateCircleName = "";
  multiSelectropdownSettings = {};
  singleSelectropdownSettings = {};

  allNoOfList = [];
  currentTab : any = "";
  for_All_Tab : boolean = true;
  is_Sharing_Tab  : boolean = false;
  is_CreateNBS_Tab : boolean = false;
  is_NBS_Sharing_Tab : boolean = false;
  is_ODSC_Anchor_Tab : boolean = false;
  is_ODSC_Sharing_Tab : boolean = false;
  is_ODC_Smart_Split_Sharing_Tab : boolean = false;
  is_COW_Tab : boolean = false;
  is_COW_Sharing_Tab : boolean = false;
  is_Massive_MIMO_Sharing_Tab : boolean = false;

  btsTypeList = [];
  windSpeedList = [];
  uSpaceList = [];
  btsType = "";
  additionalLoad = "";

  constructor(private route:Router,private sharedService : CreateNBSService,
    private spinner: NgxSpinnerService,private toastr: ToastrService) {
      this.loginEmpId = localStorage.getItem("empId");
      this.loginEmpRole = localStorage.getItem("empRole")
      this.commaSeparateCircleName = localStorage.getItem("circleName");
      //console.log(this.route.url);
      this.is_CreateNBS_Tab = false;
      this.is_NBS_Sharing_Tab = false;
      this.is_ODSC_Anchor_Tab = false;
      this.is_ODSC_Sharing_Tab = false;
      this.is_ODC_Smart_Split_Sharing_Tab = false;
      this.is_COW_Tab  = false;
      this.is_Massive_MIMO_Sharing_Tab  = false;
      let currentUrl = route.url;
      if(currentUrl === "/layout/create-nbs"){
        this.is_CreateNBS_Tab = true;
        this.currentTab = "CreateNBS";
      }
      else if(currentUrl === "/layout/nbs-sharing"){
        this.is_NBS_Sharing_Tab = true;
        this.currentTab = "NBS_Sharing";
        this.is_Sharing_Tab = true;
      }
      else if(currentUrl === "/layout/odsc-anchor"){
        this.is_ODSC_Anchor_Tab = true;
        this.currentTab = "ODSC_Anchor";
      }
      else if(currentUrl === "/layout/odsc-sharing"){
        this.is_ODSC_Sharing_Tab = true;
        this.currentTab = "ODSC_Sharing";
        this.is_Sharing_Tab = true;
      }
      else if(currentUrl === "/layout/odc-smart-split-sharing"){
        this.is_ODC_Smart_Split_Sharing_Tab = true;
        this.currentTab = "ODC_Smart_Split_Sharing";
        this.is_Sharing_Tab = true;
      }
      else if(currentUrl === "/layout/cow"){
        this.is_COW_Tab = true;
        this.currentTab = "COW";
      }
      else if(currentUrl === "/layout/cow-sharing"){
        this.is_COW_Sharing_Tab = true;
        // this.currentTab = "COW_Sharing";
        this.currentTab = "COW";
        this.is_Sharing_Tab = true;
      }
      else if(currentUrl === "/layout/massive-mimo-sharing"){
        this.is_Massive_MIMO_Sharing_Tab = true;
        this.currentTab = "Massive_MIMO_Sharing";
        this.is_Sharing_Tab = true;
      }
      else {
        //console.log("invalide")
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
      itemsShowLimit: 0,
      allowSearchFilter: true
    };

    this.getNoOfList();

    if(this.is_CreateNBS_Tab || this.is_NBS_Sharing_Tab){
      this.technologyList = [{"paramCode":"2G","paramDesc":"2G "},
                            {"paramCode":"3G","paramDesc":"3G "},
                            {"paramCode":"4G FDD","paramDesc":"4G FDD "},
                            {"paramCode":"4G TDD","paramDesc":"4G TDD "},
                            {"paramCode":"4G L900","paramDesc":"4G L900 "}];

      this.siteTypeList = [{"paramCode":"GBT","paramDesc":"GBT "},
      {"paramCode":"RTT","paramDesc":"RTT "},
      {"paramCode":"RTP","paramDesc":"RTP "},
      {"paramCode":"GBM","paramDesc":"GBM "},
      {"paramCode":"COW","paramDesc":"COW "}
      ];
    }
    else if(this.is_ODSC_Anchor_Tab){
      this.technologyList = [{"paramCode":"ODSC Anchor","paramDesc":"ODSC Anchor "}];

      this.siteTypeList = [{"paramCode":"Model 1","paramDesc":"Model 1 "},
      {"paramCode":"Model 2","paramDesc":"Model 2 "}];
    }
    else if(this.is_ODSC_Sharing_Tab){
      this.technologyList = [{"paramCode":"ODSC Sharing","paramDesc":"ODSC Sharing "}];

      this.siteTypeList = [{"paramCode":"Model 1","paramDesc":"Model 1 "},
      {"paramCode":"Model 2","paramDesc":"Model 2 "}];
    }
    else if(this.is_ODC_Smart_Split_Sharing_Tab){
      this.technologyList = [{"paramCode":"ODC Sharing","paramDesc":"ODC Sharing "}];
    }
    else if(this.is_Massive_MIMO_Sharing_Tab){
      this.technologyList = [{"paramCode":"MIMO Sharing","paramDesc":"MIMO Sharing "}];
    }
    else if(this.is_COW_Tab){
      this.technologyList = [{"paramCode":"COW","paramDesc":"COW "}];
    }

    this.clutterList = [{"paramCode":"Urban","paramDesc":"Urban "},{"paramCode":"Semi Urban","paramDesc":"Semi Urban "},
    {"paramCode":"Rural","paramDesc":"Rural "},{"paramCode":"Metro","paramDesc":"Metro "},
    {"paramCode":"Densc","paramDesc":"Densc "}];
    
  }

  addInTotalRatedPower(){
    let rfTotalRatedPower = $("#rfTotalRatedPower").val() == '' ? '0' : $("#rfTotalRatedPower").val();
    let bbuTotalRatedPower = $("#bbuTotalRatedPower").val() == '' ? '0' : $("#bbuTotalRatedPower").val();
    let rruTotalRatedPower = $("#rruTotalRatedPower").val() == '' ? '0' : $("#rruTotalRatedPower").val();
  
    this.totalRatedPower = parseFloat(rfTotalRatedPower) + 
                            parseFloat(bbuTotalRatedPower) + 
                            parseFloat(rruTotalRatedPower) +
                            parseFloat(this.additionalLoad);
  }

  refreshPage(){
    this.route.navigateByUrl('/layout/dashbord', { skipLocationChange: true }).then(() => {
      if(this.is_NBS_Sharing_Tab) this.route.navigate(['/layout/nbs-sharing']);
      else if(this.is_NBS_Sharing_Tab) this.route.navigate(['/layout/nbs-sharing']);
      else if(this.is_ODSC_Anchor_Tab) this.route.navigate(['/layout/odsc-anchor']);
      else if(this.is_ODSC_Sharing_Tab) this.route.navigate(['/layout/odsc-sharing']);
      else if(this.is_ODC_Smart_Split_Sharing_Tab) this.route.navigate(['/layout/odc-smart-split-sharing']);
      else if(this.is_COW_Tab) this.route.navigate(['/layout/cow']);
      else if(this.is_COW_Sharing_Tab) this.route.navigate(['/layout/cow-sharing']);
      else if(this.is_Massive_MIMO_Sharing_Tab) this.route.navigate(['/layout/massive-mimo-sharing']);
    }); 
  }
  
  getNoOfList(){
    this.allNoOfList = JSON.parse(localStorage.getItem("allNoOfList"));
      for(let i=0;i<this.allNoOfList.length;i++){
        let paramCode = this.allNoOfList[i].paramCode;
        let paramDesc = this.allNoOfList[i].paramDesc; 
        if(paramCode == "noOfRFAntenna"){
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
      }
  }

  createArrFromCommasepareateStr(commaSeparateStr){
    let tempSplit = commaSeparateStr.split(",");
    let arr = [];
    for(let i=0;i<tempSplit.length;i++){
      let json = {
        paramCode : tempSplit[i],
        paramDesc : tempSplit[i]+" ",
      }
      arr.push(json);
    }
    return arr;
  }

  createRange(number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }

  // selectTab(tabId: number) {
  //   let isConfirm = confirm("Are u sure u want to next")
  //   if(isConfirm){
  //     this.staticTabs.tabs[1].disabled = !this.staticTabs.tabs[1].disabled;
  //     this.staticTabs.tabs[tabId].active = true;
  //   }
  // }

  onSelectTechnology(item: any) {
    //console.log(item);
    this.technology = this.createCommaSeprate(this.selectedTechnologyList);
    //console.log(this.technology);
  }

  onSelectAllTechnology(item: any) {
    //console.log(item);
    this.selectedTechnologyList = item;
    this.technology = this.createCommaSeprate(this.selectedTechnologyList);
    //console.log(this.technology);
  }

  onDeSelectTechnology(item: any) {
    //console.log(item);
    this.technology = this.createCommaSeprate(this.selectedTechnologyList);
    //console.log(this.technology);
  }

  onDeSelectAllTechnology(item: any) {
    //console.log(item);
    this.selectedTechnologyList = item;
    this.technology = this.createCommaSeprate(this.selectedTechnologyList);
    //console.log(this.technology);
  }

  onSelectOrDeSelectOpcoFrequency(item: any) {
    this.frequencyUserByOpco = this.createCommaSeprate(this.selectedOpcoFrequencyList);
  }

  onSelectAllOrDeSelectAllOpcoFrequency(item: any) {
    this.selectedOpcoFrequencyList = item;
    this.frequencyUserByOpco = this.createCommaSeprate(this.selectedOpcoFrequencyList);
  }

  onSelectOrDeSelectState(item: any) {
    //console.log(item);
    this.state = this.createCommaSeprate(this.selectedStateList);
  }

  onSelectOrDeSelectDistrict(item: any) {
    //console.log(item);
    this.district = this.createCommaSeprate(this.selectedDistrictList);
    this.createStateList();
  }

  onSelectOrDeSelectTviSiteId(item: any) {
    //console.log(item);
    this.tviSiteId = this.createCommaSeprate(this.selectedTviSiteIdList);
    //console.log(this.tviSiteId+" :: "+JSON.stringify(this.tviSiteIdList));
    if(this.tviSiteId != ''){
      for(let i = 0;i<this.tviSiteIdList.length;i++){
        let tviSiteId = this.tviSiteIdList[i].paramCode;
        if(tviSiteId == this.tviSiteId){
          this.latitude1 = this.tviSiteIdList[i].latitude;
          this.longitude1 = this.tviSiteIdList[i].longitude;
          return;
        }
      }
    }
    else{
      this.latitude1 = '';
      this.longitude1 = '';
    }
    
  }

  onSelectOrDeSelectClutter(item: any) {
    //console.log(item);
    this.clutter = this.createCommaSeprate(this.selectedClutterList);
  }

  onSelectOrDeSelectSiteType(item: any) {
    //console.log(item);
    this.siteType = this.createCommaSeprate(this.selectedSiteTypeList);
  }

  getTVISiteIdCircleName(){
    this.tviSiteIdList = [];
    this.selectedTviSiteIdList = [];
    //if(this.is_Sharing_Tab && this.circleName != ""){
      let json = {
        circleName : this.circleName
      }

      this.sharedService.getTVISiteIdCircleName(json)
      .subscribe( (response) =>{
        this.spinner.hide(); 
         //console.log(response);
         this.tviSiteIdList = response.wrappedList;
         //console.log(JSON.stringify(this.tviSiteIdList));
          //  if(response.responseCode === Constant.SUCCESSFUL_STATUS_CODE){
          //   this.toastr.success('Successfully save', 'Alert');
          //   this.spinner.hide();
          // }
          // else{
          //   this.toastr.error('SOMETHING_WRONG', 'Alert');
          //   this.spinner.hide();
          // }

         // setTimeout(() => {
            this.createDistrictList();
          //}, 1000);
    },
      (error)=>{
        this.toastr.warning(Constant.returnServerErrorMessage("getTVISiteIdCircleName"),"Alert !");
        this.spinner.hide();
      })
    //}
  }

  createDistrictList(){
    this.districtList = [];
    this.selectedDistrictList = [];
    this.stateList = [];
    this.selectedStateList = [];
    let ddd = "";
    for(let i = 0;i<this.tviSiteIdList.length;i++){
      //this.latitude1 = this.tviSiteIdList[i].latitude;
      //this.longitude1 = this.tviSiteIdList[i].longitude;
      let dName = this.tviSiteIdList[i].district;
      if(!ddd.includes(dName)){
        ddd += dName+",";
        let districtJson = {
          "paramCode":dName,
          "paramDesc":dName+" "
        }
        this.districtList.push(districtJson);
      } 
    }
    //console.log(JSON.stringify(this.districtList));
  }

  createStateList(){
    this.stateList = [];
    this.selectedStateList = [];
    for(let i=0;i<this.selectedDistrictList.length;i++){
      let tempStr = "";
      for(let j = 0;j<this.tviSiteIdList.length;j++){
        if(this.tviSiteIdList[j].district == this.selectedDistrictList[i].paramCode){
          let sName = this.tviSiteIdList[j].state;
          if(!tempStr.includes(sName)){
            tempStr += sName+",";
            let stateJson = {
              "paramCode":sName,
              "paramDesc":sName+" "
            }
            this.stateList.push(stateJson);
          }
        }
      }
    }
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

  showCurrentModal(modalId : any){
    $("#"+modalId).modal({
      backdrop : 'static',
      keyboard : false
    });
  }

  validateDecimalDataValue(fieldValue : any) : any{
    let splitValue = fieldValue.split(".");
    if(splitValue.length > 2){
      return true;
    }
    return false;
  } 

  validateBasicInfoDetails() : any{
    // if(this.opcoId == ''){
    //   alert("please enter opco id");
    //   return false;
    // }
    // else 
    if(this.circleName == ''){
      alert("please select circle value");
      return false;
    }
    // else if(this.tviSiteId == ''){
    //   alert("please enter tvi site id value");
    //   return false;
    // }
    else if(this.airtelSiteId == ''){
      alert("please enter airtel site id value");
      return false;
    }
    // else if(this.airtelLocatorId == ''){
    //   alert("please enter airtel locator id value");
    //   return false;
    // }
    else if(this.selectedTechnologyList.length == 0){
      alert("please select technology value");
      return false;
    }
    // else if(this.siteAddress == ''){
    //   alert("please enter site address value");
    //   return false;
    // }
    // else if(this.city == ''){
    //   alert("please enter city value");
    //   return false;
    // }
    // else if(this.townVillage == ''){
    //   alert("please enter townVillage value");
    //   return false;
    // }
    // else if(this.selectedDistrictList.length == 0){
    //   alert("please select district value");
    //   return false;
    // }

    // else if(this.selectedStateList.length == 0){
    //   alert("please select state value");
    //   return false;
    // }
    // else if(this.pincode == ''){
    //   alert("please select pincode value");
    //   return false;
    // }
    // else if(this.selectedClutterList.length == 0){
    //   alert("please select clutter value");
    //   return false;
    // }
    // else if(this.windSpeed == ''){
    //   alert("please enter wind speed value");
    //   return false;
    // }
    // else if(this.selectedSiteTypeList.length == 0){
    //   alert("please select site type value");
    //   return false;
    // }
    
    // else if(this.towerHeight == ''){
    //   alert("please enter tower height value");
    //   return false;
    // }
    else if(this.aglRequired == ''){
      alert("please enter agl required value");
      return false;
    }
    // else if(this.selectedOpcoFrequencyList.length == 0){
    //   alert("please select Frequency/Band used by opco value");
    //   return false;
    // }
    else if(this.latitude1 == ''){
      alert("please enter latitude  1 value");
      return false;
    }
    else if(this.validateDecimalDataValue(this.latitude1)){
      alert("please verify latitude  1 value, you enter more than one decimal");
      return false;
    }
    else if(this.longitude1 == ''){
      alert("please enter longitude  1 value");
      return false;
    }
    else if(this.validateDecimalDataValue(this.longitude1)){
      alert("please verify longitude 1 value, you enter more than one decimal");
      return false;
    }
    else if(this.latitude2 != '' && this.longitude2 == ''){
      alert("please enter longitude 2 value")
      return false;
    }
    else if(this.validateDecimalDataValue(this.latitude2)){
      alert("please verify latitude2 value, you enter more than one decimal");
      return false;
    }
    else if(this.validateDecimalDataValue(this.longitude2)){
      alert("please verify longitude2 value, you enter more than one decimal");
      return false;
    }
    // else if(this.ebAvailability == ''){
    //   alert("please select eb Availability value");
    //   return false;
    // }
    // else if(this.ebAvailabilityDistance == ''){
    //   alert("please enter eb Availability distance value");
    //   return false;
    // }
    // else if(this.dgAvailability == ''){
    //   alert("please select dg Availability value");
    //   return false;
    // }
    // else if(this.totalRatedPower === ''){
    //   alert("please enter total rated power value");
    //   return false;
    // }
    // else if(this.btsType == ''){
    //   alert("please select BTS type");
    //   return false;
    // }
    // else if(this.validateDecimalDataValue(this.totalRatedPower)){
    //   alert("please verify total rated power value, you enter more than one decimal");
    //   return false;
    // }
    else {
      return true;
    }

  }

  gsmAntennaList = [];
  validateGSMAntennaDetails() : any{
    this.gsmAntennaList = [];
    if(this.noOfGSMAntenna == ''){
      alert("please select no of GSM antenna");
      return false;
    }
    else{
      for(let i=1;i<=this.noOfGSMAntenna;i++){
        if($("#gsmAntenna"+i).val()==''){
          alert("please enter GSM antenna "+i+" value");
          return false;
        }
        else{
          let json = {
            id : i,
            gsmAntennaHeight : $("#gsmAntenna"+i).val()
          }
          this.gsmAntennaList.push(json);
        }
      }
      return true;
    }
  }

  validateBasicDetails() : any{
    if(this.circleName == ''){
      alert("please select circle value");
      return false;
    }
    else if(this.airtelLocatorId == ''){
      alert("please enter airtel locator id value");
      return false;
    }
    else if(this.selectedTechnologyList.length == 0){
      alert("please select technology value");
      return false;
    }
    else if(this.city == ''){
      alert("please enter city value");
      return false;
    }
    else if(this.selectedDistrictList.length == 0){
      alert("please select district value");
      return false;
    }
    else if(this.selectedStateList.length == 0){
      alert("please select state value");
      return false;
    }
    else if(this.pincode == ''){
      alert("please select pincode value");
      return false;
    }
    else if(this.selectedClutterList.length == 0){
      alert("please select clutter value");
      return false;
    }
    // else if(this.selectedSiteTypeList.length == 0 && (this.is_NBS_Sharing_Tab || this.is_ODSC_Anchor_Tab || this.is_ODSC_Sharing_Tab)){
    //   alert("please select site type value");
    //   return false;
    // }
    else if(this.is_NBS_Sharing_Tab && this.totalRatedPower === ''){
      alert("please ente total rated power value");
      return false;
    }
    else if(this.is_ODSC_Anchor_Tab && this.longitude1 == ''){
      alert("please enter longitude  1 value");
      return false;
    }
    else if(this.is_ODSC_Anchor_Tab && this.latitude2 != '' && this.longitude2 == ''){
      alert("please enter longitude 2 value")
      return false;
    }
    else if(this.is_ODSC_Sharing_Tab && this.noOfSmallCell == ''){
      alert("please enter no of small cell value")
      return false;
    }
    else if(this.is_ODSC_Sharing_Tab && this.areaPerSmallCell == ''){
      alert("please enter area per cell value")
      return false;
    }
    else if(this.is_ODSC_Sharing_Tab && this.depthPerSmallCell == ''){
      alert("please enter depth per cell value")
      return false;
    }
    else if(this.is_ODC_Smart_Split_Sharing_Tab && this.smartSplitType == ''){
      alert("please select smart split type");
      return false;
    }
    else if(this.is_ODC_Smart_Split_Sharing_Tab && this.floorSpaceOfODCabinet == ''){
      alert("please select floor space of ODC cabinet");
      return false;
    }
    else if(this.is_ODC_Smart_Split_Sharing_Tab && this.acPowerLoad == ''){
      alert("please select AC power load value");
      return false;
    }
    else if(this.is_ODC_Smart_Split_Sharing_Tab && this.totalPowerRequired == ''){
      alert("please enter total power required value");
      return false;
    }
    // else if(this.is_ODC_Smart_Split_Sharing_Tab && this.ebAvailability == ''){
    //   alert("please select eb availability");
    //   return false;
    // }
    else if(this.is_Massive_MIMO_Sharing_Tab && this.existingAirtelConfigurationBeforeMIMO == ''){
      alert("please enter Existing Airtel configuration before MIMO value");
      return false;
    }
    return true;
  }

  closeOdscModal(){
    if(!this.validateODSCDetails()){
      return false;
    }
    let isConfirm = confirm("Do you want to close??");
    if(isConfirm){
      $("#odscModal").modal("hide");
    }
  }

  odscList = [];
  validateODSCDetails() : any{
    this.odscList = [];
    if(this.noOfODSC == ''){
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

  closeRFAntennaModal(){
    if(!this.validateRFAntennaDetails()){
      return false;
    }
    let isConfirm = confirm("Do you want to close??");
    if(isConfirm){
      $("#rfAntennaModal").modal("hide");
    }
    
  }

  rfAntennaList = [];
  validateRFAntennaDetails() : any{
    this.rfAntennaList = [];
    let rfTotalRatedPower : any = 0.0;
    if(this.noOfRFAntenna == ''){
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
        // else if($("#rfRatedPower"+i).val() == ''){
        //   alert("please enter RF rated power " +i+ " value");
        //   return false;
        // }
        else if($("#rfRatedPowerConsumption"+i).val() == ''){
          alert("please enter RF rated power consumption " +i+ " value");
          return false;
        }
        else if(this.validateDecimalDataValue($("#rfRatedPowerConsumption"+i).val())){
          alert("please verify RF rated power consumption " +i+ " value, you enter more than one decimal");
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
            //rfRatedPower : $("#rfRatedPower"+i).val(),
            rfRatedPowerConsumption : $("#rfRatedPowerConsumption"+i).val(),
            rfGain : $("#rfGain"+i).val(),
            rfBand : $("#rfBand"+i).val()
          }
          this.rfAntennaList.push(json);
          //console.log(rfTotalRatedPower);

          rfTotalRatedPower += parseFloat($("#rfRatedPowerConsumption"+i).val());
        }
      }
      $("#rfTotalRatedPower").val(rfTotalRatedPower);
      // this.totalRatedPower += rfTotalRatedPower;
      return true;
    }
  }

  closeMWAntennaModal(){
    if(!this.validateMicroweveDetails()){
      return false;
    }
    let isConfirm = confirm("Do you want to close??");
    if(isConfirm){
      $("#microwaveModal").modal("hide");
    }
  }

  microwaveList = [];
  validateMicroweveDetails() : any{
    this.microwaveList = [];
    if(this.noOfMicrowave == ''){
      alert("please select no of microwave");
      return false;
    }
    else {
      for(let i=1;i<=this.noOfMicrowave;i++){
        if($("#microwaveHeight"+i).val() == ''){
          alert("please enter microwave height " +i+ " value");
          return false;
        }
        else if(this.validateDecimalDataValue($("#microwaveHeight"+i).val())){
          alert("please verify microwave height " +i+ " value, you enter more than one decimal");
          return false;
        }
        else if($("#microwaveDia"+i).val() == ''){
          alert("please enter microwave dia " +i+ " value");
          return false;
        }
        else if(this.validateDecimalDataValue($("#microwaveDia"+i).val())){
          alert("please verify microwave dia " +i+ " value, you enter more than one decimal");
          return false;
        }
        else if($("#microwaveAzimuth"+i).val() == ''){
          alert("please enter microwave azimuth " +i+ " value");
          return false;
        }
        else if(this.validateDecimalDataValue($("#microwaveAzimuth"+i).val())){
          alert("please verify microwave azimuth " +i+ " value, you enter more than one decimal");
          return false;
        }
        else{
          let json = {
            id : i,
            microwaveHeight : $("#microwaveHeight"+i).val(),
            dia : $("#microwaveDia"+i).val(),
            microwaveAzimuth : $("#microwaveAzimuth"+i).val()
          }
          this.microwaveList.push(json);
        }
      }
      return true;
    }
  }

  closeRruModal(){
    if(!this.validateRRUDetails()){
      return false;
    }
    let isConfirm = confirm("Do you want to close??");
    if(isConfirm){
      $("#rruModal").modal("hide");
    }
  }

  rruList = [];
  validateRRUDetails() : any{
    this.rruList = [];
    let rruTotalRatedPower : any = 0.0;
    if(this.noOfRRU == ''){
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
          alert("please enter RRU Model "+i+" value");
          return false;
        }
        else if($("#rruPowerConsumption"+i).val() == ''){
          alert("please enter RRU Rated Power Consumption "+i+" value");
          return false;
        }
        else if(this.validateDecimalDataValue($("#rruPowerConsumption"+i).val())){
          alert("please verify RRU Rated Power Consumption " +i+ " value, you enter more than one decimal");
          return false;
        }
        else if($("#rruWeight"+i).val() == ''){
          alert("please enter RRU weight "+i+" value");
          return false;
        }
        else if(this.validateDecimalDataValue($("#rruWeight"+i).val())){
          alert("please verify RRU weight " +i+ " value, you enter more than one decimal");
          return false;
        }
        else{
          let json = {
            id : i,
            rruMake : $("#rruMake"+i).val(),
            rruModel : $("#rruModel"+i).val(),
            rruPowerConsumption : $("#rruPowerConsumption"+i).val(),
            rruWeight : $("#rruWeight"+i).val()
          }
          this.rruList.push(json);

          rruTotalRatedPower += parseFloat($("#rruPowerConsumption"+i).val());
        }
      }
      $("#rruTotalRatedPower").val(rruTotalRatedPower);
      // this.totalRatedPower += rruTotalRatedPower;
      return true;
    }
  }

  closeBbuModal(){
    if(!this.validateBBUDetails()){
      return false;
    }
    let isConfirm = confirm("Do you want to close??");
    if(isConfirm){
      $("#bbuModal").modal("hide");
    }
  }

  bbuList = [];
  validateBBUDetails() : any{
    this.bbuList = [];
    let bbuTotalRatedPower : any = 0.0;
    if(this.noOfBBU == ''){
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
          alert("please enter BBU rated power consumption "+i+" value");
          return false;
        }
        else if(this.validateDecimalDataValue($("#bbuPowerConsumption"+i).val())){
          alert("please verify BBU rated power consumption " +i+ " value, you enter more than one decimal");
          return false;
        }
		
        else{
          let json = {
            id : i,
            bbuMake : $("#bbuMake"+i).val(),
            bbuModel : $("#bbuModel"+i).val(),
            bbuPowerConsumption : $("#bbuPowerConsumption"+i).val()
          }
          this.bbuList.push(json);

          bbuTotalRatedPower += parseFloat($("#bbuPowerConsumption"+i).val());
        }
      }
      // this.totalRatedPower += bbuTotalRatedPower;
      $("#bbuTotalRatedPower").val(bbuTotalRatedPower);
      return true;
    }
  }

  closeBtsModal(){
    if(!this.validateBTSDetails()){
      return false;
    }
    let isConfirm = confirm("Do you want to close??");
    if(isConfirm){
      $("#btsModal").modal("hide");
    }
  }

  btsList = [];
  validateBTSDetails() : any {
    this.btsList = [];
    if(this.noOfBTS == ''){
      alert("please select no of BTS");
      return false;
    }
    else{
      for(let i=1;i<=this.noOfBTS;i++){
        if($("#btsType"+i).val() == ''){
          alert("please select BTS type "+i+" value");
          return false;
        }
        else if($("#btsMakel"+i).val() == ''){
          alert("please select BTS make "+i+" value");
          return false;
        }
        else if($("#btsModel"+i).val() == ''){
          alert("please enter BTS model "+i+" value");
          return false;
        }
        else if($("#btsFloorspace"+i).val() == ''){
          alert("please enter BTS floorspace "+i+" value");
          return false;
        }
        else if(this.validateDecimalDataValue($("#btsFloorspace"+i).val())){
          alert("please verify BTS floorspace " +i+ " value, you enter more than one decimal");
          return false;
        }
        else if($("#btsPower"+i).val() == ''){
          alert("please enter BTS power "+i+" value");
          return false;
        }
        else if(this.validateDecimalDataValue($("#btsPower"+i).val())){
          alert("please verify BTS power " +i+ " value, you enter more than one decimal");
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
      return true;
    }
  } 

  closeMcbModal(){
    if(!this.validateMCBDetails()){
      return false;
    }
    let isConfirm = confirm("Do you want to close??");
    if(isConfirm){
      $("#mcbModal").modal("hide");
    }
  }

  mcbList = [];
  validateMCBDetails() : any {
    this.mcbList = [];
    if(this.noOfMCB == ''){
      alert("please select no of MCB");
      return false;
    }
    else{
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
  } 
  
  validateOtherActiveInfoDetails() : any{
    //alert("hhh");
    if(this.additionalLoad == ''){
      alert("please enter additional load value");
      return false;
    }
    else if(this.totalRatedPower == ''){
      alert("please enter total rated power value");
      return false;
    }
    else if(this.mwRack == ''){
      alert("please enter mw rack value");
      return false;
    }
    // else if(this.weightOfAdditionalAntenna == ''){
    //   alert("please enter weight Of Additional Antenna value");
    //   return false;
    // }
    // else if(this.rfAntennaMountHeight == ''){
    //   alert("please enter rf Antenna Mount Height value");
    //   return false;
    // }
    // else if(this.mwAntennaMountHeight == ''){
    //   alert("please enter mw Antenna Mount Height value ");
    //   return false;
    // }
    else if(this.noOfUSpaceRequired == ''){
      alert("please select no of space required value ");
      return false;
    }
    else if(this.fiberTermination == ''){
      alert("please select fiber termination value");
      return false;
    }
    // else if(this.remark == ''){
    //   alert("please enter remark value");
    //   return false;
    // }
    else {
      return true;
    }
  }

  closeMassiveMimoModal(){
    if(!this.validateMassiveMIMOAntennaDetails()){
      return false;
    }
    let isConfirm = confirm("Do you want to close??");
    if(isConfirm){
      $("#massiveMIMOAntennaModal").modal("hide");
    }
  }

  massiveMIMOAntennaList = [];
  validateMassiveMIMOAntennaDetails() : any{
    //alert("hhh");
    this.massiveMIMOAntennaList = [];
    if(this.noOfMassiveMIMOAntenna == ''){
      alert("please select No of Massive MIMO Antenna");
      return false;
    }
    else{
      for(let i=1;i<=this.noOfMassiveMIMOAntenna;i++){
        if($("#mimoAntennaWeight"+i).val() == ''){
          alert("Enter massive mimo antenna weight "+i+" value");
          return false;
        }
        else if($("#mimoAntennaArea"+i).val() == ''){
          alert(" Enter massive mimo antenna area "+i+" value");
          return false;
        }
        else if($("#mimoAntennaMake"+i).val() == ''){
          alert("Enter massive mimo antenna make "+i+" value");
          return false;
        }
        else if($("#mimoAntennaModel"+i).val() == ''){
          alert("Enter massive mimo antenna make "+i+" value");
          return false;
        }
        else {
          let json = {
            id : i,
            mimoAntennaWeight : $("#mimoAntennaWeight"+i).val(),
            mimoAntennaArea : $("#mimoAntennaArea"+i).val(),
            mimoAntennaMake : $("#mimoAntennaMake"+i).val(),
            mimoAntennaModel : $("#mimoAntennaModel"+i).val()
          }
          this.massiveMIMOAntennaList.push(json);
        }
      }
      return true;
    }
  }

  saveNBSDetails(){

    if(this.is_CreateNBS_Tab){
      if(!this.validateBasicInfoDetails()){
        return false;
      }
      else if(!this.validateRFAntennaDetails()){
        return false;
      }
      else if(!this.validateMicroweveDetails()){
        return false;
      }
      else if(this.btsType == ''){
        alert("please select BTS type");
        return false;
      }
      else if(!this.validateBBUDetails()){
        return false;
      }
      else if(!this.validateRRUDetails()){
        return false;
      }
      else if(!this.validateBTSDetails()){
        return false;
      }
      else if(!this.validateMCBDetails()){
        return false;
      }
      else if(!this.validateOtherActiveInfoDetails()){
        return false;
      }
    }
    else if(this.is_NBS_Sharing_Tab){
      if(!this.validateBasicDetails()){
        return false;
      }
      else if(this.tviSiteId == ''){
        alert("please select tvi site id");
        return false;
      }
      else if(!this.validateRFAntennaDetails()){
        return false;
      }
      else if(!this.validateMicroweveDetails()){
        return false;
      }
      else if(!this.validateBBUDetails()){
        return false;
      }
      else if(!this.validateRRUDetails()){
        return false;
      }
      else if(!this.validateBTSDetails()){
        return false;
      }
      else if(!this.validateMCBDetails()){
        return false;
      }
    }
    else if(this.is_ODSC_Anchor_Tab){
      if(!this.validateBasicDetails()){
        return false;
      }
      else if(!this.validateODSCDetails()){
        return false;
      }
      else if(!this.validateMicroweveDetails()){
        return false;
      }
    }
    else if(this.is_ODSC_Sharing_Tab){
      if(!this.validateBasicDetails()){
        return false;
      }
      else if(this.tviSiteId == ''){
        alert("please select tvi site id");
        return false;
      }
      else if(!this.validateMicroweveDetails()){
        return false;
      }
    }
    else if(this.is_ODC_Smart_Split_Sharing_Tab){
      if(!this.validateBasicDetails()){
        return false;
      }
      else if(this.tviSiteId == ''){
        alert("please select tvi site id");
        return false;
      }
    }
    else if(this.is_COW_Tab || this.is_COW_Sharing_Tab){
      if(!this.validateRFAntennaDetails()){
        return false;
      }
      else if(!this.validateMicroweveDetails()){
        return false;
      }
      else if(!this.validateBBUDetails()){
        return false;
      }
      else if(!this.validateRRUDetails()){
        return false;
      }
      else if(!this.validateBTSDetails()){
        return false;
      }
      // else if(!this.validateOtherActiveInfoDetails()){
      //   return false;
      // }
    }

    else if(this.is_Massive_MIMO_Sharing_Tab){
      if(!this.validateBasicDetails()){
        return false;
      }
      else if(this.tviSiteId == ''){
        alert("please select tvi site id");
        return false;
      }
      else if(!this.validateMassiveMIMOAntennaDetails()){
        return false;
      }
    }

    if(this.remark == ''){
      alert("please enter remark value");
      return false;
    }

    this.latitude2 = this.latitude2 == "" ? "0.0" : this.latitude2;
    this.longitude2 = this.longitude2 == "" ? "0.0" : this.longitude2;
    this.pincode = this.pincode == "" ? "0" : this.pincode;
    this.noOfGSMAntenna = this.noOfGSMAntenna == "" ? "0" : this.noOfGSMAntenna;
    this.noOfODSC = this.noOfODSC == "" ? "0" : this.noOfODSC;
    this.weightOfAdditionalAntenna = this.weightOfAdditionalAntenna == "" ? "0" : this.weightOfAdditionalAntenna;
    this.rfAntennaMountHeight = this.rfAntennaMountHeight == "" ? "0" : this.rfAntennaMountHeight;
    this.mwAntennaMountHeight = this.mwAntennaMountHeight == "" ? "0" : this.mwAntennaMountHeight;
    this.noOfMassiveMIMOAntenna = this.noOfMassiveMIMOAntenna == "" ? "0" : this.noOfMassiveMIMOAntenna;
    this.uSpaceForBBU = this.uSpaceForBBU == "" ? "0" : this.uSpaceForBBU;
    this.powerRequirement = this.powerRequirement == "" ? "0" : this.powerRequirement;
    this.powerThresholdInCaseOfMIMOExpansion = this.powerThresholdInCaseOfMIMOExpansion == "" ? "0" : this.powerThresholdInCaseOfMIMOExpansion;
    this.additionalLLRDueToAdditionalMIMO = this.additionalLLRDueToAdditionalMIMO == "" ? "0" : this.additionalLLRDueToAdditionalMIMO;
    this.totalPowerRequired = this.totalPowerRequired == "" ? "0" : this.totalPowerRequired;
    this.ratedPowerConsumption = this.ratedPowerConsumption == "" ? "0" : this.ratedPowerConsumption;
    this.towerWeight = this.towerWeight == "" ? "0" : this.towerWeight;
    this.rackSpaceForBBU = this.rackSpaceForBBU == "" ? "0" : this.rackSpaceForBBU;
    this.rackSpaceForMW = this.rackSpaceForMW == "" ? "0" : this.rackSpaceForMW;
    this.additionBTSFloorSpace = this.additionBTSFloorSpace == "" ? "0" : this.additionBTSFloorSpace;
    this.aglRequiredODSC = this.aglRequiredODSC == "" ? "0" : this.aglRequiredODSC;
    this.aglRequiredMW = this.aglRequiredMW == "" ? "0" : this.aglRequiredMW;
    this.totalRatedPower = this.totalRatedPower == "" ? "0.0" : this.totalRatedPower;
    this.noOfSmallCell = this.noOfSmallCell == "" ? "0" : this.noOfSmallCell;
    this.areaPerSmallCell = this.areaPerSmallCell == "" ? "0" : this.areaPerSmallCell;
    this.depthPerSmallCell = this.depthPerSmallCell == "" ? "0" : this.depthPerSmallCell;
    this.heightOfHighestAntenna = this.heightOfHighestAntenna == "" ? "0" : this.heightOfHighestAntenna;
    this.weightOfSmallCell = this.weightOfSmallCell == "" ? "0" : this.weightOfSmallCell;
    this.ratedPower = this.ratedPower == "" ? "0" : this.ratedPower;
    this.uSpace = this.uSpace == "" ? "0" : this.uSpace;
    this.acbackupRequired2Hrs = this.acbackupRequired2Hrs == "" ? "0" : this.acbackupRequired2Hrs;
    this.ebAvailabilityDistance = this.ebAvailabilityDistance == "" ? "0.0" : this.ebAvailabilityDistance;
    this.towerHeight = this.towerHeight == "" ? "0.0" : this.towerHeight;
    this.additionalLoad = this.additionalLoad == "" ? "0.0" : this.additionalLoad;
    this.noOfUSpaceRequired = this.noOfUSpaceRequired == "" ? "0" : this.noOfUSpaceRequired;
    this.windSpeed = this.windSpeed == "" ? "0.0" : this.windSpeed;
    this.aglRequired = this.aglRequired == "" ? "0.0" : this.aglRequired;
    this.noOfRFAntenna = this.noOfRFAntenna == "" ? "0" : this.noOfRFAntenna;
    this.noOfBBU = this.noOfBBU == "" ? "0" : this.noOfBBU;
    this.noOfRRU = this.noOfRRU == "" ? "0" : this.noOfRRU;
    this.noOfBTS = this.noOfBTS == "" ? "0" : this.noOfBTS;
    this.noOfMCB = this.noOfMCB == "" ? "0" : this.noOfMCB;
    this.noOfMicrowave = this.noOfMicrowave == "" ? "0" : this.noOfMicrowave;

    
    let saveNBSDetaJson = {
      loginEmpId : this.loginEmpId,
      currentTab : this.currentTab,
      opcoId : this.opcoId,
      circleName : this.circleName,
      tviSiteId : this.tviSiteId,
      airtelSiteId : this.airtelSiteId,
      airtelLocatorId : this.airtelLocatorId,
      technology : this.technology,
      siteAddress : this.siteAddress,
      city : this.city,
      townVillage : this.townVillage,
      district : this.district,
      state : this.state,
      pincode : this.pincode,
      clutter : this.clutter,
      windSpeed : this.windSpeed,
      siteType : this.siteType,
      towerHeight : this.towerHeight,
      aglRequired : this.aglRequired,
      frequencyUserByOpco : this.frequencyUserByOpco,
      latitude1 : this.latitude1,
      longitude1 : this.longitude1,
      latitude2 : this.latitude2,
      longitude2 : this.longitude2,
      ebAvailability : this.ebAvailability,
      ebAvailabilityDistance : this.ebAvailabilityDistance,
      dgAvailability : this.dgAvailability,
      noOfRFAntenna : this.noOfRFAntenna,
      rfAntennaList : this.rfAntennaList,
      noOfGSMAntenna : this.noOfGSMAntenna,
      noOfBBU : this.noOfBBU,
      bbuList : this.bbuList,
      noOfRRU : this.noOfRRU,
      rruList : this.rruList,
      noOfBTS : this.noOfBTS,
      btsList : this.btsList,
      noOfMCB : this.noOfMCB,
      mcbList : this.mcbList,
      additionalLoad : this.additionalLoad,
      noOfMicrowave : this.noOfMicrowave,
      microwaveList : this.microwaveList,
      btsType : this.btsType,
      noOfODSC : this.noOfODSC,
      odscList : this.odscList,
      mwRack : this.mwRack,
      weightOfAdditionalAntenna : this.weightOfAdditionalAntenna,
      rfAntennaMountHeight : this.rfAntennaMountHeight,
      mwAntennaMountHeight : this.mwAntennaMountHeight,
      noOfUSpaceRequired : this.noOfUSpaceRequired,
      fiberTermination : this.fiberTermination,
      existingAirtelConfigurationBeforeMIMO : this.existingAirtelConfigurationBeforeMIMO,
      noOfMassiveMIMOAntenna : this.noOfMassiveMIMOAntenna,
      massiveMIMOAntennaList : this.massiveMIMOAntennaList,
      // weightOfAntenna : this.weightOfAntenna,
      // areaOfAntenna : this.areaOfAntenna,
      uSpaceForBBU : this.uSpaceForBBU,
      powerRequirement : this.powerRequirement,
      powerThresholdInCaseOfMIMOExpansion : this.powerThresholdInCaseOfMIMOExpansion,
      additionalLLRDueToAdditionalMIMO : this.additionalLLRDueToAdditionalMIMO,
      smartSplitType : this.smartSplitType,
      floorSpaceOfODCabinet : this.floorSpaceOfODCabinet,
      acPowerLoad : this.acPowerLoad,
      totalPowerRequired : this.totalPowerRequired,
      cowType : this.cowType,
      serviceContractPeriod : this.serviceContractPeriod,
      ratedPowerConsumption : this.ratedPowerConsumption,
      towerWeight : this.towerWeight,
      rackSpaceForBBU : this.rackSpaceForBBU,
      rackSpaceForMW : this.rackSpaceForMW,
      powerSupply : this.powerSupply,
      additionBTSFloorSpace : this.additionBTSFloorSpace,
      aglRequiredODSC : this.aglRequiredODSC,
      aglRequiredMW : this.aglRequiredMW,
      poleHeight : this.poleHeight,
      additionalPoles : this.additionalPoles,
      airtelBackhaul : this.airtelBackhaul,
      acDcBackup : this.acDcBackup,
      additionalPowerBackup2Hrs : this.additionalPowerBackup2Hrs,
      totalRatedPower : this.totalRatedPower,
      camuflauging : this.camuflauging,
      noOfSmallCell : this.noOfSmallCell,
      areaPerSmallCell : this.areaPerSmallCell,
      depthPerSmallCell : this.depthPerSmallCell,
      heightOfHighestAntenna : this.heightOfHighestAntenna,
      weightOfSmallCell : this.weightOfSmallCell,
      ratedPower : this.ratedPower,
      uSpace : this.uSpace,
      acbackupRequired2Hrs : this.acbackupRequired2Hrs,
      additionalODSCRequired : this.additionalODSCRequired,
      additionalPowerRequired : this.additionalPowerRequired,
      existingLLROfTVISite : this.existingLLROfTVISite,
      additionalLLRDueToAdditionalODSC : this.additionalLLRDueToAdditionalODSC,
      cumulativePANIndiaODCSSharingSOCount : this.cumulativePANIndiaODCSSharingSOCount,
      conversionOfSharingODSCIntoMacroSite : this.conversionOfSharingODSCIntoMacroSite,
      remark : this.remark
    }

    //console.log(JSON.stringify(saveNBSDetaJson));
    // alert("success")
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
