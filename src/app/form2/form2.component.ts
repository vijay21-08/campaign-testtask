import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import {OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';

interface Food {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen'},
  {position: 2, name: 'Helium'},
  {position: 3, name: 'Lithium'},
  {position: 4, name: 'Beryllium'},
  {position: 5, name: 'Boron'},
  {position: 6, name: 'Carbon'},
  {position: 7, name: 'Nitrogen'},
  {position: 8, name: 'Oxygen'},
  {position: 9, name: 'Fluorine'},
  {position: 10, name: 'Neon'},
];

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit  {
  
  @Output() backEmitter:EventEmitter<boolean>= new EventEmitter();
  
  @ViewChild('search')
  public searchElementRef!: ElementRef;
  latitude!: number;
  longitude!: number;
  zoom!:number;
  address!: string;
  private geoCoder:any;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataToDisplay = [...ELEMENT_DATA];
  
  dataSource = new ExampleDataSource(this.dataToDisplay);
  
  @Output() secondFormEmitter: EventEmitter<FormGroup> = new EventEmitter();
  // secondFormGroup = this._formBuilder.group({
  //   radius: ['', Validators.required],
  //   // campaignCat: ['', Validators.required],
  //   // orderType: ['', Validators.required],
  //   // additionalComments: ['', Validators.required],
  // });
  
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  VOForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder,
      private mapsAPILoader: MapsAPILoader,
      private ngZone: NgZone,
      private fb: FormBuilder){}
  
  ngOnInit() {
     //load Places Autocomplete
     this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });

    this.VOForm = this._formBuilder.group({
      VORows: this._formBuilder.array([]),
      radius: ['', Validators.required]
    });

    this.VOForm = this.fb.group({
      VORows: this.fb.array(ELEMENT_DATA.map(val => this.fb.group({
        position: new FormControl(val.position),
        name: new FormControl(val.name),
        action: new FormControl('existingRecord'),
        isEditable: new FormControl(true),
        isNewRow: new FormControl(false),
      })
      )),
      radius: ['', Validators.required]
    }); 

    this.dataSource = new ExampleDataSource((this.VOForm.get('VORows') as FormArray).controls);
  }
  sendForm() {
    this.secondFormEmitter.emit(this.VOForm);
  }
  back(){
    this.backEmitter.emit(true)
  }


  // editData() {
  //   const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
  //   this.dataToDisplay = [...this.dataToDisplay, ELEMENT_DATA[randomElementIndex]];
  //   this.dataSource.setData(this.dataToDisplay);
  // }

  removeData(index: number) {
    const control = this.VOForm.get('VORows') as FormArray;
     console.log(control, index)
     control.removeAt(index);
     this.dataSource = new ExampleDataSource(control.controls)
    // this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    // this.dataSource.setData(this.dataToDisplay);
  }
 // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }
  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }
  getAddress(latitude:any, longitude: any ){
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results:any, status:any) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

  EditSVO(VOFormElement: any, i: any) {

    // VOFormElement.get('VORows').at(i).get('name').disabled(false)
    VOFormElement.get('VORows').at(i).get('isEditable').patchValue(false);
    // this.isEditableNew = true;
  }

  // On click of correct button in table (after click on edit) this method will call
  SaveVO(VOFormElement: any, i: any) {
    // alert('SaveVO')
    VOFormElement.get('VORows').at(i).get('isEditable').patchValue(true);
  }

  // On click of cancel button in the table (after click on edit) this method will call and reset the previous data
  CancelSVO(VOFormElement: any, i: any) {
    VOFormElement.get('VORows').at(i).get('isEditable').patchValue(true);
  }

  // @ViewChild('table') table: MatTable<PeriodicElement>;
  AddNewRow() {
    // this.getBasicDetails();
    const control = this.VOForm.get('VORows') as FormArray;
    let newIndex: number = control.controls?.length + 1 || 1000; 
    control.insert(0,this.initiateVOForm(newIndex));
    this.dataSource = new ExampleDataSource(control.controls)
    // control.controls.unshift(this.initiateVOForm());
    // this.openPanel(panel);
      // this.table.renderRows();
      // this.dataSource.data = this.dataSource.data;
  }

  initiateVOForm(newIndex: number): FormGroup {
    return this.fb.group({

      position: new FormControl(newIndex),
                name: new FormControl(''),
                action: new FormControl('newRecord'),
                isEditable: new FormControl(false),
                isNewRow: new FormControl(true),
    });
  }
  
}

class ExampleDataSource extends DataSource<any> {
  private _dataStream = new ReplaySubject<any[]>();

  constructor(initialData: any[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<any[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: any[]) {
    this._dataStream.next(data);
  }
}

