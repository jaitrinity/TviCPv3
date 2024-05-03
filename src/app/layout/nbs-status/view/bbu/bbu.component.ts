import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bbu',
  templateUrl: './bbu.component.html',
  styleUrls: ['./bbu.component.css']
})
export class BbuComponent implements OnInit {

  @Input() bbuList;
  constructor() { }

  ngOnInit() {
  }

}
