import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-bts-cabinet',
  templateUrl: './view-bts-cabinet.component.html',
  styleUrls: ['./view-bts-cabinet.component.css']
})
export class ViewBtsCabinetComponent implements OnInit {

  show : boolean = false;
  @Input() btsCabinetList;
  @Input() tabName;
  constructor() { }

  ngOnInit() {
  }

}
