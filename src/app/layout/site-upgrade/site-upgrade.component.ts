import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateNBSService } from 'src/app/shared/services/createNBSService';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Constant } from 'src/app/shared/constant/Constant';
declare var $;

@Component({
  selector: 'app-site-upgrade',
  templateUrl: './site-upgrade.component.html',
  styleUrls: ['./site-upgrade.component.css']
})
export class SiteUpgradeComponent implements OnInit {
  tabName : string = "Site_Upgrade";
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
  uSpaceList = [];
  mwMakeList = [];
  rruMakeList = [];
  bbuMakeList = [];
  bbuPositioningList = [];
  
  isExtensionType = false;
  extensionType : any = "";
  extensionTypeList = [];
  rfFilterList = [];
  countOfRfFilter : any = "";
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

  RfAntModelList = [];
  isRF_Antenna : boolean = false;
  isMicrowave : boolean = false;
  isBTS_Type : boolean = false;
  isBBU : boolean = false;
  isRRU : boolean = false;
  isBTS : boolean = false;
  isMCB : boolean = false;
  isMIMO : boolean = false;
  isIP55 : boolean = false;
  isRRU_Swap_Delete : boolean = false;
  isRRU_Swap_Add : boolean = false;
  isAdditionalUspace : boolean = false;

  isMW_Swap_Delete : boolean = false;
  isMW_Swap_Add : boolean = false;
  isBBU_Swap_Delete : boolean = false;
  isBBU_Swap_Add : boolean = false;

  isRF_Swap_Delete : boolean = false;
  isRF_Swap_Add : boolean = false;

  noOfRFAntenna : any = "";
  noOfRFAntenna_Add : any = "";
  noOfRFAntenna_Delete : any = "";
  noOfMicrowave : any = "";
  noOfBBU : any = "";
  noOfRRU : any = "";
  noOfBTS : any = "";
  noOfMCB : any = "";
  noOfIP55 : any = "";
  noOfMassiveMIMOAntenna : any = "";
  noOfRRU_Delete : any = "";
  noOfRRU_Add : any = "";
  noOfBBU_Delete : any = "";
  noOfBBU_Add : any = "";
  noOfMicrowave_Delete : any = "";
  noOfMicrowave_Add : any = "";
  
  noOfRFAntennaList = [];
  noOfMicrowaveList = [];
  noOfBBUList = [];
  noOfBTSList = [];
  noOfRRUList = [];
  noOfMCBList = [];
  noOfMassiveMIMOAntennaList = [];
  noOfRRU_SwapList = [];
  noOfIP55List = [];

  btsTypeList = [];

  bbuAutoPopUpList = [];
  rfAntennaAutoPopUpList = [];
  rruAutoPopUpList = [];
  mwAutoPopUpList = [];

