import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // emulated is default, others are: None, Native, ShadowDOM
})
export class ServerElementComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('svrElement') element: { type: string; name: string; content: string };

  constructor() {}

  ngOnInit(): void {}
}
