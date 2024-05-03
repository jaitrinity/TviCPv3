import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rru-add',
  templateUrl: './rru-add.component.html',
  styleUrls: ['./rru-add.component.css']
})
export class RruAddComponent implements OnInit {

  @Input() rruList;
  constructor() { }

  ngOnInit() {
  }

}
