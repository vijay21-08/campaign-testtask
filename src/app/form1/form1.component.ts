import { Component, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CommonService } from '../services/common.service';

interface category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component {
  constructor(
    private commonService: CommonService,
    private _formBuilder: FormBuilder) {}

  @Output() firstFormEmitter: EventEmitter<FormGroup> = new EventEmitter();

  firstFormGroup = this._formBuilder.group({
    campaignObj: ['', Validators.required],
    campaignCat: ['', Validators.required],
    orderType: ['', Validators.required],
    additionalComments: ['', Validators.required],
  });
  
  categorys: category[] = [
    {value: 'value-0', viewValue: 'value 1'},
    {value: 'value-1', viewValue: 'value 2'},
    {value: 'value-2', viewValue: 'value 3'},
  ];

  sendForm() {
    this.firstFormEmitter.emit(this.firstFormGroup);
  }
  goToList(){
    this.commonService.showList.next(true);
  }
}
