import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-massive-mimo-sharing',
  templateUrl: './massive-mimo-sharing.component.html',
  styleUrls: ['./massive-mimo-sharing.component.css']
})
export class MassiveMimoSharingComponent implements OnInit {

  tviSiteId = "";
  airtelSiteId = "";
  technology = "MIMO Sharing";
  siteAddress = "";
  circle = "";
  city = "";
  townVillage = "";
  pincode = "";
  clutter = "";
  constructor(private spinner: NgxSpinnerService,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

}
