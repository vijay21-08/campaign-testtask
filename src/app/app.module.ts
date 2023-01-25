import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CampaignFormComponent } from './campaign-form/campaign-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { Form3Component } from './form3/form3.component';
import { AgmCoreModule } from '@agm/core';
import {MatIconModule} from '@angular/material/icon';
import { Form4Component } from './form4/form4.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';

import { ToastrModule } from 'ngx-toastr';
import { DetailsDialogComponent } from './details-dialog/details-dialog.component';
import { SummaryComponent } from './summary/summary.component';



@NgModule({
  declarations: [
    AppComponent,
    CampaignListComponent,
    CampaignFormComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    Form4Component,
    DetailsDialogComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatSortModule,
    MatSelectModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    HttpClientModule,
    MatExpansionModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA_S6OnrLoBlHFUm-TKNdJugb-sfS1dJl0',
      libraries: ['places']
    }),
    MatIconModule,
    MatMenuModule,
    MatCheckboxModule,
    ToastrModule.forRoot(),
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
