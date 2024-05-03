import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-bsc-rnc-cabinet',
  templateUrl: './view-bsc-rnc-cabinet.component.html',
  styleUrls: ['./view-bsc-rnc-cabinet.component.css']
})
export class ViewBscRncCabinetComponent implements OnInit {

  @Input() bscRncCabinetList;
  @Input() tabName;
  constructor() { }

  ngOnInit() {
  }

}
