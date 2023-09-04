import { Component, OnInit } from '@angular/core';
import { CreateNBSService } from 'src/app/shared/services/createNBSService';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Constant } from 'src/app/shared/constant/Constant';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-new-tenency',
  templateUrl: './new-tenency.component.html',
  styleUrls: ['./new-tenency.component.css']
})
export class NewTenencyComponent implements OnInit {
  tabName : string = "New_Tenency";
  circleName : any = "";
  tviSiteId : any = "";
  tviSiteIdList = [];
  selectedTviSiteIdList = [];
  airtelSiteId : any = "";
  airtelLocatorId : any = "";
  aglRequired : any = "";
  siteName : any = "";
  technology : any = "";
  technologyList = [];
  selectedTechnologyList = [];
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
  loginEmpId = "";
  loginEmpRole = "";
  btsType = "";
  commaSeparateCircleName = "";

  noOfRFAntenna : any = "";
  noOfMicrowave : any = "";
  noOfBBU : any = "";
  noOfRRU : any = "";
  noOfBTS : any = "";
  noOfMCB : any = "";
  
  noOfRFAntennaList = [];
  noOfMicrowaveList = [];
  noOfBBUList = [];
  noOfBTSList = [];
  noOfRRUList = [];
  noOfMCBList = [];

  mwMakeList = [];
  RfAntModelList = [];
  bbuAutoPopUpList = [];
  rfAntennaAutoPopUpList = [];
  rruAutoPopUpList = [];
  mwAutoPopUpList = [];

  btsTypeList = [];
  rruMakeList = [];
  bbuMakeList = [];
  bbuPositioningList = [];
  btsMakeList = [];
  operator = "";
  additionalLoad = "";
  loadOfU : any = "";
  totalRatedPower : any = "";
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

