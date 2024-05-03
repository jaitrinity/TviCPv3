import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rru-delete',
  templateUrl: './rru-delete.component.html',
  styleUrls: ['./rru-delete.component.css']
})
export class RruDeleteComponent implements OnInit {

  @Input() rruList;
  constructor() { }

  ngOnInit() {
  }

}
