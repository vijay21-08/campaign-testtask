import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  @Input() form1: any;
  @Input() form3: any;
  @Input() dataSource: any;

  
  displayedColumns: string[] = ['position', 'name', 'latitude', 'longitude'];

}
