import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-mw-idu',
  templateUrl: './edit-mw-idu.component.html',
  styleUrls: ['./edit-mw-idu.component.css']
})
export class EditMwIduComponent implements OnInit {

  @Input() mwIduList;
  @Input() changeFeasibility;
  @Input() feasibilityArr;
  @Input() mwIduNodeLocation;
  @Input() tabName;
  constructor() { }

  ngOnInit() {
  }

}
