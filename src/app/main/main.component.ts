import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { BranchSelectService } from '../shared/branch-select.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers:[BranchSelectService]
})
export class MainComponent implements OnInit {
  @Input('selectedBranch') selectedBranch: any;
  constructor(private branchSelect: BranchSelectService) {
  this.selectedBranch = 'testtest'; }

  ngOnInit() {
  }



}
