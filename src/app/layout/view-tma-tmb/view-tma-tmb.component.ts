import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-tma-tmb',
  templateUrl: './view-tma-tmb.component.html',
  styleUrls: ['./view-tma-tmb.component.css']
})
export class ViewTmaTmbComponent implements OnInit {

  @Input() tmaTmbList;
  constructor() { }

  ngOnInit() {
  }

}