  operator = "";
  additionalLoad = "";
  noOfUSpaceRequired : any = "";
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
      let currentUrl = route.url;
      if(currentUrl === "/layout/hpsc"){
        this.tabName = "HPSC";
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
        
        else if(paramCode == "noOfRRU"){
          for(let i=0;i<=paramDesc;i++){
            let json = {
              id : i
            }
            this.noOfRRUList.push(json)
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
        else if(paramCode == "noOfIP55"){
          for(let i=0;i<=paramDesc;i++){
            let json = {
              id : i
            }
            this.noOfIP55List.push(json)
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
        else if(paramCode == "technology_For_SiteUpgrade"){
          let technology_For_SiteUpgrade = paramDesc.split(",");
          let tempTechnogyList = [];
          for(let i=0;i<technology_For_SiteUpgrade.length;i++){
            let json = {
              "paramCode" : technology_For_SiteUpgrade[i],
              "paramDesc" : technology_For_SiteUpgrade[i]+" "
            }
            tempTechnogyList.push(json);
          }
          this.technologyList = tempTechnogyList;
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
        else if(paramCode == "extensionType"){
          let extensionTypeSplit = paramDesc.split(",");
          let tempExtensionTypeList = [];
          for(let i=0;i<extensionTypeSplit.length;i++){
            let json = {
              "paramCode" : extensionTypeSplit[i],
              "paramDesc" : extensionTypeSplit[i]+" "
            }
            tempExtensionTypeList.push(json);
          }
          this.extensionTypeList = tempExtensionTypeList;
        }
        else if(paramCode == "countOfRF_Filter"){
          let splitData = paramDesc.split(",");
          let tempList = [];
          for(let i=0;i<splitData.length;i++){
            let json = {
              "paramCode" : splitData[i],
              "paramDesc" : splitData[i]+" "
            }
            tempList.push(json);
          }
          this.rfFilterList = tempList;
        }
        
      }
  }

  setAllActiveInfoDefault(){
    this.totalRatedPower = "";
    this.additionalLoad = "";
    this.noOfUSpaceRequired = "";
    this.isRF_Antenna = false;
    this.isMicrowave = false;
    this.isBTS_Type = false;
    this.isBBU = false;
    this.isRRU  = false;
    this.isBTS = false;
    this.isMCB = false;
    this.isMIMO = false;
    this.isIP55 = false;
    this.isRRU_Swap_Delete = false;
    this.isRRU_Swap_Add = false;
    this.isAdditionalUspace = false;
    this.isMW_Swap_Delete = false;
    this.isMW_Swap_Add = false;
    this.isBBU_Swap_Delete = false;
    this.isBBU_Swap_Add = false;
    this.isRF_Swap_Add = false;
    this.isRF_Swap_Delete = false;

    this.noOfRFAntenna = "";
    this.noOfRFAntenna_Add = "";
    this.noOfRFAntenna_Delete = "";
    this.noOfMicrowave = "";
    this.noOfBBU = "";
    this.noOfRRU = "";
    this.noOfBTS = "";
    this.noOfMCB = "";
    this.noOfIP55 = "";
    this.noOfMassiveMIMOAntenna = "";
    this.noOfRRU_Delete = "";
    this.noOfRRU_Add = "";
  
    this.rfAntennaList = [];
    this.rfAntennaDeleteList = [];
    this.rfAntennaAddList = [];
    this.microwaveList = [];
    this.bbuList = [];
    this.btsList = [];
    this.btsType = "";
    this.mcbList= [];
    this.massiveMIMOAntennaList = [];
    this.rruDeleteList = [];
    this.rruAddList = [];
    this.ip55List = [];
  }

  changeTechnology(){
    this.setAllActiveInfoDefault();
    this.isExtensionType = false;
    this.extensionType = "";
    if(this.technology == "FDD" || this.technology == "FDD/1800" || this.technology == "TDD" || this.technology == "TDD/2300" || this.technology == "TDD/2500" || this.technology == "L850" || this.technology == "L2100" || 
    this.technology == "L900" || this.technology == "2G" || this.technology == "3G" || this.technology == "5G"){
      this.isExtensionType = true;
    }
    else if(this.technology == "MW"){
      this.isMicrowave = true;
    }
    else if(this.technology == "MW Swap"){
      this.isMW_Swap_Delete = true;
      this.isMW_Swap_Add = true;
    }
    else if(this.technology == "U space"){
      this.isAdditionalUspace = true;
    }
    else if(this.technology == "RRH Swap"){
      this.isRRU_Swap_Delete = true;
      this.isRRU_Swap_Add = true;
    
    }
    else if(this.technology == "MIMO"){
      this.isMIMO = true;
    }
    else if(this.technology == "IP55"){
      this.isIP55 = true;
    }
    else if(this.technology == "BTS Addition"){
      this.isBTS_Type = true;
      this.isBTS = true;
    }
    else if(this.technology == "BBU Addition"){
      this.isBBU = true;
    }
    else if(this.technology == "BBU Swap"){
      this.isBBU_Swap_Delete = true;
      this.isBBU_Swap_Add = true;
    }
    else if(this.technology == "Swap/Degrow"){
      this.isRF_Swap_Delete = true;
      this.isRF_Swap_Add = true;

      this.isMW_Swap_Delete = true;
      this.isMW_Swap_Add = true;

      this.isRRU_Swap_Delete = true;
      this.isRRU_Swap_Add = true;

      this.isBBU_Swap_Delete = true;
      this.isBBU_Swap_Add = true;
    }
  }

  changeExtensionType(){
    this.setAllActiveInfoDefault();
    if(this.extensionType == "New" || this.extensionType == "Sector Addition" || this.extensionType == "Twin Beam"){
      this.isRRU = true;
      this.isBBU = true;
      this.isRF_Antenna = true;
      this.isMicrowave = true;
      this.isAdditionalUspace = true;
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

  refreshPage(){
    this.route.navigateByUrl('/layout/dashbord', { skipLocationChange: true }).then(() => {
      if(this.tabName == "Site_Upgrade")
        this.route.navigate(['/layout/site-upgrade']);
      else
        this.route.navigate(['/layout/hpsc']);
    }); 
  }

  addInTotal(){
    let bbuTotalRatedPower : any = 0.0;
    for(let i=1;i<=this.noOfBBU;i++){
      bbuTotalRatedPower += parseFloat($("#bbuPowerConsumption"+i).val());
    }
    $("#bbuTotalRatedPower").val(bbuTotalRatedPower);

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
      rruTotalRatedPower += parseFloat($("#rruPowerConsumption"+i).val());
    }
    $("#rruTotalRatedPower").val(rruTotalRatedPower);

    let btsTotalRatedPower : any = 0.0;
    for(let i=1;i<=this.noOfBTS;i++){
      btsTotalRatedPower += parseFloat($("#btsPower"+i).val());
    }
    $("#btsTotalRatedPower").val(btsTotalRatedPower);

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
    
  }

  addInTotalRatedPower(){
    this.addInTotal();
    let bbuTotalRatedPower = $("#bbuTotalRatedPower").val() == '' ? '0' : $("#bbuTotalRatedPower").val();
    let bbuDeleteTotalRatedPower = $("#bbuDeleteTotalRatedPower").val() == '' ? '0' : $("#bbuDeleteTotalRatedPower").val();
    let bbuAddTotalRatedPower = $("#bbuAddTotalRatedPower").val() == '' ? '0' : $("#bbuAddTotalRatedPower").val();
    let rruTotalRatedPower = $("#rruTotalRatedPower").val() == '' ? '0' : $("#rruTotalRatedPower").val();
    let btsTotalRatedPower = $("#btsTotalRatedPower").val() == '' ? '0' : $("#btsTotalRatedPower").val();
    let mimoTotalRatedPower = $("#mimoTotalRatedPower").val() == '' ? '0' : $("#mimoTotalRatedPower").val();
    let ip55TotalRatedPower = $("#ip55TotalRatedPower").val() == '' ? '0' : $("#ip55TotalRatedPower").val();
    let rruDeleteTotalRatedPower = $("#rruDeleteTotalRatedPower").val() == '' ? '0' : $("#rruDeleteTotalRatedPower").val();
    let rruAddTotalRatedPower = $("#rruAddTotalRatedPower").val() == '' ? '0' : $("#rruAddTotalRatedPower").val();
  
    let loadOfU = this.loadOfU == '' ? '0' : this.loadOfU;

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
    
    else if(this.technology == ""){
      alert("please select technology value");
      return false;
    }
    if((this.technology == "FDD" || this.technology == "FDD/1800" || this.technology == "TDD" || this.technology == "TDD/2300" || this.technology == "TDD/2500" || this.technology == "L850" || this.technology == "L2100" || 
    this.technology == "L900" || this.technology == "2G" || this.technology == "3G" || this.technology == "5G") && this.extensionType == ""){
        alert("please select extension type");
        return false;
    }
    else if(this.technology == "L850" && this.countOfRfFilter == ""){
      alert("please enter `Count of RF filter` value");
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

  // Start
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
  // End

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
    if(this.noOfMicrowave == ""){
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
          alert("please select microwave delete make " +i+ " value");
          return false;
        }
        else if($("#microwaveDeleteModel"+i).val() == ''){
          alert("please select microwave delete model " +i+ " value");
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
          alert("please select microwave Add make " +i+ " value");
          return false;
        }
        else if($("#microwaveAddModel"+i).val() == ''){
          alert("please select microwave Add model " +i+ " value");
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

  massiveMIMOAntennaList = [];
  validateMassiveMIMOAntennaDetails() : any{
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
            mimoUspace : $("#mimoUspace"+i).val()
          }
          this.massiveMIMOAntennaList.push(json);
        }
      }
      return true;
    }
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
        else if($("#rruDeletePower"+i).val() == ''){
          alert("please enter Power in rruDelete "+i+" value");
          return false;
        }
        else if($("#rruDeleteFreqBand"+i).val() == ''){
          alert("please select Frequency Band rruDelete "+i+" value");
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
        else if($("#rruAddFreqBand"+i).val() == ''){
          alert("please select Frequency Band in rruAdd "+i+" value");
          return false;
        }
        else if($("#rruAddPower"+i).val() == ''){
          alert("please enter Power in rruAdd "+i+" value");
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

  saveNBSDetails(){
    if(!this.validateBasicInfoDetails()){
      return false;
    }

    else if((this.extensionType == "New" || this.extensionType == "Sector Addition" || this.extensionType == "Twin Beam" ) 
    && !this.validateRFAntennaDetails()){
      return false;
    }
    else if((this.extensionType == "New" || this.extensionType == "Sector Addition" || this.extensionType == "Twin Beam" ) 
    && !this.validateMicroweveDetails()){
      return false;
    }
    else if(this.technology == "MW" && !this.validateMicroweveDetails()){
      return false;
    }
    else if(this.technology == "U space" && this.noOfUSpaceRequired == ""){
      alert("please select `Addional U space required` value");
      return false;
    }
    else if(this.technology == "BTS Addition" && this.btsType == ''){
      alert("please select BTS type");
      return false;
    }
    else if((this.extensionType == "New" || this.extensionType == "Sector Addition" || this.extensionType == "Twin Beam" || this.technology == "BBU Addition") 
    && !this.validateBBUDetails()){
      return false;
    }
    else if((this.extensionType == "New" || this.extensionType == "Sector Addition" || this.extensionType == "Twin Beam") 
    && !this.validateRRUDetails()){
      return false;
    }
    else if((this.extensionType == "New" || this.extensionType == "Sector Addition" || this.extensionType == "Twin Beam" ) 
    && this.noOfUSpaceRequired == ""){
      alert("please select `Addional U space required` value");
      return false;
    }
    else if(this.technology == "BTS Addition" && !this.validateBTSDetails()){
      return false;
    }
    
    else if(this.technology == "MIMO" && !this.validateMassiveMIMOAntennaDetails()){
      return false;
    }
    else if(this.technology == "IP55" && !this.validateIP55Details()){
      return false;
    }
    else if((this.technology == "RRH Swap" || this.technology == "Swap/Degrow") && !this.validateRRUDeleteDetails()){
      return false;
    }
    else if((this.technology == "RRH Swap" || this.technology == "Swap/Degrow") && !this.validateRRUAddDetails()){
      return false;
    }
    else if((this.technology == "BBU Swap" || this.technology == "Swap/Degrow") && !this.validateBBUDeleteDetails()){
      return false;
    }
    else if((this.technology == "BBU Swap" || this.technology == "Swap/Degrow") && !this.validateBBUAddDetails()){
      return false;
    }
    else if((this.technology == "MW Swap" || this.technology == "Swap/Degrow") && !this.validateMicroweveDeleteDetails()){
      return false;
    }
    else if((this.technology == "MW Swap" || this.technology == "Swap/Degrow") && !this.validateMicroweveAddDetails()){
      return false;
    }
    else if(this.technology == "Swap/Degrow" && !this.validateRFAntennaDeleteDetails()){
      return false;
    }
    else if(this.technology == "Swap/Degrow" && !this.validateRFAntennaAddDetails()){
      return false;
    }

    else if(this.additionalLoad == ''){
      alert("please enter `Additional Load (Node/Misc.) (in Watt)` value");
      return false;
    }
    else if(this.totalRatedPower === ""){
      alert("please click on `Click to add in Total Rated Power` link");
      return false;
    }

    if(this.remark == ''){
      alert("please enter remark value");
      return false;
    }

    this.addInTotalRatedPower();


    this.latitude2 = this.latitude2 == "" ? "0.0" : this.latitude2;
    this.longitude2 = this.longitude2 == "" ? "0.0" : this.longitude2;

    this.noOfRFAntenna = this.noOfRFAntenna == "" ? null : this.noOfRFAntenna;
    this.noOfMicrowave = this.noOfMicrowave == "" ? null : this.noOfMicrowave;
    this.noOfBBU = this.noOfBBU == "" ? null : this.noOfBBU;
    this.noOfRRU = this.noOfRRU == "" ? null : this.noOfRRU;
    this.noOfBTS = this.noOfBTS == "" ? null : this.noOfBTS;
    this.noOfMCB = this.noOfMCB == "" ? null : this.noOfMCB;
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

    this.totalRatedPower = this.totalRatedPower == "" ? "0" : this.totalRatedPower;
    this.additionalLoad = this.additionalLoad == "" ? "0" : this.additionalLoad;
    this.loadOfU = this.loadOfU == "" ? "0.0" : this.loadOfU;
    this.noOfUSpaceRequired = this.noOfUSpaceRequired == "" ? "0" : this.noOfUSpaceRequired;
    this.countOfRfFilter = this.countOfRfFilter == "" ? "0" : this.countOfRfFilter;
    
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
      extensionType : this.extensionType,
      siteAddress : this.siteAddress,
      district : this.district,
      state : this.state,
      siteType : this.siteType,
      clutter : this.clutter,
      btsType : this.btsType,
      noOfRFAntenna : this.noOfRFAntenna,
      rfAntennaList : this.rfAntennaList,
      noOfRFAntenna_Delete : this.noOfRFAntenna_Delete,
      rfAntennaDeleteList : this.rfAntennaDeleteList,
      noOfRFAntenna_Add : this.noOfRFAntenna_Add,
      rfAntennaAddList : this.rfAntennaAddList,
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
      noOfMassiveMIMOAntenna : this.noOfMassiveMIMOAntenna,
      massiveMIMOAntennaList : this.massiveMIMOAntennaList,
      noOfIP55 : this.noOfIP55,
      ip55List : this.ip55List,
      noOfRRU_Delete : this.noOfRRU_Delete,
      rruDeleteList : this.rruDeleteList,
      noOfRRU_Add : this.noOfRRU_Add,
      rruAddList : this.rruAddList,
      noOfBBU_Delete : this.noOfBBU_Delete,
      bbuDeleteList : this.bbuDeleteList,
      noOfBBU_Add : this.noOfBBU_Add,
      bbuAddList : this.bbuAddList,
      noOfMicrowave_Delete : this.noOfMicrowave_Delete,
      microwaveDeleteList : this.microwaveDeleteList,
      noOfMicrowave_Add : this.noOfMicrowave_Add,
      microwaveAddList : this.microwaveAddList, 
      totalRatedPower : this.totalRatedPower,
      additionalLoad : this.additionalLoad,
      noOfUSpaceRequired : this.noOfUSpaceRequired,
      countOfRfFilter : this.countOfRfFilter,
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
