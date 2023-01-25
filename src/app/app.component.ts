import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private commonService: CommonService) {}
  title = 'Campaign-test-task';
  isShowForm: boolean = false;
  subscription: any;

  ngOnInit() {
    this.subscription = this.commonService.showList.subscribe(
      (res: any) => {
        this.isShowForm = !res;
      }
    )
  }

  handleClick() {
    this.isShowForm = true;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
