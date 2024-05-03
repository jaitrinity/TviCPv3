import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mcb',
  templateUrl: './mcb.component.html',
  styleUrls: ['./mcb.component.css']
})
export class McbComponent implements OnInit {

  @Input() mcbList;
  constructor() { }

  ngOnInit() {
  }

}
