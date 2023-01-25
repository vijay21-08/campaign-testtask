import { Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../services/common.service';
// import { AngularFirestore } from '@angular/fire/firestore'
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Form4Component} from '../form4/form4.component'

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


@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss']
})
export class CampaignListComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['id', 'name', 'progress', 'ctr','start_date','actions'];
  dataSource: MatTableDataSource<UserData>;
  membersList: any[] = [];

  page = 0;
  limit = 20;

  
  sortedData: string[]

  actions: Action[] = [
    {value: 'value-1', viewValue: 'Value 1'},
    {value: 'value-2', viewValue: 'Value 2'}
  ];
  // private firebase : AngularFirestore
  constructor(public dialog: MatDialog,
    public commonService: CommonService,
    private toastr: ToastrService) {
      
 
    this.getAllMember()
    this.sortedData = sorted.slice();
    

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
  }
  openDialog(id: any): void {
    // this.commonService.getData()
    const dialogRef = this.dialog.open(Form4Component, {
      data:{
        data: "dummy data",
        byPopup: true,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
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
        case 'id':
          return this.compare(a, b, isAsc);
        case 'name':
          return this.compare(a, b, isAsc);
        case 'progress':
          return this.compare(a, b, isAsc);
        case 'ctr':
          return this.compare(a, b, isAsc);
        case 'start_date':
          return this.compare(a, b, isAsc);
        default:
          return 0;
      }
    });
  }

  getAllMember(){
    const startIndex = this.page * this.limit;
    const endIndex = (this.page * this.limit) + this.limit;

      this.commonService.getData().subscribe((res: any) => {
        res.map((r:any) => {
          r.ctr=  Math.round(Math.random() * 100)
          r.start_date= new Date(Math.floor(Math.random() * Date.now()))

        })
       this.membersList = res;
       this.dataSource.data = this.membersList.slice(startIndex, endIndex);
        
      })
  }

  pageSizeChangeHandler(event: any) {
    this.limit = event.pageSize;
    this.page = event.pageIndex++;
    
    const startIndex = this.page * this.limit;
    const endIndex = (this.page * this.limit) + this.limit;

    this.dataSource.data = this.membersList.slice(startIndex, endIndex);
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  deleteCampaign(id: string) {
    this.commonService.deleteCampaign(id).subscribe((res: any) => {
      this.getAllMember();
      this.toastr.success('Campaign deleted successfully!');
    })
  }
}
