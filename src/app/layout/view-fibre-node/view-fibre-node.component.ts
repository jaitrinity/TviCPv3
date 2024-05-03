import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-fibre-node',
  templateUrl: './view-fibre-node.component.html',
  styleUrls: ['./view-fibre-node.component.css']
})
export class ViewFibreNodeComponent implements OnInit {
  
  show : boolean = false;
  @Input() fibreNodeList;
  @Input() tabName;
  constructor() { }

  ngOnInit() {
  }

}
