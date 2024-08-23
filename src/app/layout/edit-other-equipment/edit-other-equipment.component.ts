import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-other-equipment',
  templateUrl: './edit-other-equipment.component.html',
  styleUrls: ['./edit-other-equipment.component.css']
})
export class EditOtherEquipmentComponent implements OnInit {

  @Input() otherEquipmentList;
  @Input() feasibilityArr;
  @Input() changeFeasibility;
  @Input() tabName;
  constructor() { }

  ngOnInit() {
  }

}
