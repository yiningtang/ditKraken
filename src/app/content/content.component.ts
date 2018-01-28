import { Component, OnInit, ViewEncapsulation, EventEmitter } from '@angular/core';
import {BrancheInfoResolver} from './branche-info-resolver.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable }            from 'rxjs/Observable';
import { BranchSelectService } from '../shared/branch-select.service';
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: []
})
export class ContentComponent implements OnInit {
  selectedBranch : any;
  subscription: Subscription;
  constructor(private activeRoute: ActivatedRoute, private branchSelectService: BranchSelectService) {
  	this.selectedBranch = 'test';
    console.log(this.branchSelectService.dataChange);
    this.subscription = this.branchSelectService.getMessage().subscribe(selectedBranch =>{
    console.log('subscribe', selectedBranch);
    this.selectedBranch = selectedBranch;
  });
  }

  ngOnInit() {

  };


  }


