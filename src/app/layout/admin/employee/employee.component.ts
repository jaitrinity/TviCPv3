import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CommonFunction } from 'src/app/shared/constant/CommonFunction';
import { Constant } from 'src/app/shared/constant/Constant';
import { CommonService } from 'src/app/shared/services/CommonService';
import { EmployeeTableSetting } from 'src/app/shared/table-setting/employee-table-setting';
declare var jQuery;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeId = "";
  employeeName = "";
  mobile = "";
  emailId = "";
  roleList = [];
  operator = "";
  operatorList = [];
  selectedRoleList = [];
  circleList = [];
  selectedCircleList = [];

  editEmployeeId = "";
  editEmployeeName = "";
  editMobile = "";
  editEmailId = "";
  editSelectedRoleList = [];
  editOperator = "";
  editSelectedCircleList = [];

  isAllowCircle : boolean = false;
  isAllowOperator : boolean = false;
  isAllowEditCircle : boolean = false;
  isAllowEditOperator : boolean = false;
  employeeList = [];
  setting = EmployeeTableSetting.setting;
  multiSelectropdownSettings = {};
  singleSelectropdownSettings = {};
  constructor(private commonService : CommonService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.multiSelectropdownSettings = {
      singleSelection: false,
      idField: 'paramCode',
      textField: 'paramDesc',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
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
    this.getNoOfList();
    this.getAllEmployeeList();
    
  }

  onSelectOrDeSelectRole(event){
    this.isAllowCircle = false;
    this.isAllowOperator = false;
    let role = CommonFunction.createCommaSeprate(this.selectedRoleList);
    if(role != '' && !role.includes("HO_")){
      this.isAllowCircle = true;
    }
    if(role == "OPCO"){
      this.isAllowOperator = true;
    }
  }

  onSelectOrDeselectEditRole(event){
    this.isAllowEditCircle = false;
    this.isAllowEditOperator = false;
    let role = CommonFunction.createCommaSeprate(this.editSelectedRoleList);
    if(role != '' && !role.includes("HO_")){
      this.isAllowEditCircle = true;
    }
    if(role == "OPCO"){
      this.isAllowEditOperator = true;
    }
  }

  getNoOfList(){
    this.commonService.getNoOfList()
    .subscribe(
      (response) => {
        let allNoOfList = response.wrappedList;
        for(let i=0;i<allNoOfList.length;i++){
          let paramCode = allNoOfList[i].paramCode;
          let paramDesc = allNoOfList[i].paramDesc;
          if(paramCode == "allCircleList"){
            let splitData = paramDesc.split(",");
            let tempCircleList = [];
            for(let i=0;i<splitData.length;i++){
              let json = {
                "paramCode" : splitData[i],
                "paramDesc" : splitData[i]+" "
              }
              tempCircleList.push(json);
            }
            this.circleList = tempCircleList;
          }
          else if(paramCode == "allRoleList"){
            let splitData = paramDesc.split(",");
            let tempRoleList = [];
            for(let i=0;i<splitData.length;i++){
              let json = {
                "paramCode" : splitData[i],
                "paramDesc" : splitData[i]+" "
              }
              tempRoleList.push(json);
            }
            this.roleList = tempRoleList;
          }
          else if(paramCode == "allOperator"){
            let splitData = paramDesc.split(",");
            let tempOperatorList = [];
            for(let i=0;i<splitData.length;i++){
              let json = {
                "paramCode" : splitData[i],
                "paramDesc" : splitData[i]+" "
              }
              tempOperatorList.push(json);
            }
            this.operatorList = tempOperatorList;
          }
        }
      },
      (error) => {
        this.toastr.warning(Constant.returnServerErrorMessage("getAllEmployeeList"),"Alert !");
      }
    )

  }

  getAllEmployeeList(){
    this.spinner.show();
    this.commonService.getAllEmployeeList()
    .subscribe((response) =>{
      //console.log(response);
      this.employeeList = response.wrappedList;
      this.spinner.hide();
    },
    (error)=>{
      this.toastr.warning(Constant.returnServerErrorMessage("getAllEmployeeList"),"Alert !");
    });
  }

  onCustomAction(event){
    switch ( event.action) {
      case 'activerecord':
        this.actionOnEmployee(event,"Y");
        break;
     case 'deactiverecord':
        this.actionOnEmployee(event,"N");
        break;
      case 'editrecord':
        this.editEmployee(event);
        break;
    }
  }

  editableId = "";
  editEmployee(event){
    this.editSelectedRoleList = [];
    this.editSelectedCircleList = [];
    this.editableId = event.data.primaryId;
    this.editEmployeeId = event.data.empId;
    for(let i=0;i<this.employeeList.length;i++){
      let iid = this.employeeList[i].primaryId;
      if(iid == this.editableId){
        this.editEmployeeName = this.employeeList[i].empName;
        this.editMobile = this.employeeList[i].mobile;
        this.editEmailId = this.employeeList[i].emailId;

        let empRole = this.employeeList[i].empRole;
        let tempRoleList = [];
        let roleJson = {
            "paramCode" : empRole,
            "paramDesc" : empRole+" "
        }
        tempRoleList.push(roleJson);
        this.editSelectedRoleList = tempRoleList;
        this.onSelectOrDeselectEditRole(event);

        let circleName = this.employeeList[i].circleName;
        if(circleName != null && circleName != ""){
          let splitData = circleName.split(",");
          let tempCircleList = [];
          for(let i=0;i<splitData.length;i++){
            let json = {
              "paramCode" : splitData[i],
              "paramDesc" : splitData[i]+" "
            }
            tempCircleList.push(json);
          }
          this.editSelectedCircleList = tempCircleList;
        }
        
        break;
      }
    }

    jQuery("#editModal").modal({
      backdrop : 'static',
      keyboard : false
    });
  }

  actionOnEmployee(event,action){
    let actionType = action == "Y" ? "Activate" : "Deactivate";
    let isConfirm = confirm("Do you want to "+actionType+" this?");
    if(isConfirm){
      let id = event.data.primaryId;
      let jsonData = {
        "id" : id,
        "action" : action
      }
      this.spinner.show();
      this.commonService.actionOnTableByActionType(jsonData,action)
      .subscribe((response) =>{
        if(response.responseCode == Constant.SUCCESSFUL_STATUS_CODE){
          this.toastr.success(response.responseDesc,"Alert !");
          this.getAllEmployeeList();
        }
        else{
          this.toastr.warning(response.responseDesc,"Alert !");
        }
        this.spinner.hide();
        
      },
      (error)=>{
        this.toastr.warning(Constant.returnServerErrorMessage("submitAssignData"),"Alert !");
      });
    }
  }
  
  addMoreEmployee(){
    jQuery("#addMoreModal").modal({
      backdrop : 'static',
      keyboard : false
    });
  }
  closeAnyModal(modalName : string){
    jQuery("#"+modalName).modal("hide");
  }
  validateNewEmpData() : any{
    if(this.employeeId == ""){
      alert("Please enter `Employee Id` ")
      return true;
    }
    else if(this.employeeName == ""){
      alert("Please enter `Employee Name` ");
      return true;
    }
    else if(this.mobile == ""){
      alert("Please enter `Mobile` ");
      return true;
    }
    else if(this.mobile.length != 10){
      alert("`Mobile` length should be 10 ");
      return true;
    }
    else if(this.emailId == ""){
      alert("Please enter `Email Id` ")
      return true;
    }
    else if(this.selectedRoleList.length == 0){
      alert("Please select `Role` ")
      return true;
    }
    else if(this.isAllowOperator && this.operator == ""){
      alert("Please select `Operator` ")
      return true;
    }
    else if(this.isAllowCircle && this.selectedCircleList.length == 0){
      alert("Please selecte atleast one `Circle` ")
      return true;
    }

    // Validate employee exist as as `Employee Id`, `Mobile` or `Email Id`.
    let empObj = this.employeeList.find(emp => 
      (emp.empId == this.employeeId || emp.mobile == this.mobile || emp.emailId == this.emailId ) 
      && emp.isActive == 'Y');
    if(empObj != null){
      alert("employee already exist as `Employee Id`, `Mobile` or `Email Id`.");
      return true;
    }

    // validate employee exist as `Role` and `Circle`.
    // let role = CommonFunction.createCommaSeprate(this.selectedRoleList);
    // let circle = CommonFunction.createCommaSeprate(this.selectedCircleList);
    // let empListObj = this.employeeList.filter(emp => emp.empRole == role && emp.isActive == 'Y');
    // let isExist = false;
    // if(empListObj.length !== 0){
    //   for(let e=0; e<empListObj.length;e++){
    //     let empCircle = empListObj[e].circleName;
    //     if(empCircle !=null && circle != ""){
    //       let splitEmpCircle = empCircle.split(",");
    //       let splitCircle = circle.split(",");
    //       for(let i=0;i<splitEmpCircle.length;i++){
    //         for(let j=0;j<splitCircle.length;j++){
    //           if(splitEmpCircle[i] == splitCircle[j]){
    //             circle = splitEmpCircle[i];
    //             isExist = true;
    //             break;
    //           }
    //         }
    //         if(isExist){
    //           break;
    //         }
    //       }
    //       if(isExist){
    //         break;
    //       }
    //     }
    //   }
    
    //   if(isExist){
    //     alert("employee already exist on "+role+" `Role` and "+circle+" `Circle``.")
    //     return true;
    //   }
      
    // }
    return false;
  }

  validateEditEmpData() : any{
    if(this.editEmployeeId == ""){
      alert("Please enter `Employee Id` ")
      return true;
    }
    else if(this.editEmployeeName == ""){
      alert("Please enter `Employee Name` ");
      return true;
    }
    else if(this.editMobile == ""){
      alert("Please enter `Mobile` ");
      return true;
    }
    else if(this.editMobile.length != 10){
      alert("`Mobile` length should be 10 ");
      return true;
    }
    else if(this.editEmailId == ""){
      alert("Please enter `Email Id` ")
      return true;
    }
    else if(this.editSelectedRoleList.length == 0){
      alert("Please select `Role` ")
      return true;
    }
    else if(this.isAllowEditOperator && this.editOperator == ""){
      alert("Please select `Operator` ")
      return true;
    }
    else if(this.isAllowEditCircle && this.editSelectedCircleList.length == 0){
      alert("Please selecte atleast one `Circle` ")
      return true;
    }

    // Validate employee exist on `Mobile`
    let empObj = this.employeeList.find(emp => emp.empId != this.editEmployeeId && 
      emp.mobile == this.editMobile && emp.isActive == 'Y' && emp.empRole != 'OPCO');
    if(empObj != null){
      alert("Employee already exist on "+this.editMobile+" `Mobile`.");
      return true;
    }

    // Validate employee exist on `Email Id`
    empObj = this.employeeList.find(emp => emp.empId != this.editEmployeeId && 
      emp.emailId == this.editEmailId && emp.isActive == 'Y' && emp.empRole != 'OPCO');
    if(empObj != null){
      alert("Employee already exist on "+this.editEmailId+" `Email Id`.");
      return true;
    }

    // validate employee exist as `Role` and `Circle`.
    // let role = CommonFunction.createCommaSeprate(this.editSelectedRoleList);
    // let circle = CommonFunction.createCommaSeprate(this.editSelectedCircleList);
    // let empListObj = this.employeeList.filter(emp => emp.empId != this.editEmployeeId && 
    //   emp.empRole == role && emp.isActive == 'Y');
    // let isExist = false;
    // if(empListObj.length !== 0){
    //   for(let e=0; e<empListObj.length;e++){
    //     let empCircle = empListObj[e].circleName;
    //     if(empCircle !=null && circle != ""){
    //       let splitEmpCircle = empCircle.split(",");
    //       let splitCircle = circle.split(",");
    //       for(let i=0;i<splitEmpCircle.length;i++){
    //         for(let j=0;j<splitCircle.length;j++){
    //           if(splitEmpCircle[i] == splitCircle[j]){
    //             circle = splitEmpCircle[i];
    //             isExist = true;
    //             break;
    //           }
    //         }
    //         if(isExist){
    //           break;
    //         }
    //       }
    //       if(isExist){
    //         break;
    //       }
    //     }
    //   }
    
    //   if(isExist){
    //     alert("employee already exist on "+role+" `Role` and "+circle+" `Circle``.")
    //     return true;
    //   }
    // }
    return false;
  }

  submitEmployee(type : any){
    // type 0 = save, 1 = edit
    if(type == 0 && this.validateNewEmpData()){
      return ;
    }
    else if(type == 1 && this.validateEditEmpData()){
      return ;
    }
    let modalName = "";
    let actionType = "";
    let jsonData : any;
    if(type == 0){
      modalName = "addMoreModal";
      actionType = "insertEmployee";
      let role = CommonFunction.createCommaSeprate(this.selectedRoleList);
      let circle = CommonFunction.createCommaSeprate(this.selectedCircleList);
      jsonData = {
        employeeId : this.employeeId,
        employeeName : this.employeeName,
        mobile : this.mobile,
        emailId : this.emailId,
        organization : role != 'OPCO' ? 'TVI' : this.operator,
        role : role,
        circle : role.includes("HO_") ? "" : circle,
        isHoUser : role.includes("HO_") ? "Y" : "N"
      }
    }
    else{
      modalName = "editModal";
      actionType = "editEmployee";
      let role = CommonFunction.createCommaSeprate(this.editSelectedRoleList);
      let circle = CommonFunction.createCommaSeprate(this.editSelectedCircleList);
      jsonData = {
        id : this.editableId,
        employeeId : this.editEmployeeId,
        employeeName : this.editEmployeeName,
        mobile : this.editMobile,
        emailId : this.editEmailId,
        organization : role != 'OPCO' ? 'TVI' : this.editOperator,
        role : role,
        circle : role.includes("HO_") ? "" : circle,
        isHoUser : role.includes("HO_") ? "Y" : "N"
      }
    }

    this.spinner.show();
    this.commonService.actionOnTableByActionType(jsonData,actionType)
    .subscribe((response) =>{
      if(response.responseCode == Constant.SUCCESSFUL_STATUS_CODE){
        this.toastr.success(response.responseDesc,"Alert !");
        this.closeAnyModal(modalName);
        this.makeFieldAsDefault();
        this.getAllEmployeeList();
      }
      else if(response.responseCode == Constant.ALREADY_EXIST_CODE){
        this.toastr.warning(response.responseDesc,"Alert !");
      }
      else{
        this.toastr.warning(response.responseDesc,"Alert !");
      }
      this.spinner.hide();
    },
    (error)=>{
      this.toastr.warning(Constant.returnServerErrorMessage("submitEmployee"),"Alert !");
    });
    
  }

  makeFieldAsDefault(){
    this.employeeId = "";
    this.employeeName = "";
    this.mobile = "";
    this.emailId = "";
    this.operator = "";
    this.selectedRoleList = [];
    this.selectedCircleList = [];

    this.editEmployeeId = "";
    this.editEmployeeName = "";
    this.editMobile = "";
    this.editEmailId = "";
    this.editSelectedRoleList = [];
    this.editOperator = "";
    this.editSelectedCircleList = [];

    this.isAllowCircle = false;
    this.isAllowOperator = false;
    this.isAllowEditCircle = false
    this.isAllowEditOperator = false
  }

}
