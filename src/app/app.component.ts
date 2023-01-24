import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-task';
  isShowForm: boolean = false;

  handleClick() {
    this.isShowForm = true;
  }
}
