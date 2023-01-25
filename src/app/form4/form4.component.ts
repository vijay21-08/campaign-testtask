import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonService } from '../services/common.service';


@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.scss']
})
export class Form4Component implements OnInit {

  constructor(private commonService: CommonService) {}

  @Input() form1!: any;
  @Input() form2!: any;
  @Input() form3!: any;

  PROGRESS: string[] = [
    'Pending',
    'Completed',
    'Scheduled'
  ];
  
  generateCtr() {
    return Math.round(Math.random() * 100)
  }

  generateProgress() {
    let index = Math.floor(Math.random() * 3);    ;
    return this.PROGRESS[index];
  }

  displayedColumns: string[] = ['position', 'name', 'latitude', 'longitude', 'label'];
  dataSource! :any[];

  ngOnInit() {
    this.form1 = this.form1.value
    this.form2 = this.form2.value
    console.log("form 1", this.form1)
    console.log("form 2", this.form2)
    console.log("form 3", this.form3)
    this.dataSource = this.form2.VORows;

    this.form3.data = this.form3.data.filter(
      (ele1: any) => {
        return ele1.children.some(
          (ele2: any) => {
            return ele2.children.some(
              (ele3: any) => {
                return ele3.checked;
              }
            )
          }
        )
      }
    )

    for (let ele1 of this.form3.data) {
      ele1.children = ele1.children.filter(
        (ele2: any) => {
          return ele2.children.some(
            (ele3: any) => {
              return ele3.checked;
            }
          )
        }
      )
    }

    // this.form3.data = this.form3.data.map(
    //   (ele1: any) => {
    //     return ele1.children.filter(
    //       (ele2: any) => {
    //         return ele2.children.some(
    //           (ele3: any) => {
    //             return ele3.checked;
    //           }
    //         )
    //       }
    //     )
    //   }
    // )

    console.log(this.form3)
  }

  sendData() {
    const finalData = {
      campaignDetails: this.form1,
      locationDetails: this.form2.VORows,
      radius: this.form2.radius,
      audience: this.form3.data,
      ctr: this.generateCtr(),
      progress: this.generateProgress(),
      start_date: new Date(),
    }

    this.commonService.postData(finalData)
      .subscribe((data: any) => {
        console.log(data)
        this.commonService.showList.next(true);
        // this.getAllMember()
      })  
  }
}
