import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as Allvalidators from "../../shared/validations.validators"
@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.css']
})
export class FormvalidationComponent implements OnInit {
  validation: any;
  constructor(private _formBuilde: FormBuilder) {
    this.validation = this._formBuilde.group({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(10),Allvalidators.OnlyCharfieldValidator.validOnlyCharField]],
      dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      email: ["" , [Validators.required,Validators.email]],
      pswd: ["", Validators.compose([Validators.required])],
      mobile:["", Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10), Allvalidators.NumericFieldValidator.validNumericField])]
    })
  }

  ngOnInit(): void {
  }


  validationForm() {
    console.log("hii");
    console.log(this.validation.value)
  }

}
