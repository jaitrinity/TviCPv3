import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rru',
  templateUrl: './rru.component.html',
  styleUrls: ['./rru.component.css']
})
export class RruComponent implements OnInit {

  @Input() rruList;
  constructor() { }

  ngOnInit() {
  }

}
