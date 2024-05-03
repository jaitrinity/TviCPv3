import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mimo',
  templateUrl: './mimo.component.html',
  styleUrls: ['./mimo.component.css']
})
export class MimoComponent implements OnInit {

  @Input() mimoList;
  constructor() { }

  ngOnInit() {
  }

}
