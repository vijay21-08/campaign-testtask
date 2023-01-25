import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CommonService } from '../services/common.service';
// import { AngularFirestore } from '@angular/fire/firestore'

export interface UserData {
  id: string;
  name: string;
  progress: string;
  ctr: number;
  start_date: any;
  actions:string;
}

/** Constants used to fill up our data base. */
interface Action {
  value: string;
  viewValue: string;
}
const sorted: string[] = [];
// const PROGRESS: string[] = [
//   'Pending',
//   'Completed',
//   'Scheduled',''
// ];


@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss']
})
export class CampaignListComponent {

  displayedColumns: string[] = ['id', 'name', 'progress', 'ctr','start_date','actions'];
  dataSource: MatTableDataSource<UserData>;
  membersList: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  sortedData: string[];

  actions: Action[] = [
    {value: 'value-1', viewValue: 'Value 1'},
    {value: 'value-2', viewValue: 'Value 2'}
  ];
  // private firebase : AngularFirestore
  constructor(public commonService: CommonService) {
 
    this.getAllMember()
    this.sortedData = sorted.slice();

    // Assign the data to the data source for the table to render

    this.dataSource = new MatTableDataSource();

  }
  ngOnit(){
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 

  sortData(sort: Sort) {
    const data = sorted.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a:any, b:any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'start_date':
          return this.compare(a, b, isAsc);
        default:
          return 0;
      }
    });
  }
  getAllMember(){
      this.commonService.getData().subscribe((res: any) => {
        res.map((r:any) => {
          r.ctr=  Math.round(Math.random() * 100)
          r.start_date= new Date(Math.floor(Math.random() * Date.now()))

        })
       this.dataSource = res
        
      })
  }

 compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

/** Builds and returns a new User. */
//  createNewUser(id: number): UserData {
//   this.getAllMember()
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: PROGRESS[Math.round(Math.random() * 2)],
//     ctr: Math.round(Math.random() * 100),
//     start_date: new Date(Math.floor(Math.random() * Date.now())),
//     actions:''
//   };
  
// }
}
