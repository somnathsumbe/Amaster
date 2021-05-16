import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-ragister',
  templateUrl: './ragister.component.html',
  styleUrls: ['./ragister.component.css']
})
export class RagisterComponent implements OnInit {
  register!: any;
  genderLists = ["Male", "Female", "Not Mantion"];
  languages = ["Marathi", "Hindi", "English"];
  citys = ["Pune", "Mumbai", "Nashik"]
  interests = [
    '3D printing',
    'Amateur radio',
    'Scrapbook',
    'Amateur radio',
    'Acting',
    'Baton twirling',
    'Board games',
    'Book restoration',
    'Cabaret',
    'Calligraphy',
    'Candle making'
  ]

  constructor(private _FormBuilder: FormBuilder) {
    this.register = this._FormBuilder.group({
      name: ["Somnath sumbe"],
      password: ["Shiv@9028"],
      lang: this._FormBuilder.array(this.genderLists.map(x => !1)),
      city: ["Mumbai"],
      gender: ["Male"],
      interest: [],
      Comment: []
    })
  }

  ngOnInit(): void {
  }


  ragisterUser() {
    console.log(this.register.value);
  }
}
