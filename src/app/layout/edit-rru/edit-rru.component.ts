import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-rru',
  templateUrl: './edit-rru.component.html',
  styleUrls: ['./edit-rru.component.css']
})
export class EditRruComponent implements OnInit {

  @Input() rruCabinetList;
  @Input() changeFeasibility;
  @Input() feasibilityArr;
  @Input() rruUnit;
  @Input() tabName;
  constructor() { }

  ngOnInit() {
  }

}
