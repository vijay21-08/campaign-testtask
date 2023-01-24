import {Component, Injectable, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MatStepper, MatStepperIntl} from '@angular/material/stepper';

@Injectable()
export class StepperIntl extends MatStepperIntl {
  // the default optional label text, if unspecified is "Optional"
  override optionalLabel = 'Optional Label';
}

@Component({
  selector: 'app-campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.scss'],
  providers: [{provide: MatStepperIntl, useClass: StepperIntl}],
})
export class CampaignFormComponent {
  @ViewChild('stepper') private myStepper!: MatStepper;
  
  optionalLabelText!: string;
  optionalLabelTextChoices: string[] = ['Option 1', 'Option 2', 'Option 3'];
  
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder, private _matStepperIntl: MatStepperIntl) {}

  updateOptionalLabel() {
    this._matStepperIntl.optionalLabel = this.optionalLabelText;
    // Required for the optional label text to be updated
    // Notifies the MatStepperIntl service that a change has been made
    this._matStepperIntl.changes.next();
  }

  goBack(){
    this.myStepper.previous();
  }

  goForward(){
    this.myStepper.next();
  }

  firstFormSubmission(eve: any) {
    console.log("First Form Details", eve);
    if (eve.valid) {
      this.goForward();
    } else {

    }
  }

  secondFormSubmission(eve: any) {
    console.log("second Form Details", eve);
    if (eve.valid) {
      this.goForward();
    } else {
      
    }
  }
  thirdFormSubmission(eve: any) {
    console.log("Third Form Details", eve);
    if (eve.valid) {
      this.goForward();
    } else {
      
    }
  }
}