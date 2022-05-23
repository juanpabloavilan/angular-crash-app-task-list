import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UiService {
  private isToggleAddTask: boolean =false
  private subject : Subject<any> = new Subject<any>()

  constructor() { }

  toggleAddTask(){
    this.isToggleAddTask=!this.isToggleAddTask
    this.subject.next(this.isToggleAddTask)
  }

  onToogle() : Observable<any> {
    return this.subject.asObservable()
  }
}
