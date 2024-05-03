import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-fibre-node',
  templateUrl: './edit-fibre-node.component.html',
  styleUrls: ['./edit-fibre-node.component.css']
})
export class EditFibreNodeComponent implements OnInit {

  @Input() fibreNodeList;
  @Input() feasibilityArr;
  @Input() fibreNode_nodeLocationList;
  @Input() typeOfFiberLaying;
  @Input() typeOfFms;
  @Input() changeFeasibility;
  @Input() tabName;
  constructor() { }

  ngOnInit() {
  }

}
