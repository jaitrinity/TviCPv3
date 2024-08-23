import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-air-fiberr',
  templateUrl: './air-fiberr.component.html',
  styleUrls: ['./air-fiberr.component.css']
})
export class AirFiberrComponent implements OnInit {

  @Input() airFiberList;
  constructor() { }

  ngOnInit() {
  }

}
