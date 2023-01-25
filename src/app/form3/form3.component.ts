import { Component, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { DataFromAPI }from  '../shared/constant'


@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss']
})
export class Form3Component {
  @Output() backEmitter:EventEmitter<boolean>= new EventEmitter();
  @Output() thirdFormEmitter: EventEmitter<any> = new EventEmitter();

  search_val: FormControl = new FormControl("");
  search_input: string = "";
  
  thirdFormGroup = this._formBuilder.group({
    search: [''],
  });

  public modulesList: Array<any>;
  public classifications: string[] = [];
  public selectedClassification = 'Read';

  public selectionList = ["Read", "Write", "Total"];

  constructor(private _formBuilder: FormBuilder){    
    this.modulesList = DataFromAPI.data;
  }
  
  onDropdownItemSelected(eve: any){
    this.selectedClassification = eve.srcElement.value?.toString();
  }
  //emitting third form
  sendForm() {
    this.thirdFormEmitter.emit(DataFromAPI);
  }
  
  back(){
    this.backEmitter.emit(true)
  }
}
