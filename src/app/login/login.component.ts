import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AuthenticateModel } from './model/AuthenticateModel';
import { LoginService } from '../shared/services/loginService';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Constant } from '../shared/constant/Constant';
import { AutoLogoutService } from '../shared/services/AutoLogoutService';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showPassword : boolean = false;
  public loginModel : AuthenticateModel;
  selectedRole = "";
  roleList = [];
  constructor(private loginService : LoginService,private autoLogoutService  : AutoLogoutService,
    vcr:ViewContainerRef,private router:Router,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService) { 
      localStorage.clear();
      this.loginModel = new AuthenticateModel();
    }

  ngOnInit() {
    // this.spinner.show();
    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 4000);
  }

  // downloadReport(){
  //   window.open(Constant.serverURL+"downloadReport","_black")
  // }


  checkAuthenticate(){
    
    this.spinner.show();
    this.loginModel.password = window.btoa(this.loginModel.password);
    this.loginService.authenticate(this.loginModel)
    .subscribe( (response) =>{
      this.spinner.hide(); 
       //console.log(response);
         if(response.responseCode === Constant.SUCCESSFUL_STATUS_CODE){
          sessionStorage.setItem("username",this.loginModel.username);
          localStorage.setItem("empId",response.wrappedList[0].empId);
          localStorage.setItem("empName",response.wrappedList[0].empName);
          localStorage.setItem("circleName",response.wrappedList[0].circleName);
          localStorage.setItem("operator",response.wrappedList[0].operator);
          localStorage.setItem("isHoUser",response.wrappedList[0].isHoUser);
          localStorage.setItem(btoa("isValidToken"),btoa(Constant.TVI_CP_PRIVATE_KEY));
          this.spinner.hide();
          let empRole = response.wrappedList[0].empRole;
          this.roleList = empRole.split(",");
          if(this.roleList.length == 1){
            localStorage.setItem("empRole",empRole);
            this.router.navigate(['/layout']);
          }
          else{
            $("#multiRoleModal").modal({
              backdrop : 'static',
              keyboard : false
            });
          }
          
        }
        else{
          this.toastr.error('Invalid Login Credentials...', 'Alert');
          this.spinner.hide();
        }
  },
    (error)=>{
      this.toastr.warning(Constant.returnServerErrorMessage("authenticate"),"Alert !");
      this.spinner.hide();
    })

  }
  onItemChange(role : string){
    this.selectedRole = role;
  }

  confirmRole(){
    if(this.selectedRole == ""){
      this.toastr.warning("Please select one role","Alert !");
      return;
    }
    $("#multiRoleModal").modal("hide");
    localStorage.setItem("empRole",this.selectedRole);
    this.router.navigate(['/layout']);
  }

  mobileNumber = "";
  otpNumber = "";
  newPassword = "";
  confirmPassword = "";
  validOTPNumber = "";
  isOTP_Validate : boolean = false;
  openForgetPasswordModel(){
    if(this.loginModel.username == ""){
      alert("enter employee id");
      return;
    }
    $("#forgetPasswordModal").modal({
      backdrop : 'static',
      keyboard : false
    });
  }

  sendOTP(){
    if(this.mobileNumber.length != 10){
      alert("please enter 10 digit mobile number");
      return ;
    }
    this.isOTP_Validate = false;
    this.validOTPNumber = "";
    let json = {
      loginEmpId : this.loginModel.username,
      mobileNumber : this.mobileNumber
    }
    this.spinner.show();
    this.loginService.sendOTP(json)
    .subscribe( (response) =>{
      this.spinner.hide(); 
       //console.log(response);
        if(response.responseCode === Constant.SUCCESSFUL_STATUS_CODE){
          this.validOTPNumber = response.wrappedList[0];
          this.spinner.hide();
        }
        else{
          // this.toastr.info('Invalid username or mobile number, please check', 'Alert');
          this.spinner.hide();
        }
        this.toastr.warning(response.responseDesc,"Alert !");
  },
    (error)=>{
      this.toastr.warning(Constant.returnServerErrorMessage("sendOTP"),"Alert !");
      this.spinner.hide();
    })
  }

  VerifyOTP(){
    this.isOTP_Validate = false;
    if(this.otpNumber != this.validOTPNumber){
      alert("enter enter valid otp");
      return;
    }
    this.isOTP_Validate = true;

  }

  changePassword(){
    if(this.newPassword == ""){
      alert("enter new password");
      return ;
    }
    else if(this.confirmPassword != this.newPassword){
      alert("password confirmation incorrect please check");
      return;
    }
    this.spinner.show(); 
    let json = {
      loginEmpId : this.loginModel.username,
      mobileNumber : this.mobileNumber,
      newPassword : window.btoa(this.newPassword)
    }
    this.loginService.changePassword(json)
    .subscribe( (response) =>{
      this.spinner.hide(); 
       //console.log(response);
         if(response.responseCode === Constant.SUCCESSFUL_STATUS_CODE){
          this.toastr.success('password change successfully', 'Alert');
          $("#forgetPasswordModal").modal("hide");
          this.otpNumber = "";
          this.mobileNumber = "";
          this.newPassword = "";
          this.confirmPassword = "";
          this.isOTP_Validate = false;
          this.spinner.hide();
        }
        else{
          this.toastr.info('Invalid username or mobile number, please check', 'Alert');
          this.spinner.hide();
        }
  },
    (error)=>{
      this.toastr.warning(Constant.returnServerErrorMessage("authenticate"),"Alert !");
      this.spinner.hide();
    })
  }

  closeModal(){
    if(this.mobileNumber == ""){
      this.mobileNumber = "";
      this.otpNumber = "";
      this.newPassword = "";
      this.confirmPassword = "";
      this.isOTP_Validate = false;
      $("#forgetPasswordModal").modal("hide");
    }
    else{
      let isConfirm = confirm("Do you want to close?");
      if(isConfirm){
        this.mobileNumber = "";
        this.otpNumber = "";
        this.newPassword = "";
        this.confirmPassword = "";
        this.isOTP_Validate = false;
        $("#forgetPasswordModal").modal("hide");
      }
    }
    
  }

  closeMultiModal(){
    this.roleList = [];
    this.selectedRole = "";
    $("#multiRoleModal").modal("hide");
  }

}
