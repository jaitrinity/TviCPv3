import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { CreateNBSService } from 'src/app/shared/services/createNBSService';
import { Constant } from 'src/app/shared/constant/Constant';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-odsc-anchor',
  templateUrl: './odsc-anchor.component.html',
  styleUrls: ['./odsc-anchor.component.css']
})
export class OdscAnchorComponent implements OnInit {
  tabName : string = "ODSC_Anchor";
  isODSCTab : boolean = false;
  isHPSCTab : boolean = false;
  circleName = "";
  latitude1 = "";
  longitude1 = "";
  latitude2 = "";
  longitude2 = "";
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
  powerRatingOfEquipment = "";
  noOfU = "";
  typeOfSite = "";
  noOfPole : any = "";
  totalRatedPower : any = "";
  noOfPoleList = [];
  noOfHPSCAntenna : any = "";
  noOfHPSCAntennaList = [];

  noOfBBU : any = "";
  noOfBBUList = [];

  noOfRRU : any = "";
  noOfRRUList = [];

  rruMakeList = [];
  bbuMakeList = [];

  bbuPositioningList = [];

  bbuAutoPopUpList = [];
  rruAutoPopUpList = [];

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
      if(currentUrl === "/layout/hpsc"){
        this.tabName = "HPSC";
        this.isHPSCTab = true;
      }
      else{
        this.isODSCTab = true;
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
        else if(paramCode == "noOfBBU"){
          for(let i=0;i<=paramDesc;i++){
            let json = {
              id : i
            }
            this.noOfBBUList.push(json)
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
      }
  }

  refreshPage(){
    this.route.navigateByUrl('/layout/dashbord', { skipLocationChange: true }).then(() => {
      if(this.tabName == "ODSC_Anchor"){
        this.route.navigate(['/layout/odsc-anchor']);
      }
      else{
        this.route.navigate(['/layout/hpsc']);
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
    
  }

  addInTotalRatedPower(){
    this.addInTotal();
    let bbuTotalRatedPower = $("#bbuTotalRatedPower").val() == '' ? '0' : $("#bbuTotalRatedPower").val();
    let rruTotalRatedPower = $("#rruTotalRatedPower").val() == '' ? '0' : $("#rruTotalRatedPower").val();

    this.totalRatedPower = 
                            parseFloat(bbuTotalRatedPower) + 
                            parseFloat(rruTotalRatedPower) + 
                            parseFloat(this.powerRatingOfEquipment);
  }

  validateBasicDetails() : any{
    if(this.circleName == ''){
      alert("please select circle name");
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
    else if(this.latitude2 != '' && this.longitude2 == ''){
      alert("please enter longitude 2 value")
      return false;
    }
    else if(this.aglRequiredODSC == ''){
      if(this.isODSCTab)
        alert("please AGL required for ODSC value");
      else
        alert("please AGL required for HPSC value");
      return false;
    }
    else if(this.airtelBackhaul == ''){
      alert("please select Backhaul value")
      return false;
    }
    else if(this.acDcBackup == ''){
      alert("please select AC + DC Backup value")
      return false;
    }
    else if(this.additionalPowerBackup2Hrs == ''){
      alert("please select Additional power back up of 2 Hrs value");
      return false;
    }
    else if(this.camuflauging == ''){
      alert("please select Camuflauging value");
      return false;
    }
    return true;
  }

  validateNoOfPole() : any{
    this.noOfPoleList = [];
    if(this.noOfPole == ""){
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
    if(this.noOfHPSCAntenna == ""){
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

  saveNBSDetails(){
    if(!this.validateBasicDetails()){
      return false;
    }
    else if(this.isHPSCTab && !this.validateNoOfPole()){
      return false;
    }
    else if(this.isHPSCTab && !this.validateNoOfHpscAntenna()){
      return false;
    }
    else if(this.isHPSCTab && !this.validateBBUDetails()){
      return false;
    }
    else if(this.isHPSCTab && !this.validateRRUDetails()){
      return false;
    }
    else if(this.isHPSCTab && this.powerRatingOfEquipment == ""){
      alert("please enter Power rating of equipment(In Watt) value");
      return false;
    }
    else if(this.isHPSCTab && this.noOfU == ""){
      alert("please enter No of U value ");
      return false;
    }
    else if(this.isHPSCTab && this.typeOfSite == ""){
      alert("please enter Type of sites value");
      return false;
    }

    if(this.remark == ''){
      alert("please enter remark value");
      return false;
    }

    if(this.isHPSCTab){
      this.addInTotalRatedPower();
    }

    this.technology = this.createCommaSeprate(this.selectedTechnologyList);

    this.latitude2 = this.latitude2 == "" ? "0.0" : this.latitude2;
    this.longitude2 = this.longitude2 == "" ? "0.0" : this.longitude2;
    this.noOfPole = this.noOfPole == "" ? "0" : this.noOfPole;
    this.noOfHPSCAntenna = this.noOfHPSCAntenna == "" ? "0" : this.noOfHPSCAntenna;
    this.noOfBBU = this.noOfBBU == "" ? "0" : this.noOfBBU;
    this.noOfRRU = this.noOfRRU == "" ? "0" : this.noOfRRU;
    this.powerRatingOfEquipment = this.powerRatingOfEquipment == "" ? "0.0" : this.powerRatingOfEquipment;
    this.noOfU = this.noOfU == "" ? "0" : this.noOfU;
    this.totalRatedPower = this.totalRatedPower == "" ? "0" : this.totalRatedPower;

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
      latitude2 : this.latitude2,
      longitude2 : this.longitude2,
      aglRequiredODSC : this.aglRequiredODSC,
      airtelBackhaul : this.airtelBackhaul,
      acDcBackup : this.acDcBackup,
      additionalPowerBackup2Hrs : this.additionalPowerBackup2Hrs,
      camuflauging : this.camuflauging,
      noOfPole : this.noOfPole,
      noOfPoleList : this.noOfPoleList,
      noOfHPSCAntenna : this.noOfHPSCAntenna,
      noOfHPSCAntennaList : this.noOfHPSCAntennaList,
      noOfBBU : this.noOfBBU,
      bbuList : this.bbuList,
      noOfRRU : this.noOfRRU,
      rruList : this.rruList,
      powerRatingOfEquipment : this.powerRatingOfEquipment,
      uSpace : this.noOfU,
      siteType : this.typeOfSite,
      totalRatedPower : this.totalRatedPower,
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

}
