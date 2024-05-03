import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-mcb',
  templateUrl: './edit-mcb.component.html',
  styleUrls: ['./edit-mcb.component.css']
})
export class EditMcbComponent implements OnInit {

  @Input() viewSrNumber;
  @Input() changeFeasibility;
  @Input() feasibilityArr;
  @Input() mcbData;
  @Input() totalMcb;
  constructor() { }

  ngOnInit() {
  }

}
