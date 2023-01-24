import { Component, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component {
  constructor(private _formBuilder: FormBuilder){}
  @Output() backEmitter:EventEmitter<boolean>= new EventEmitter();

  @Output() secondFormEmitter: EventEmitter<FormGroup> = new EventEmitter();
  secondFormGroup = this._formBuilder.group({
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
    this.secondFormEmitter.emit(this.secondFormGroup);
  }
  back(){
    this.backEmitter.emit(true)
  }
}
