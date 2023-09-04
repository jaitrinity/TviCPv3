import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-tma-tmb',
  templateUrl: './edit-tma-tmb.component.html',
  styleUrls: ['./edit-tma-tmb.component.css']
})
export class EditTmaTmbComponent implements OnInit {

  @Input() tmaTmbList;
  @Input() changeFeasibility;
  @Input() feasibilityArr;
  constructor() { }

  ngOnInit() {
  }

}
