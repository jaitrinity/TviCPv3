import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-mw-antenna',
  templateUrl: './edit-mw-antenna.component.html',
  styleUrls: ['./edit-mw-antenna.component.css']
})
export class EditMwAntennaComponent implements OnInit {

  @Input() mwAntennaList;
  @Input() changeFeasibility;
  @Input() feasibilityArr;
  @Input() tabName;
  constructor() { }

  ngOnInit() {
  }

}
