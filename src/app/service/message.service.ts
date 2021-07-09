import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject=new Subject<any>();
  public sendMessage(MESSAGE:String):void{
    this.subject.next({text:MESSAGE});
  }
  public getMessage():Observable<any>{
    return this.subject.asObservable();
  }
  constructor() { }
}
