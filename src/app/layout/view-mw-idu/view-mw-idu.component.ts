import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-mw-idu',
  templateUrl: './view-mw-idu.component.html',
  styleUrls: ['./view-mw-idu.component.css']
})
export class ViewMwIduComponent implements OnInit {

  show : boolean = false;
  @Input() mwIduList;
  @Input() tabName;
  constructor() { }

  ngOnInit() {
  }

}
