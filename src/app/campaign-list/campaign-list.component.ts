import { Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../services/common.service';
import {MatDialog} from '@angular/material/dialog';
import { DetailsDialogComponent } from '../details-dialog/details-dialog.component';
import { UserData,Action}from  '../shared/constant'


@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss']
})
export class CampaignListComponent {
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['id', 'name', 'progress', 'ctr','start_date','actions'];
  dataSource: MatTableDataSource<UserData>;
  membersList: any[] = [];
  sorted: string[] = [];

  page = 0;
  limit = 5;
  sortedData: string[]

  // private firebase : AngularFirestore
  constructor(public dialog: MatDialog,
    public commonService: CommonService,
    private toastr: ToastrService) {
  
    this.getAllMember()
    this.sortedData = this.sorted.slice();

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
  }

  ngOnit(){
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
 
  //sorting data based on label
  sortData(sort: Sort) {
    const data = this.sorted.slice();
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

  // getting all  campaign member details
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

  // deleting campaign member by id
  deleteCampaign(id: string) {
    this.commonService.deleteCampaign(id).subscribe((res: any) => {
      this.getAllMember();
      this.toastr.success('Campaign deleted successfully!');
    })
  }

  //open campaign detail summary page
  openDialog(id: any): void {
    this.commonService.getDataById(id).subscribe(
      (res) => {
        const dialogRef = this.dialog.open(DetailsDialogComponent, {
          width: '1000px',
          height: '600px',
          data:res
        });
    
        dialogRef.afterClosed().subscribe(result => {
        });
      }
    )
  }

}
