import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rf-antenna',
  templateUrl: './rf-antenna.component.html',
  styleUrls: ['./rf-antenna.component.css']
})
export class RfAntennaComponent implements OnInit {

  @Input() rfAntennaList;
  constructor() { }

  ngOnInit() {
  }

}
