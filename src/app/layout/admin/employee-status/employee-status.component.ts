import { Component, OnInit } from '@angular/core';
import { EmployeeStatusService } from './service/EmployeeStatusService';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Constant } from 'src/app/shared/constant/Constant';
import { CommonService } from 'src/app/shared/services/CommonService';
import { SaveEmployeeModel } from './model/SaveEmployeeModel';

@Component({
  selector: 'app-employee-status',
  templateUrl: './employee-status.component.html',
  styleUrls: ['./employee-status.component.css']
})
export class EmployeeStatusComponent implements OnInit {

  settings = {
    mode: 'external',
    //hideSubHeader: true,
    actions: {
      position: 'right',
      add: false,
      //edit : false
    },
    pager :{
      //display : false,
      perPage : 10
    },
    columns: {
      empId: {
        title: 'Emp Id'
      },
      empName: {
        title: 'Emp Name'
      },
      mobile: {
        title: 'Mobile'
      },
      emailId: {
        title: 'Email Id'
      },
      activeStatus:{
        title : 'Status'
      }
    },
    delete : {
        deleteButtonContent: '<button>D</button>',
        mode : 'external'
    },
    edit : {
        editButtonContent: '<button>A</button>',
        mode : 'external'  
    }
  };

  circleNameList = [];
  empWrappedList = [];
  keyword = 'name';
  empIdArr = [
    //  {
    //    id: 1,
    //    name: 'Usa'
    //  },
    //  {
    //    id: 2,
    //    name: 'England'
    //  }
  ];
 //multiSelectropdownSettings = {};
  singleSelectropdownSettings = {};
  loginEmpId = "";
  loginEmpRole = "";
  public saveEmpModel : SaveEmployeeModel;
  constructor(
    private commonService : CommonService,
    private service : EmployeeStatusService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService) { 
      this.saveEmpModel = new SaveEmployeeModel();
      this.loginEmpId = localStorage.getItem("empId");
      this.loginEmpRole = localStorage.getItem("empRole")
    }

  ngOnInit() {
    // this.multiSelectropdownSettings = {
    //   singleSelection: false,
    //   idField: 'paramCode',
    //   textField: 'paramDesc',
    //   selectAllText: 'Select All',
    //   unSelectAllText: 'UnSelect All',
    //   itemsShowLimit: 0,
    //   allowSearchFilter: true
    // };

    this.singleSelectropdownSettings = {
      singleSelection: true,
      idField: 'paramCode',
      textField: 'paramDesc',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 0,
      allowSearchFilter: true
    };
    
    this.getAllEmployeeList();
    // this.getAllCircleNameList();
  }

  onSelectCircle(item: any) {
    //console.log(item);
  }
  onDeSelectCircle(item: any) {
    //console.log(item);
  }

  // getAllCircleNameList(){
  //   this.circleNameList = [];
  //   this.commonService.getAllCircleName()
  //   .subscribe(
  //     (response) => {
  //       this.circleNameList = response.wrappedList;
  //     },
  //     (error) => {
  //       this.toastr.warning(Constant.returnServerErrorMessage("getAllCircleNameList"),"Alert !");
  //     }
  //   )
  // }

  getAllEmployeeList(){
    this.empWrappedList = [];
    this.empIdArr = [];
    this.service.getAllEmployeeList()
    .subscribe((response) =>{
      //console.log(response);
      this.empWrappedList = response.wrappedList;
      for(let i = 0;i < this.empWrappedList.length; i++ ){
        let json = {
          id : i,
          name : this.empWrappedList[i].empId
        }
        this.empIdArr.push(json)
      }
    },
    (error)=>{
      this.toastr.warning(Constant.returnServerErrorMessage("getAllEmployeeList"),"Alert !");
      //this.spinner.hide();
    });
  }

  activeOrDeactiveEmployee(action,obj){
    //alert(obj.data.empId);
    if(obj.data.isActive == action){
      alert("You are already "+obj.data.activeStatus+", please select another");
      return false;
    }

    let c = confirm("Are you sure you want perform this action");
    if(!c){
      return false;
    }

    let json = {
      primaryId : obj.data.primaryId,
      empId : obj.data.empId,
      searchType : action
    }
    this.spinner.show();
    this.service.activeOrDeactiveEmployee(json)
    .subscribe((response) => {
      if(response.responseCode === Constant.SUCCESSFUL_STATUS_CODE){
        this.getAllEmployeeList();
        this.spinner.hide();
      }
      else{
        this.spinner.hide();
        this.toastr.error('SOMETHING_WRONG', 'Alert');
      }

    },
    (error) =>{
      this.spinner.hide();
      this.toastr.warning(Constant.returnServerErrorMessage("activeOrDeactiveEmployee"),"Alert !");
    }
    )
  }

  validateSaveEmpDetails() : any{
    if(this.saveEmpModel.empId.trim() == ""){
      alert("please enter emp id");
      return true;
    }
    if(typeof(this.saveEmpModel.empId) != "string"){
      alert("please enter new emp id");
      return true;
    }
    else if(this.saveEmpModel.empName == ""){
      alert("please enter emp name");
      return true;
    }
    else if(this.saveEmpModel.mobile == ""){
      alert("please enter mobile number");
      return true;
    }
    else if(this.saveEmpModel.mobile.length != 10){
      alert("mobile number should equal to 10");
      return true;
    }
    else if(this.saveEmpModel.emailId == ""){
      alert("please enter email id")
      return true;
    }
    else if(!this.validateEmailid()){
      alert("please enter valid email id")
      return true;
    }
    else if(this.saveEmpModel.selectedCircleNameList.length == 0){
      alert("please select atleast one circle name");
      return true;
    }
    else{
      return false;
    }

  }

  saveEmployeeDetails(){
    if(this.validateSaveEmpDetails()){
      return false;
    }
    //alert(typeof(this.saveEmpModel.empId))
    let sendJson = {
      empId : this.saveEmpModel.empId,
      empName : this.saveEmpModel.empName,
      mobile : this.saveEmpModel.mobile,
      emailId : this.saveEmpModel.emailId,
      circleName : this.saveEmpModel.selectedCircleNameList
    }
    this.spinner.show();
    this.service.saveEmployeeDetails(sendJson)
    .subscribe((response) => {
      if(response.responseCode === Constant.SUCCESSFUL_STATUS_CODE){
        this.saveEmpModel = new SaveEmployeeModel();
        this.getAllEmployeeList();
        this.spinner.hide();
        this.toastr.success('Successfully save', 'Alert');
      }
      else{
        this.spinner.hide();
        this.toastr.error('SOMETHING_WRONG', 'Alert');
      }
    },(error) => {
      this.spinner.hide();
      this.toastr.warning(Constant.returnServerErrorMessage("saveEmployeeDetails"),"Alert !");
    });

    
  }

  validateEmailid(){
    var email=this.saveEmpModel.emailId;
    var atpos=email.indexOf("@");
    var dotpos=email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
    {		
        return false;
    }
    else
    {
        return true;
    }
  }
}
