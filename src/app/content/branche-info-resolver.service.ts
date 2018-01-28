import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable }             from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable }             from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';


@Injectable()
export class BrancheInfoResolver implements Resolve<any> {

  constructor(private http: HttpClient, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    //let id = route.paramMap.get('id');
     let id = 1;
    return this.http.get('http://localhost:8000/'+id+'.json').take(1).map((branch) =>{
    	if(branch) {
    		return branch;
    	}
    	else {
    		this.router.navigate['/home'];
    		return null;
    	}
    });

    /**return this.cs.getCrisis(id).take(1).map(crisis => {
      if (crisis) {
        return crisis;
      } else { // id not found
        this.router.navigate(['/crisis-center']);
        return null;
      }
    });**/
  }

}
