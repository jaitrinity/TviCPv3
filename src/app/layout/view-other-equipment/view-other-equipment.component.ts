import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-other-equipment',
  templateUrl: './view-other-equipment.component.html',
  styleUrls: ['./view-other-equipment.component.css']
})
export class ViewOtherEquipmentComponent implements OnInit {
  @Input() otherEquipmentList;
  @Input() tabName;
  constructor() { }

  ngOnInit() {
  }

}
