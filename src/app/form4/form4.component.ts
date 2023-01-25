import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.scss']
})
export class Form4Component implements OnInit {
  @Input() form1!: FormGroup;
  @Input() form2!: FormGroup;
  @Input() form3!: FormGroup;

  ngOnInit() {
    console.log("form 1", this.form1)
    console.log("form 2", this.form1)
    console.log("form 3", this.form1)
  }

}
