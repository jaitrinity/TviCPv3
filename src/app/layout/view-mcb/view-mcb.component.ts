import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-mcb',
  templateUrl: './view-mcb.component.html',
  styleUrls: ['./view-mcb.component.css']
})
export class ViewMcbComponent implements OnInit {

  @Input() mcbList;
  constructor() { }

  ngOnInit() {
  }

}
