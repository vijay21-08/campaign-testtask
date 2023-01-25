import { Component, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

const DataFromAPI = [{
  label: 'Disk metrics',
  children: [
  {
    label: 'Kbps',
    children: [{
      label: 'Read'
    }, {
      label: 'Write'
    }, {
      label: 'Total'
    },
    ]
  }]
}];

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss']
})
export class Form3Component {
  constructor(private _formBuilder: FormBuilder){    
    this.modulesList = DataFromAPI;
  }

  search_val: FormControl = new FormControl("");
  search_input: string = "";
  @Output() backEmitter:EventEmitter<boolean>= new EventEmitter();

  @Output() thirdFormEmitter: EventEmitter<FormGroup> = new EventEmitter();
  thirdFormGroup = this._formBuilder.group({
    search: [''],
  });

  public modulesList: Array<any>;
  public classifications: string[] = [];
  public selectedClassification = 'Read';

  public selectionList = ["Read", "Write", "Total"];
  
  onDropdownItemSelected(eve: any){
    console.log("Last value selected", eve);
    this.selectedClassification = eve.srcElement.value?.toString();
  }
  
  sendForm() {
    this.thirdFormEmitter.emit(this.thirdFormGroup);
  }
  back(){
    this.backEmitter.emit(true)
  }
}
