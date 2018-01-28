import { Injectable} from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class BranchSelectService {
  data: any;
  dataChange: Observable<any> ;
  dataChangeObserver: any;
  private subject = new Subject();

  constructor() {
    this.dataChange = new Observable((observer: any) => {
      this.dataChangeObserver = observer;
    })
  }

  setData(data:any){
    this.data = data;

    this.subject.next(this.data);
    console.log(this.subject, data);

  }


  getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

}
