import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-bts-cabinet',
  templateUrl: './edit-bts-cabinet.component.html',
  styleUrls: ['./edit-bts-cabinet.component.css']
})
export class EditBtsCabinetComponent implements OnInit {

  @Input() btsCabinetList;
  @Input() feasibilityArr;
  @Input() btsMainUnit;
  @Input() changeFeasibility;
  @Input() tabName;
  constructor() { }

  ngOnInit() {
  }

}
