import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Constant } from 'src/app/shared/constant/Constant';
import { CreateNBSService } from 'src/app/shared/services/createNBSService';
import * as xlsx from 'xlsx';

@Component({
  selector: 'app-bulk-upload',
  templateUrl: './bulk-upload.component.html',
  styleUrls: ['./bulk-upload.component.css']
})
export class BulkUploadComponent implements OnInit {
  info = "! Note : Please download file format before upload.";
  rfChecked : boolean = false;
  bbuChecked : boolean = false;
  rruChecked : boolean = false;
  mwChecked : boolean = false;
  polesChecked : boolean = false;
  hpscAntennaChecked : boolean = false;
  hpscBbuChecked : boolean = false;
  hpscRruChecked : boolean = false;

  @ViewChild('headerFile') headerFileVariable: ElementRef;
  // @ViewChild('detailFile') detailFileVariable: ElementRef;
  @ViewChild('rfAntennaFile') rfAntennaFileVariable: ElementRef;
  @ViewChild('bbuFile') bbuFileVariable: ElementRef;
  @ViewChild('rruFile') rruFileVariable: ElementRef;
  @ViewChild('mwFile') mwFileVariable: ElementRef;
  // 
  @ViewChild('headerFile2') headerFile2Variable: ElementRef;
  @ViewChild('bbuFile2') bbuFile2Variable: ElementRef;
  @ViewChild('rruFile2') rruFile2Variable: ElementRef;
  @ViewChild('polesFile') polesFileVariable: ElementRef;
  @ViewChild('hpscAntennaFile') hpscAntennaFileVariable: ElementRef;
  version : number = 0;
  portalRunningVersion : number = 0;
  loginEmpId = "";
  loginEmpRole = "";
  circleName = "";
  operator = "";
  constructor(private route:Router,private sharedService : CreateNBSService,
    private toastr: ToastrService,private spinner: NgxSpinnerService,) { 
      this.loginEmpId = localStorage.getItem("empId");
      this.loginEmpRole = localStorage.getItem("empRole");
      this.circleName = localStorage.getItem("circleName");
      this.operator = localStorage.getItem("operator");
      this.version = Constant.VERSION;
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
        
        if(paramCode == 'portalRunningVersion'){
          this.portalRunningVersion = paramDesc;
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

  arrayBuffer : any;
  headerData : any = [];
  detailData : any = [];
  rfAntennaData : any = [];
  mwData : any = [];
  rruData : any = [];
  bbuData : any = [];
  polesData : any = [];
  hpscAntennaData : any = [];
  selectFileForUpload(event,fileType){
    // fileType 1 for Header, 2 for Detail
    var file : File = event.target.files[0];
    if(fileType == 1 && file.name != "NBS_MASTER_HDR.xlsx"){
      this.headerFileVariable.nativeElement.value = "";
      alert("File name should be same as `NBS_MASTER_HDR.xlsx`, \n Please select correct file. ");
      return ;
    }
    // else if(fileType == 2 && file.name != "NBS_MASTER_DET.xlsx"){
    //   this.detailFileVariable.nativeElement.value = "";
    //   alert("File name should be same as `NBS_MASTER_DET.xlsx`, \n Please select correct file. ");
    //   return ;
    // }
    else if(fileType == "RF_Antenna" && file.name != "RF_Antenna.xlsx"){
      this.rfAntennaFileVariable.nativeElement.value = "";
      alert("File name should be same as `RF_Antenna.xlsx`, \n Please select correct file. ");
      return ;
    }
    else if(fileType == "BBU" && file.name != "BBU.xlsx"){
      this.bbuFileVariable.nativeElement.value = "";
      alert("File name should be same as `BBU.xlsx`, \n Please select correct file. ");
      return ;
    }
    else if(fileType == "RRU" && file.name != "RRU.xlsx"){
      this.rruFileVariable.nativeElement.value = "";
      alert("File name should be same as `RRU.xlsx`, \n Please select correct file. ");
      return ;
    }
    else if(fileType == "MW" && file.name != "MW.xlsx"){
      this.mwFileVariable.nativeElement.value = "";
      alert("File name should be same as `MW.xlsx`, \n Please select correct file. ");
      return ;
    }
    // HPSC upload
    else if(fileType == "HPSC_MASTER_HDR" && file.name != "HPSC_MASTER_HDR.xlsx"){
      this.headerFile2Variable.nativeElement.value = "";
      alert("File name should be same as `HPSC_MASTER_HDR.xlsx`, \n Please select correct file. ");
      return ;
    }
    else if(fileType == "HPSC_POLES" && file.name != "HPSC_POLES.xlsx"){
      this.polesFileVariable.nativeElement.value = "";
      alert("File name should be same as `HPSC_POLES.xlsx`, \n Please select correct file. ");
      return ;
    }
    else if(fileType == "HPSC_Antenna" && file.name != "HPSC_Antenna.xlsx"){
      this.hpscAntennaFileVariable.nativeElement.value = "";
      alert("File name should be same as `HPSC_Antenna.xlsx`, \n Please select correct file. ");
      return ;
    }
    else if(fileType == "HPSC_BBU" && file.name != "HPSC_BBU.xlsx"){
      this.bbuFile2Variable.nativeElement.value = "";
      alert("File name should be same as `HPSC_BBU.xlsx`, \n Please select correct file. ");
      return ;
    }
    else if(fileType == "HPSC_RRU" && file.name != "HPSC_RRU.xlsx"){
      this.rruFile2Variable.nativeElement.value = "";
      alert("File name should be same as `HPSC_RRU.xlsx`, \n Please select correct file. ");
      return ;
    }

    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = xlsx.read(bstr, {type:"binary",cellText:false,cellDates:true});
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      if(fileType == 1 || fileType == "HPSC_MASTER_HDR")
        this.headerData = xlsx.utils.sheet_to_json(worksheet,{raw:false,dateNF: "dd-MMM-yy"});
      if(fileType == 2) 
        this.detailData = xlsx.utils.sheet_to_json(worksheet,{raw:false,dateNF: "dd-MMM-yy"});
      if(fileType == "RF_Antenna") 
        this.rfAntennaData = xlsx.utils.sheet_to_json(worksheet,{raw:false,dateNF: "dd-MMM-yy"});
      if(fileType == "MW") 
        this.mwData = xlsx.utils.sheet_to_json(worksheet,{raw:false,dateNF: "dd-MMM-yy"});
      if(fileType == "BBU" || fileType == "HPSC_BBU") 
        this.bbuData = xlsx.utils.sheet_to_json(worksheet,{raw:false,dateNF: "dd-MMM-yy"});
      if(fileType == "RRU" || fileType == "HPSC_RRU") 
        this.rruData = xlsx.utils.sheet_to_json(worksheet,{raw:false,dateNF: "dd-MMM-yy"});
      if(fileType == "HPSC_POLES") 
        this.polesData = xlsx.utils.sheet_to_json(worksheet,{raw:false,dateNF: "dd-MMM-yy"});
      if(fileType == "HPSC_Antenna") 
        this.hpscAntennaData = xlsx.utils.sheet_to_json(worksheet,{raw:false,dateNF: "dd-MMM-yy"});
      // console.log(this.importData);
    }
    fileReader.readAsArrayBuffer(file);
  }

  uploadFile(){
    if(this.headerData.length == 0){
      alert("Please Select Header File");
      return ;
    }
    // else if(this.detailData.length == 0){
    //   alert("Please Select Detail File");
    //   return ;
    // }
    else if(!this.rfChecked && this.rfAntennaData.length == 0){
      alert("Please Select RF_Antenna File");
      return ;
    }
    else if(!this.bbuChecked && this.bbuData.length == 0){
      alert("Please Select BBU File");
      return ;
    }
    else if(!this.rruChecked && this.rruData.length == 0){
      alert("Please Select RRU File");
      return ;
    }
    else if(!this.mwChecked && this.mwData.length == 0){
      alert("Please Select MW File");
      return ;
    }
    // console.log(this.headerData)
    // console.log(this.detailData)
    let jsonData = {
      loginEmpId : this.loginEmpId,
      loginEmpRole : this.loginEmpRole,
      circleName : this.circleName,
      operator : this.operator,
      headerData: this.headerData,
      detailData: this.detailData,
      rfAntennaData : this.rfAntennaData,
      bbuData : this.bbuData,
      rruData : this.rruData,
      mwData : this.mwData,
      tabName : "Site_Upgrade"
    }
    this.spinner.show(); 
    this.sharedService.uploadFile(jsonData)
      .subscribe( (response) =>{
        this.spinner.hide(); 
        if(response.status == true){
          this.toastr.success(response.message,"Alert !");
          this.makeAsDefault();
        }
        else{
          // this.toastr.error(response.message,"Alert !");
          alert(response.message);
        }
    },
      (error)=>{
        this.toastr.warning(Constant.returnServerErrorMessage("uploadFile"),"Alert !");
        this.spinner.hide();
      })
  }

  downloadFormat(fileName : string){
    let path = "http://www.in3.co.in/in3.co.in/TVI_CP/format/"+fileName+".xlsx";
    window.open(path);
  }

  makeAsDefault(){
    this.headerData = [];
    this.rfChecked = false;
    this.rfAntennaData = [];
    this.rruChecked = false;
    this.rruData = [];
    this.rruChecked = false;
    this.bbuData = [];
    this.mwChecked = false;
    this.mwData = [];
    
    this.headerFileVariable.nativeElement.value = "";
    // this.detailFileVariable.nativeElement.value = "";
    this.rfAntennaFileVariable.nativeElement.value = "";
    this.bbuFileVariable.nativeElement.value = "";
    this.rruFileVariable.nativeElement.value = "";
    this.mwFileVariable.nativeElement.value = "";
  }

  uploadHPSCFile(){
    if(this.headerData.length == 0){
      alert("Please Select Header File");
      return ;
    }
    
    else if(!this.polesChecked && this.polesData.length == 0){
      alert("Please Select Poles File");
      return ;
    }
    else if(!this.hpscAntennaChecked && this.hpscAntennaData.length == 0){
      alert("Please Select HPSC Antenna File");
      return ;
    }
    else if(!this.hpscBbuChecked && this.bbuData.length == 0){
      alert("Please Select BBU File");
      return ;
    }
    else if(!this.hpscRruChecked && this.rruData.length == 0){
      alert("Please Select RRU File");
      return ;
    }
    let jsonData = {
      loginEmpId : this.loginEmpId,
      loginEmpRole : this.loginEmpRole,
      circleName : this.circleName,
      operator : this.operator,
      headerData: this.headerData,
      polesData : this.polesData,
      hpscAntennaData : this.hpscAntennaData,
      bbuData : this.bbuData,
      rruData : this.rruData,
      tabName : "HPSC"
    }
    this.spinner.show(); 
    this.sharedService.uploadFile(jsonData)
      .subscribe( (response) =>{
        this.spinner.hide(); 
        if(response.status == true){
          this.toastr.success(response.message,"Alert !");
          this.makeHPSCAsDefault();
        }
        else{
          // this.toastr.error(response.message,"Alert !");
          alert(response.message);
        }
    },
      (error)=>{
        this.toastr.warning(Constant.returnServerErrorMessage("uploadHPSCFile"),"Alert !");
        this.spinner.hide();
      })
  }

  makeHPSCAsDefault(){
    this.headerData = [];
    this.headerFile2Variable.nativeElement.value = "";

    this.hpscRruChecked = false;
    this.rruData = [];
    this.rruFile2Variable.nativeElement.value = "";

    this.hpscBbuChecked = false;
    this.bbuData = [];
    this.bbuFile2Variable.nativeElement.value = "";
    
    this.polesChecked = false;
    this.polesData = [];
    this.polesFileVariable.nativeElement.value = "";
    
    this.hpscAntennaChecked = false;
    this.hpscAntennaData = [];
    this.hpscAntennaFileVariable.nativeElement.value = "";
  }

  checkboxClick(checkBoxType : any){
    if(checkBoxType == 1){
      this.rfChecked = this.rfChecked ? false : true;
      this.rfAntennaFileVariable.nativeElement.value = "";
      this.rfAntennaData = [];
    }
    else if(checkBoxType == 2){
      this.bbuChecked = this.bbuChecked ? false : true;
      this.bbuFileVariable.nativeElement.value = "";
      this.bbuData = [];
    }
    else if(checkBoxType == 3){
      this.rruChecked = this.rruChecked ? false : true;
      this.rruFileVariable.nativeElement.value = "";
      this.rruData = [];
    }
    else if(checkBoxType == 4){
      this.mwChecked = this.mwChecked ? false : true;
      this.mwFileVariable.nativeElement.value = "";
      this.mwData = [];
    }
    else if(checkBoxType == 5){
      this.polesChecked = this.polesChecked ? false : true;
      this.polesFileVariable.nativeElement.value = "";
      this.polesData = [];
    }
    else if(checkBoxType == 6){
      this.hpscAntennaChecked = this.hpscAntennaChecked ? false : true;
      this.hpscAntennaFileVariable.nativeElement.value = "";
      this.hpscAntennaData = [];
    }
    else if(checkBoxType == 7){
      this.hpscBbuChecked = this.hpscBbuChecked ? false : true;
      this.bbuFile2Variable.nativeElement.value = "";
      this.bbuData = [];
    }
    else if(checkBoxType == 8){
      this.hpscRruChecked = this.hpscRruChecked ? false : true;
      this.rruFile2Variable.nativeElement.value = "";
      this.rruData = [];
    }
      
  }

}