    this.getAutoPopUp();
    this.getNoOfList();
  }

  getAutoPopUp(){
    // BBU
    this.bbuAutoPopUpList = JSON.parse(localStorage.getItem("bbuAutoPopUpList"));
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
    this.rfAntennaAutoPopUpList = JSON.parse(localStorage.getItem("rfAntennaAutoPopUpList"));
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
    this.rruAutoPopUpList = JSON.parse(localStorage.getItem("rruAutoPopUpList"));
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
    this.mwAutoPopUpList = JSON.parse(localStorage.getItem("mwAutoPopUpList"));
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
  }

  opcoRemarkInSP = "";
  allNoOfList = [];
  getNoOfList(){
    this.allNoOfList = JSON.parse(localStorage.getItem("allNoOfList"));
      
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
        
        else if(paramCode == "noOfMCB"){
          for(let i=0;i<=paramDesc;i++){
            let json = {
              id : i
            }
            this.noOfMCBList.push(json)
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
        else if(paramCode == "NewTenency_Tab_Technology"){
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
        

        // if(i == this.allNoOfList.length-1){
        //   if(this.version != this.portalRunningVersion){
        //     alert("Some update on portal, please reload page by click on browser reload button.")
        //     localStorage.clear();
        //     this.route.navigate(['/login']);
        //   }
        //   else{
        //     this.getNbsDetails(1);
        //   }
        // }
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

  onSelectOrDeSelectTviSiteId(item: any) {
    this.tviSiteId = item.paramCode;
    if(this.selectedTviSiteIdList.length != 0){
      let isExist = this.checkIsAlreadyExistSiteIdAsNewTenent();
      if(isExist){
        
      }
      else{
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
        
    }
    else{
      this.setAsDefaultAllField()
    }
  }

  checkIsAlreadyExistSiteIdAsNewTenent() : boolean{
    let isExist = false;
    let json = {
      tviSiteId : this.tviSiteId,
      operator : this.operator
    }
    this.sharedService.checkIsAlreadyExistSiteIdAsNewTenent(json)
    .subscribe( (response) =>{
      isExist = response.status;
      if(isExist){
        alert(response.responseDesc);
        this.setAsDefaultAllField();
      }
    },
    (error)=>{
      this.toastr.warning(Constant.returnServerErrorMessage("checkIsAlreadyExistSiteIdAsNewTenent"),"Alert !");
    })
    return isExist;
  }

  setAsDefaultAllField(){
    this.airtelSiteId = '';
    this.latitude1 = '';
    this.longitude1 = '';
    this.aglRequired = '';
    this.siteName = '';
    this.siteAddress = "";
    this.district = "";
    this.state = "";
    this.siteType = "";
    this.clutter = "";
  }

  refreshPage(){
    this.route.navigateByUrl('/layout/dashbord', { skipLocationChange: true }).then(() => {
      this.route.navigate(['/layout/new-tenency']);
    }); 
  }

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

  createRange(number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }

  showCurrentModal(modalId : any){
    $("#"+modalId).modal({
      backdrop : 'static',
      keyboard : false
    });
  }

  closeCurrentModal(modalId : any){
    $("#"+modalId).modal("hide");
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

  validateDecimalDataValue(fieldValue : any) : any{
    let splitValue = fieldValue.split(".");
    if(splitValue.length > 2){
      return true;
    }
    return false;
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
      alert("please enter "+this.operator+" site id value");
      return false;
    }
    else if(this.selectedTechnologyList.length == 0){
      alert("please select technology value");
      return false;
    }
    else {
      return true;
    }

  }

  rfAntennaList = [];
  validateRFAntennaDetails() : any{
    this.rfAntennaList = [];
    if(this.noOfRFAntenna == ''){
      alert("please select No of RF antenna");
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

  microwaveList = [];
  validateMicroweveDetails() : any{
    this.microwaveList = [];
    if(this.noOfMicrowave == ""){
      alert("Please select No of microwave");
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

  rruList = [];
  validateRRUDetails() : any{
    this.rruList = [];
    if(this.noOfRRU == ""){
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

  bbuList = [];
  validateBBUDetails() : any{
    this.bbuList = [];
    if(this.noOfBBU == ""){
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

  btsList = [];
  validateBTSDetails() : any {
    this.btsList = [];
    if(this.noOfBTS == ""){
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

  mcbList = [];
  validateMCBDetails() : any {
    this.mcbList = [];
    if(this.noOfMCB == ""){
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
    }
    return true;
  } 

  saveNBSDetails(){

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

    if(this.additionalLoad == ''){
      alert("please enter `Additional Load (Node/Misc.) (in Watt)` value");
      return false;
    }
    else if(this.totalRatedPower === ''){
      alert("please click on `Click to add in Total Rated Power` link");
      return false;
    }

    if(this.remark == ''){
      alert("please enter remark value");
      return false;
    }

    this.addInTotalRatedPower();

    this.technology = this.createCommaSeprate(this.selectedTechnologyList);

    this.latitude2 = this.latitude2 == "" ? "0.0" : this.latitude2;
    this.longitude2 = this.longitude2 == "" ? "0.0" : this.longitude2;

    this.noOfRFAntenna = this.noOfRFAntenna == "" ? "0" : this.noOfRFAntenna;
    this.noOfMicrowave = this.noOfMicrowave == "" ? "0" : this.noOfMicrowave;
    this.noOfBBU = this.noOfBBU == "" ? "0" : this.noOfBBU;
    this.noOfRRU = this.noOfRRU == "" ? "0" : this.noOfRRU;
    this.noOfBTS = this.noOfBTS == "" ? "0" : this.noOfBTS;
    this.noOfMCB = this.noOfMCB == "" ? "0" : this.noOfMCB;
    this.totalRatedPower = this.totalRatedPower == "" ? "0" : this.totalRatedPower;
    this.additionalLoad = this.additionalLoad == "" ? "0" : this.additionalLoad;
    this.loadOfU = this.loadOfU == "" ? "0.0" : this.loadOfU;
    
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
      latitude2 : this.latitude2,
      longitude2 : this.longitude2,
      technology : this.technology,
      siteAddress : this.siteAddress,
      district : this.district,
      state : this.state,
      siteType : this.siteType,
      clutter : this.clutter,
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
      totalRatedPower : this.totalRatedPower,
      additionalLoad : this.additionalLoad,
      loadOfU : this.loadOfU,
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
    // 
    let objList = this.mwAutoPopUpList.filter(x => x.make == make);
    // 
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
