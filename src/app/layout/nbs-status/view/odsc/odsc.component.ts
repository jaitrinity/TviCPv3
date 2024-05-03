import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odsc',
  templateUrl: './odsc.component.html',
  styleUrls: ['./odsc.component.css']
})
export class OdscComponent implements OnInit {

  @Input() odscList;
  constructor() { }

  ngOnInit() {
  }

}
