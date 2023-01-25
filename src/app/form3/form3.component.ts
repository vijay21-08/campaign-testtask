import { Component, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

//data for  dropdown
const DataFromAPI = {
  valid: true,
  data: [
    {label: 'DemoGraphic',
    children: [
    {
      label: 'Age1',
      children: [
      {
        label: '< 20',
        checked: false,
      },
      {
        label: '20-29',
        checked: false,
      },
      {
        label: '30-39',
        checked: false,
      },
      {
        label: '40-49',
        checked: false,
      },
      {
        label: '50-59',
        checked: false,
      }
      ]
    },
    {
      label: 'gender1',
      children: [
      {
        label: '< 20',
        checked: false,
      },
      {
        label: '20-29',
        checked: false,
      },
      {
        label: '30-39',
        checked: false,
      },
      {
        label: '40-49',
        checked: false,
      },
      {
        label: '50-59',
        checked: false,
      }
      ]
    },
    {
      label: '360 Labels1',
      children: [
      {
        label: '< 20',
        checked: false,
      },
      {
        label: '20-29',
        checked: false,
      },
      {
        label: '30-39',
        checked: false,
      },
      {
        label: '40-49',
        checked: false,
      },
      {
        label: '50-59',
        checked: false,
      }
      ]
    },
    {
      label: 'Handset1',
      children: [
      {
        label: '< 20',
        checked: false,
      },
      {
        label: '20-29',
        checked: false,
      },
      {
        label: '30-39',
        checked: false,
      },
      {
        label: '40-49',
        checked: false,
      },
      {
        label: '50-59',
        checked: false,
      }
      ]
    },
  ]},
    {label: 'GeoGraphic',
    children: [
    {
      label: 'Age1',
      children: [
      {
        label: '< 20',
        checked: false,
      },
      {
        label: '20-29',
        checked: false,
      },
      {
        label: '30-39',
        checked: false,
      },
      {
        label: '40-49',
        checked: false,
      },
      {
        label: '50-59',
        checked: false,
      }
      ]
    },
    {
      label: 'gender1',
      children: [
      {
        label: '< 20',
        checked: false,
      },
      {
        label: '20-29',
        checked: false,
      },
      {
        label: '30-39',
        checked: false,
      },
      {
        label: '40-49',
        checked: false,
      },
      {
        label: '50-59',
        checked: false,
      }
      ]
    },
    {
      label: '360 Labels1',
      children: [
      {
        label: '< 20',
        checked: false,
      },
      {
        label: '20-29',
        checked: false,
      },
      {
        label: '30-39',
        checked: false,
      },
      {
        label: '40-49',
        checked: false,
      },
      {
        label: '50-59',
        checked: false,
      }
      ]
    },
    {
      label: 'Handset1',
      children: [
      {
        label: '< 20',
        checked: false,
      },
      {
        label: '20-29',
        checked: false,
      },
      {
        label: '30-39',
        checked: false,
      },
      {
        label: '40-49',
        checked: false,
      },
      {
        label: '50-59',
        checked: false,
      }
      ]
    },
  ]},
    {label: 'Commercial Relevance',
    children: [
    {
      label: 'Age1',
      children: [
      {
        label: '< 20',
        checked: false,
      },
      {
        label: '20-29',
        checked: false,
      },
      {
        label: '30-39',
        checked: false,
      },
      {
        label: '40-49',
        checked: false,
      },
      {
        label: '50-59',
        checked: false,
      }
      ]
    },
    {
      label: 'gender1',
      children: [
      {
        label: '< 20',
        checked: false,
      },
      {
        label: '20-29',
        checked: false,
      },
      {
        label: '30-39',
        checked: false,
      },
      {
        label: '40-49',
        checked: false,
      },
      {
        label: '50-59',
        checked: false,
      }
      ]
    },
    {
      label: '360 Labels1',
      children: [
      {
        label: '< 20',
        checked: false,
      },
      {
        label: '20-29',
        checked: false,
      },
      {
        label: '30-39',
        checked: false,
      },
      {
        label: '40-49',
        checked: false,
      },
      {
        label: '50-59',
        checked: false,
      }
      ]
    },
    {
      label: 'Handset1',
      children: [
      {
        label: '< 20',
        checked: false,
      },
      {
        label: '20-29',
        checked: false,
      },
      {
        label: '30-39',
        checked: false,
      },
      {
        label: '40-49',
        checked: false,
      },
      {
        label: '50-59',
        checked: false,
      }
      ]
    },
  ]}
  ]
}

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss']
})
export class Form3Component {
  constructor(private _formBuilder: FormBuilder){    
    this.modulesList = DataFromAPI.data;
  }

  search_val: FormControl = new FormControl("");
  search_input: string = "";
  @Output() backEmitter:EventEmitter<boolean>= new EventEmitter();

  @Output() thirdFormEmitter: EventEmitter<any> = new EventEmitter();
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
    console.log("Mock data", DataFromAPI)
    this.thirdFormEmitter.emit(DataFromAPI);
  }
  back(){
    this.backEmitter.emit(true)
  }
}
