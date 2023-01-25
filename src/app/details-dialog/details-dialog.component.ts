import { Component, Inject } from '@angular/core';
import { CommonService } from '../services/common.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrls: ['./details-dialog.component.scss']
})
export class DetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<any>,
    private commonService: CommonService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) {}

  form1!: any;
  form2!: any;
  form3!: any;

  displayedColumns: string[] = ['position', 'name', 'latitude', 'longitude', 'label'];
  dataSource! :any[];

  ngOnInit() {
    this.form1 = this.data.campaignDetails
    console.log("form 1", this.form1)
    console.log("form 2", this.form2)
    console.log("form 3", this.form3)
    this.dataSource = this.data.locationDetails
    this.form3 = this.data.audience;

  }

  onclose(): void {
    this.dialogRef.close();
  }

}
