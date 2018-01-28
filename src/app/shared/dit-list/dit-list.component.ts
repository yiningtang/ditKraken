import { Component, Input, Output, EventEmitter, OnInit, ViewEncapsulation } from '@angular/core';
import { MatListModule } from '@angular/material';

@Component({
  selector: 'dit-list',
  templateUrl: './dit-list.component.html',
  styleUrls: ['./dit-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DitListComponent implements OnInit {
  @Input() items: Array<any>;
  @Output() onListClicked: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  selectBranch(id) {
  	console.log(id);
    this.onListClicked.emit(id);
  }

}
