import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-radio-antenna',
  templateUrl: './view-radio-antenna.component.html',
  styleUrls: ['./view-radio-antenna.component.css']
})
export class ViewRadioAntennaComponent implements OnInit {

  @Input() radioAntennaList;
  @Input() tabName;
  constructor() { }

  ngOnInit() {
  }

}
