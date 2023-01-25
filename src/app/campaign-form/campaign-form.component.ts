import { Component, Injectable, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper, MatStepperIntl } from '@angular/material/stepper';

@Injectable()
export class StepperIntl extends MatStepperIntl {
  // the default optional label text, if unspecified is "Optional"
  override optionalLabel = 'Optional Label';
}

@Component({
  selector: 'app-campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.scss'],
  providers: [{ provide: MatStepperIntl, useClass: StepperIntl }],
})
export class CampaignFormComponent {
  @ViewChild('stepper') private myStepper!: MatStepper;

  optionalLabelText!: string;
  optionalLabelTextChoices: string[] = ['Option 1', 'Option 2', 'Option 3'];
  form1!: any;
  form2!: any;
  form3!: any;
  showForm4: boolean = false;

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _matStepperIntl: MatStepperIntl
  ) {}

  updateOptionalLabel() {
    this._matStepperIntl.optionalLabel = this.optionalLabelText;
    this._matStepperIntl.changes.next();
  }

  //stepper previous
  goBack(){
    this.myStepper.previous();
  }

  //stepper next
  goForward(){
    this.myStepper.next();
  }

   //Emitting first form data
  firstFormSubmission(eve: any) {
    if (eve.valid) {
      this.form1 = eve;
      this.goForward();
    } 
  }

   //Emitting Second form data
  secondFormSubmission(eve: any) {
    if (eve.valid) {
      this.form2 = eve;
      this.goForward();
    }
  }

  //Emitting Second form data
  thirdFormSubmission(eve: any) {
    if (eve.valid) {
      this.form3 = eve;
      this.showForm4 = true;
      this.goForward();
    }
  }
}
