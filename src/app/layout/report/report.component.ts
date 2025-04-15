import { Component, OnInit } from '@angular/core';
import { Constant } from 'src/app/shared/constant/Constant';
import { Router } from '@angular/router';
import { CreateNBSService } from 'src/app/shared/services/createNBSService';
import { ToastrService } from 'ngx-toastr';
declare var $;

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  filterCircleName : any = "";
  filterOperator : any = "";
  filterProductType : any = "";
  filterSrStatus : any = "";
  filterStartDate : any = "";
  filterEndDate : any = "";
  allCircleList = "";
  allOperatorList = "";
  version : number = 0;
  portalRunningVersion : number = 0;
  productTypeList = [];
  iDeployProductTypeList = [];
  loginEmpId = "";
  loginEmpRole = "";
  isHoUser = "";
  circleName = "";
  operator = "";
  constructor(private route:Router,private sharedService : CreateNBSService,
    private toastr: ToastrService) { 
    this.version = Constant.VERSION;
    this.loginEmpId = localStorage.getItem("empId");
    this.loginEmpRole = localStorage.getItem("empRole")
    this.circleName = localStorage.getItem("circleName");
    this.operator = localStorage.getItem("operator");
    this.isHoUser = localStorage.getItem("isHoUser");
  }

  ngOnInit() {
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
        else if(paramCode == 'allOperatorForReport'){
          this.allOperatorList = paramDesc;
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
          this.iDeployProductTypeList = tempProductTypeList;
        }

        if(i == this.allNoOfList.length-1){
          if(this.version != this.portalRunningVersion){
            alert("Some update on portal, please reload page by click on browser reload button.")
            localStorage.clear();
            this.route.navigate(['/login']);
          }
        }
      }
  }

  downloadReport(reportType : any){
    let localCircle = "";
    let localOperator = "";
    if(this.isHoUser == "N"){
      localCircle = this.circleName;
      localOperator = this.operator;
    }
    else{
      localCircle = this.allCircleList;
      localOperator = this.allOperatorList;
    }

    if(this.filterOperator != "") localOperator = this.filterOperator;

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
    // var time = new Date();
    // let millisecond = Math.round(time.getTime()/1000);

    let sendJson = {
      loginEmpId : this.loginEmpId,
      loginEmpRole : localRole,
      isHoUser : this.isHoUser,
      circleName : localCircle,
      operator : localOperator,
      filterCircleName : this.filterCircleName,
      filterProductType : this.filterProductType,
      filterSrStatus : this.filterSrStatus,
      filterStartDate : this.filterStartDate,
      filterEndDate : this.filterEndDate,
      reportType : reportType
      // millisecond : millisecond
    }
    window.open(Constant.phpServerURL+'downloadReport.php?jsonData='+JSON.stringify(sendJson));
  }

  iDeployDetailsReport(){
    if(this.filterProductType == ""){
      alert("Select a product type");
      $("#iPT").focus();
      return;
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
      filterCircleName : this.filterCircleName,
      filterProductType : this.filterProductType,
      filterStartDate : this.filterStartDate,
      filterEndDate : this.filterEndDate
    }
    window.open(Constant.phpServerURL+'iDeployDetailReport.php?jsonData='+JSON.stringify(sendJson));
  }

  iDeployReport(){
    if(this.filterProductType == ""){
      alert("Select a product type");
      $("#iPT").focus();
      return;
    }
    let localCircle = "";
    let localOperator = "Airtel";
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
      operator : localOperator,
      filterCircleName : this.filterCircleName,
      filterProductType : this.filterProductType,
      filterSrStatus : this.filterSrStatus,
      filterStartDate : this.filterStartDate,
      filterEndDate : this.filterEndDate
    }
    window.open(Constant.phpServerURL+'iDeployReport.php?jsonData='+JSON.stringify(sendJson));
  }

  tviAuditReport(){
    if(this.filterProductType == ""){
      alert("Select a product type");
      $("#tPT").focus();
      return;
    }
    let localCircle = "";
    let localOperator = "";
    if(this.isHoUser == "N"){
      localCircle = this.circleName;
      localOperator = this.operator;
    }
    else{
      localCircle = this.allCircleList;
      localOperator = this.allOperatorList;
    }

    if(this.filterOperator != "") localOperator = this.filterOperator;

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
    // var time = new Date();
    // let millisecond = Math.round(time.getTime()/1000);

    let sendJson = {
      loginEmpId : this.loginEmpId,
      loginEmpRole : localRole,
      isHoUser : this.isHoUser,
      circleName : localCircle,
      operator : localOperator,
      filterCircleName : this.filterCircleName,
      filterProductType : this.filterProductType,
      filterSrStatus : this.filterSrStatus,
      filterStartDate : this.filterStartDate,
      filterEndDate : this.filterEndDate
      // millisecond : millisecond
    }
    window.open(Constant.phpServerURL+'tviAuditReport.php?jsonData='+JSON.stringify(sendJson));
  }

}
