import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { DashbordComponent } from './layout/dashbord/dashbord.component';
import { CreateNbsComponent } from './layout/create-nbs/create-nbs.component';
import { NbsStatusComponent } from './layout/nbs-status/nbs-status.component';
// import { OpcoStatusComponent } from './layout/admin/opco-status/opco-status.component';
// import { EmployeeStatusComponent } from './layout/admin/employee-status/employee-status.component';
// import { NbsSharingComponent } from './layout/nbs-sharing/nbs-sharing.component';
import { OdscAnchorComponent } from './layout/odsc-anchor/odsc-anchor.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewTenencyComponent } from './layout/new-tenency/new-tenency.component';
import { SiteUpgradeComponent } from './layout/site-upgrade/site-upgrade.component';
import { IWanComponent } from './layout/i-wan/i-wan.component';
// import { HpscComponent } from './layout/hpsc/hpsc.component';
import { McuComponent } from './layout/mcu/mcu.component';
// import { UbrComponent } from './layout/ubr/ubr.component';
import { OdscSharingComponent } from './layout/odsc-sharing/odsc-sharing.component';
import { FibreTerminationComponent } from './layout/fibre-termination/fibre-termination.component';
import { TclRedwinComponent } from './layout/tcl-redwin/tcl-redwin.component';
import { HexOltComponent } from './layout/hex-olt/hex-olt.component';
// import { ForthSectorAdditionComponent } from './layout/forth-sector-addition/forth-sector-addition.component';
import { ReportComponent } from './layout/report/report.component';
import { EmployeeComponent } from './layout/admin/employee/employee.component';
import { BulkUploadComponent } from './layout/bulk-upload/bulk-upload.component';
import { ComplainComponent } from './layout/complain/complain.component';
import { TcuComponent } from './layout/tcu/tcu.component';
import { AirtelStatusComponent } from './layout/airtel-status/airtel-status.component';
import { GraphComponent } from './layout/graph/graph.component';
// import { OdcSmartSplitSharingComponent } from './layout/odc-smart-split-sharing/odc-smart-split-sharing.component';
// import { CowComponent } from './layout/cow/cow.component';
// import { MassiveMimoSharingComponent } from './layout/massive-mimo-sharing/massive-mimo-sharing.component';
// import { NbsComponent } from './layout/nbs/nbs.component';
// import { CowSharingComponent } from './layout/cow-sharing/cow-sharing.component';

const routes: Routes = [
  {path : '' ,  redirectTo: '/login', pathMatch: 'full'},
  {path : 'login', component :LoginComponent, data : {title : 'Tower Vision | Login'} },
  {path : 'layout', component :LayoutComponent, canActivate: [AuthGuard],
  children: [
    {path: '', redirectTo: 'graph', pathMatch: 'full'},
    { path: 'graph', component: GraphComponent, data : {title : 'Tower Vision | Graph'} },
    { path: 'dashbord', component: DashbordComponent, data : {title : 'Tower Vision | Dashbord'} },
    { path: 'create-nbs', component: CreateNbsComponent, data : {title : 'Tower Vision | Anchor'} },
    { path: 'nbs-status', component: NbsStatusComponent, data : {title : 'Tower Vision | NBS Status'} },
    { path: 'airtel-status', component: AirtelStatusComponent, data : {title : 'Tower Vision | Airtel Status - All'} },
    { path: 'airtel-status-pending', component: AirtelStatusComponent, data : {title : 'Tower Vision | Airtel Status - Pending'} },
    // { path: 'sharing-status', component: NbsStatusComponent },
    // { path: 'opco-status', component: OpcoStatusComponent },
    { path: 'employee', component: EmployeeComponent, data : {title : 'Tower Vision | Employee'} },
    // { path: 'nbs', component: NbsComponent },
    // { path: 'nbs-sharing', component: NbsSharingComponent },
    { path: 'odsc-anchor', component: OdscAnchorComponent, data : {title : 'Tower Vision | ODSC Anchor'} },
    { path: 'new-tenency', component: NewTenencyComponent, data : {title : 'Tower Vision | New Tenency'} },
    { path: 'site-upgrade', component: SiteUpgradeComponent, data : {title : 'Tower Vision | Site Upgrade'} },
    { path: 'i-wan', component: IWanComponent, data : {title : 'Tower Vision | I-Wan'} },
    // { path: 'hpsc', component: HpscComponent },
    // { path: 'hpsc', component: SiteUpgradeComponent },
    { path: 'hpsc', component: OdscAnchorComponent, data : {title : 'Tower Vision | HPSC Anchor'} },
    { path: 'mcu', component: McuComponent, data : {title : 'Tower Vision | MCU'} },
    { path: 'fibre-termination', component: FibreTerminationComponent, data : {title : 'Tower Vision | Fiber Termination'} },
    // { path: 'ubr', component: UbrComponent },
    { path: 'ubr', component: IWanComponent, data : {title : 'Tower Vision | UBR'} },
    { path: 'odsc-sharing', component: OdscSharingComponent, data : {title : 'Tower Vision | ODSC Sharing'} },
    { path: 'hpsc-sharing', component: OdscSharingComponent, data : {title : 'Tower Vision | HPSC Sharing'} },
    { path: 'smart-split', component: OdscSharingComponent, data : {title : 'Tower Vision | Smart Split'} },
    { path: 'tcl-redwin', component: TclRedwinComponent, data : {title : 'Tower Vision | TCL Redwin'} },
    { path: 'hex-olt', component: HexOltComponent, data : {title : 'Tower Vision | HEX OLT'} },
    // { path: 'forth-sector-addtion', component: ForthSectorAdditionComponent, data : {title : 'Tower Vision | Forth Sector Addition'} },
    { path: 'report', component: ReportComponent, data : {title : 'Tower Vision | Report'} },
    { path: 'bulk-upload', component: BulkUploadComponent, data : {title : 'Tower Vision | Bulk Upload'} },
    { path: 'complaint', component: ComplainComponent, data : {title : 'Tower Vision | Complaint'} },
    { path: 'tcu', component: TcuComponent, data : {title : 'Tower Vision | TCU'} },
    // { path: 'odc-smart-split-sharing', component: OdcSmartSplitSharingComponent },
    // { path: 'cow', component: CowComponent },
    // { path: 'massive-mimo-sharing', component: MassiveMimoSharingComponent },
    // { path: 'cow-sharing', component: CowSharingComponent }
    // { path: 'nbs-sharing', component: CreateNbsComponent },
    // { path: 'odsc-anchor', component: CreateNbsComponent },
    // { path: 'odsc-sharing', component: CreateNbsComponent },
    // { path: 'odc-smart-split-sharing', component: CreateNbsComponent },
    // { path: 'cow', component: CreateNbsComponent },
    // { path: 'cow-sharing', component: CreateNbsComponent },
    // { path: 'massive-mimo-sharing', component: CreateNbsComponent }
    // { path: 'nbs-sharing', component: NbsComponent },
    // { path: 'odsc-anchor', component: NbsComponent },
    // { path: 'odsc-sharing', component: NbsComponent },
    // { path: 'odc-smart-split-sharing', component: NbsComponent },
    // { path: 'cow', component: NbsComponent },
    // { path: 'cow-sharing', component: NbsComponent },
    // { path: 'massive-mimo-sharing', component: NbsComponent }
    { path: '**', component: PageNotFoundComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
