import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ip55',
  templateUrl: './ip55.component.html',
  styleUrls: ['./ip55.component.css']
})
export class Ip55Component implements OnInit {

  @Input() ip55List;
  constructor() { }

  ngOnInit() {
  }

}
