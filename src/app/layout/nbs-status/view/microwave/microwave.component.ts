import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-microwave',
  templateUrl: './microwave.component.html',
  styleUrls: ['./microwave.component.css']
})
export class MicrowaveComponent implements OnInit {

  @Input() microwaveList;
  constructor() { }

  ngOnInit() {
  }

}
