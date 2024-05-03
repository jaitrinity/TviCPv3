import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-mw-antenna',
  templateUrl: './view-mw-antenna.component.html',
  styleUrls: ['./view-mw-antenna.component.css']
})
export class ViewMwAntennaComponent implements OnInit {

  @Input() mwAntennaList;
  @Input() tabName;
  constructor() { }

  ngOnInit() {
  }

}
