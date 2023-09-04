import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nbs-sharing',
  templateUrl: './nbs-sharing.component.html',
  styleUrls: ['./nbs-sharing.component.css']
})
export class NbsSharingComponent implements OnInit {

  tviSiteId = "";
  airtelSiteId = "";
  technology = "";
  siteAddress = "";
  circle = "";
  city = "";
  townVillage = "";
  district = "";
  pincode = "";
  clutter = "";
  siteType = "";
  ebAvailability = "";
  sharingSiteDelivery = "";
  constructor(private spinner: NgxSpinnerService,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

}
