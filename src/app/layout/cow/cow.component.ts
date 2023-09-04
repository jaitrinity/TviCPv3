import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cow',
  templateUrl: './cow.component.html',
  styleUrls: ['./cow.component.css']
})
export class CowComponent implements OnInit {

  tviSiteId = "";
  airtelSiteId = "";
  technology = "COW";
  siteAddress = "";
  circle = "";
  city = "";
  townVillage = "";
  district = "";
  pincode = "";
  clutter = "";
  siteType = "";
  cowType = "";
  constructor(private spinner: NgxSpinnerService,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

}
