import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  name: string = "sunita sumbe";
  constructor(private _UserService:UserService) { }

  ngOnInit(): void {
    this._UserService.user.subscribe(uname => {
      this.name = uname;
    })
  }

  createUser(uname:{value:string}) {
  this._UserService.user.next(uname.value)
  }

}
