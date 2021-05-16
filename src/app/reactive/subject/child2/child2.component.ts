import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  username!: string;
  constructor(private _UserService:UserService) { }

  ngOnInit(): void {
    this._UserService.username.subscribe(username => {
      this.username = username;
    })
  }

  createUser(uname:{value:string}) {
  this._UserService.username.next(uname.value)
  }
}
