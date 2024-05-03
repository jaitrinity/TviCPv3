import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-other-node',
  templateUrl: './edit-other-node.component.html',
  styleUrls: ['./edit-other-node.component.css']
})
export class EditOtherNodeComponent implements OnInit {

  @Input() otherNodeList;
  @Input() changeFeasibility;
  @Input() feasibilityArr;
  @Input() tabName;
  constructor() { }

  ngOnInit() {
  }

}
