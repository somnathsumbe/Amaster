import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  name: string = "sunita sumbe";
  username!: string;
  constructor(private _UserService:UserService) { }

  ngOnInit(): void {

    this._UserService.user.subscribe(uname => {
      this.name = uname;
    })

    this._UserService.username.subscribe(username => {
      this.username = username;
    })
    
  }

}
