import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bts',
  templateUrl: './bts.component.html',
  styleUrls: ['./bts.component.css']
})
export class BtsComponent implements OnInit {

  @Input() btsList;
  constructor() { }

  ngOnInit() {
  }

}
