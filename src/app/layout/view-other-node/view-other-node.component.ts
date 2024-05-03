import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-other-node',
  templateUrl: './view-other-node.component.html',
  styleUrls: ['./view-other-node.component.css']
})
export class ViewOtherNodeComponent implements OnInit {

  show : boolean = false;
  @Input() otherNodeList;
  @Input() tabName;
  constructor() { }

  ngOnInit() {
  }

}
