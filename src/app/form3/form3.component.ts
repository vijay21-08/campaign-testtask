import { Component, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss']
})
export class Form3Component {
  constructor(private _formBuilder: FormBuilder){}
  @Output() backEmitter:EventEmitter<boolean>= new EventEmitter();

  @Output() thirdFormEmitter: EventEmitter<FormGroup> = new EventEmitter();
  thirdFormGroup = this._formBuilder.group({
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
    this.thirdFormEmitter.emit(this.thirdFormGroup);
  }
  back(){
    this.backEmitter.emit(true)
  }
}
