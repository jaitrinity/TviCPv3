import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-odc-smart-split-sharing',
  templateUrl: './odc-smart-split-sharing.component.html',
  styleUrls: ['./odc-smart-split-sharing.component.css']
})
export class OdcSmartSplitSharingComponent implements OnInit {
  tviSiteId = "";
  airtelSiteId = "";
  technology = "ODC Sharing";
  siteAddress = "";
  circle = "";
  city = "";
  townVillage = "";
  district = "";
  pincode = "";
  clutter = "";
  smartSplitType = "";
  floorSpaceOfODCabinet = "";
  acPowerLoad = "";
  constructor(private spinner: NgxSpinnerService,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

}
