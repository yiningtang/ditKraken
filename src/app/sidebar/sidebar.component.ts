import { Component, OnInit, ViewEncapsulation, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BranchListService} from './branch-list.service';
import {BranchSelectService} from '../shared/branch-select.service';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers:[BranchListService]
})
export class SideBarComponent {
  items:any;
  isSpecial:boolean;
  sidebar: string;
  selectedBranch: any = new EventEmitter();

  constructor(private http: HttpClient, private $branchList: BranchListService, private branchSelect : BranchSelectService) {
  	this.items;
  	this.isSpecial;
    this.sidebar = 'sidebar';
  }

  ngOnInit() {
  this.items = [
  {title:'1asdfd'},
  {title:'2sadf'}];

  this.$branchList.getBranchList().subscribe((branches) => {
  this.items = branches;
  });



  }

  selectBranch(id) {
   this.branchSelect.setData(id);
   // this.branchSelect = id;
  }





}
