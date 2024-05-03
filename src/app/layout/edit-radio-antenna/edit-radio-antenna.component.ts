import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-radio-antenna',
  templateUrl: './edit-radio-antenna.component.html',
  styleUrls: ['./edit-radio-antenna.component.css']
})
export class EditRadioAntennaComponent implements OnInit {

  @Input() radioAntennaList;
  @Input() changeFeasibility;
  @Input() feasibilityArr;
  @Input() tabName;
  constructor() { }

  ngOnInit() {
  }

}
