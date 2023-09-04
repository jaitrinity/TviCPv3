import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Constant } from 'src/app/shared/constant/Constant';
import { CommonService } from 'src/app/shared/services/CommonService';
import { ComplainTableSetting } from 'src/app/shared/table-setting/complain-table-settings';
declare var jQuery;

@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.css']
})
export class ComplainComponent implements OnInit {
  srNumber : string = "";
  description : string = "";
  closeDescription : string = "";
  imgStr : any = "";
  loginEmpId : string = "";
  loginEmpRole : string = "";
  settings = ComplainTableSetting.setting;
  complainList = [];
  constructor(private commonService: CommonService, private toastr: ToastrService,
    private spinner: NgxSpinnerService) { 
    this.loginEmpId = localStorage.getItem("empId");
    this.loginEmpRole = localStorage.getItem("empRole")
  }

  ngOnInit() {
    this.getComplainList();
  }

  getComplainList(){
    let jsonData = {
      loginEmpId : this.loginEmpId,
      loginEmpRole : this.loginEmpRole
    }
    this.commonService.getComplainList(jsonData)
    .subscribe(
      (response)=>{
        if(response.status){
          this.complainList = response.wrappedList;
        }
        else{
          // this.toastr.warning(response.message,"Alert !");
        }
      },
      (error)=>{
        this.toastr.warning(Constant.returnServerErrorMessage("getComplainList"),"Alert !");
      }
    )
  }

  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    let wrongFile = false;
    let fileName = file.name;
    if(!(fileName.indexOf(".jpg") > -1 || fileName.indexOf(".jpeg") > -1 || fileName.indexOf(".png") > -1 || fileName.indexOf(".pdf") > -1)){
      this.toastr.warning("only .jpg, .jpeg, .png, .pdf format accepted, please choose right file.","Alert !");
      wrongFile = true;
    }

    var myReader: FileReader = new FileReader();
    myReader.onloadend = (e) => {
      let image = myReader.result;
      this.imgStr = image;
      if(wrongFile){
        jQuery("#errorScreenshot").val("");
        this.imgStr = "";
      }
    }
    myReader.readAsDataURL(file);
  }

  submitComplain(){
    if(this.description == ""){
      this.toastr.warning("Please enter `Error Desciption`","Alert !");
      return ;
    }
    else if(this.imgStr == ""){
      this.toastr.warning("Please attach a `Error Screenshot` ","Alert !");
      return ;
    }
    this.spinner.show();
    let jsonData = {
      loginEmpId : this.loginEmpId,
      loginEmpRole : this.loginEmpRole,
      srNumber : this.srNumber,
      description : this.description,
      imgStr : this.imgStr
    }
    this.commonService.submitComplain(jsonData)
    .subscribe(
      (response)=>{
        if(response.responseCode == Constant.SUCCESSFUL_STATUS_CODE){
          this.toastr.success(response.responseDesc,"Alert !");
          this.getComplainList();
        }
        else{
          this.toastr.warning(response.responseDesc,"Alert !");
        }
        this.spinner.hide();
      },
      (error)=>{
        this.toastr.warning(Constant.returnServerErrorMessage("submitComplain"),"Alert !");
        this.spinner.hide();
      }
    )
  }

  onCustomAction(event){
    switch ( event.action) {
      case 'viewRecord':
        this.viewComplainDetails(event);
        break;
    //  case 'deactiverecord':
    //     this.actionOnEmployee(event,"N");
    //     break;
    //   case 'editrecord':
    //     this.editEmployee(event);
    //     break;
    }
  }
  raiseComplainId : string = "";
  raiseDescription : string = "";
  raiseImg : string = "";
  complainStatus : string = "";
  viewComplainDetails(event){
    let complainId = event.data.complainId;
    for(let i=0;i<this.complainList.length;i++){
      let obj = this.complainList[i];
      let loopId = obj.complainId;
      if(complainId == loopId){
        this.raiseComplainId = loopId;
        this.raiseDescription = obj.description;
        this.closeDescription = obj.closeDesciption == null ? "" : obj.closeDesciption;
        this.raiseImg = obj.image;
        this.complainStatus = obj.status;

        jQuery("#viewComplainModal").modal({
          backdrop : 'static',
          keyboard : false
        });
        break;
      }
    }
    
  }

  closeComplain(){
    if(this.closeDescription == ""){
      alert("Please enter remark");
      return false;
    }
    this.spinner.show();
    let jsonData = {
      complainId : this.raiseComplainId,
      closeDescription : this.closeDescription,
      loginEmpId : this.loginEmpId
    }
    this.commonService.actionOnTableByActionType(jsonData, 'complain')
    .subscribe(
      (response)=>{
        if(response.status){
          this.toastr.success(response.message,"Alert !");
          jQuery("#viewComplainModal").modal("hide");
          this.getComplainList();
        }
        else{
          this.toastr.warning(response.message,"Alert !");
        }
        this.spinner.hide();
      },
      (error)=>{
        this.toastr.warning(Constant.returnServerErrorMessage("complain resolve"),"Alert !");
        this.spinner.hide();
      }
    )
  }

  bigPic(imgUrl){
    window.open(imgUrl)
  }

  closeAnyModal(modalName : string){
    jQuery("#"+modalName).modal("hide");
  }

}
