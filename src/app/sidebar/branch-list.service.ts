import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BranchListService {

  constructor(private http: HttpClient) {
  }


  getBranchList() {
  	return this.http.get('http://localhost:8000/branches.json');
  }

}
