import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnityCallbackProxyService {

   // Observable string sources
   private messageSource = new Subject<string>();

   // Observable string streams
   messageSent$ = this.messageSource.asObservable();

   // Service message commands
   sendMessage(mission: string) {
     this.messageSource.next(mission);
   }
  constructor() { }
}
