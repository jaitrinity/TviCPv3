import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/loginService';
import { Constant } from '../shared/constant/Constant';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  username : string;
  userRole : string;
  operator : string;
  public menuList = [];
  constructor(private router:Router, 
    private loginService : LoginService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService) {
      localStorage.setItem(Constant.STORE_KEY,Date.now().toString());
      this.username = localStorage.getItem("empName");
      this.userRole = localStorage.getItem("empRole");
      this.operator = localStorage.getItem("operator");
   }

  ngOnInit() {
    if(localStorage.getItem("empRole") == 'Admin'){
      this.router.navigate(['/layout/employee']);
    }else{
      this.loadMenuList();
    }
    
    //this.router.navigate(['layout/dashbord']);
      // let json = {
      //   "menuName": "NBS",
      //   "routerLink": "null",
      //   "icon": "fa fa-home fa-lg",
      //   "submenuList": [{
      //     "submenuName": "Create NBS",
      //     "routerLink": "create-nbs",
      //     "icon": "null"
      //   }, {
      //     "submenuName": "NBS Status",
      //     "routerLink": "nbs-status",
      //     "icon": "null"
      //   }]
      // }
      // this.menuList.push(json)
  }

  logout(){
    let isConfirm = confirm("Do you want to logout ?");
    if(isConfirm){
      localStorage.clear();
      this.router.navigate(['/login']);
      //this.toastr.success("Successfully logout "+this.userName);
    }
    
  }

  loadMenuList(){
    var jsonStr = {
      userRole:this.userRole,
      operator:this.operator
    }
    this.spinner.show();
    this.menuList = [];
    this.loginService.getMenuListByRoleName(jsonStr)
    .subscribe( (response) =>{
      //console.log(response)
        if(response.responseCode === Constant.SUCCESSFUL_STATUS_CODE){
          this.menuList = response.wrappedList[0].menuList;
        }
        else if(response.responseCode === Constant.NO_RECORDS_FOUND_CODE){
          this.toastr.warning('No any menu assign, please assign a menu');
        }
        else {
          this.toastr.error('Something wrong..');
        }
        this.spinner.hide();
  },
    (error)=>{
      this.toastr.warning(Constant.returnServerErrorMessage("loadMenuList"),"Alert !");
      this.spinner.hide();
    })

  }

}
