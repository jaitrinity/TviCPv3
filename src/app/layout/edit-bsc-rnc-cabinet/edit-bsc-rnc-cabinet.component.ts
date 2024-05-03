import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-bsc-rnc-cabinet',
  templateUrl: './edit-bsc-rnc-cabinet.component.html',
  styleUrls: ['./edit-bsc-rnc-cabinet.component.css']
})
export class EditBscRncCabinetComponent implements OnInit {

  @Input() bscRncCabinetList;
  @Input() changeFeasibility;
  @Input() feasibilityArr;
  @Input() tabName;
  constructor() { }

  ngOnInit() {
  }

}
