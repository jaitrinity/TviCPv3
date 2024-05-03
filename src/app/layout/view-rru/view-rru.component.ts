import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-rru',
  templateUrl: './view-rru.component.html',
  styleUrls: ['./view-rru.component.css']
})
export class ViewRruComponent implements OnInit {

  show : boolean = false;
  @Input() rruCabinetList;
  @Input() tabName;
  constructor() { }

  ngOnInit() {
  }

}
