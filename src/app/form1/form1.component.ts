import { Component, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component {
  constructor(private _formBuilder: FormBuilder) {}

  @Output() firstFormEmitter: EventEmitter<FormGroup> = new EventEmitter();

  firstFormGroup = this._formBuilder.group({
    campaignObj: ['', Validators.required],
    campaignCat: ['', Validators.required],
    orderType: ['', Validators.required],
    additionalComments: ['', Validators.required],
  });
  
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  sendForm() {
    this.firstFormEmitter.emit(this.firstFormGroup);
  }
}
