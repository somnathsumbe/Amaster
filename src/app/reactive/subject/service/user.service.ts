import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = new Subject<string>();
  username = new BehaviorSubject<string>("somnath Sumbe");
  constructor() { }

  
}
