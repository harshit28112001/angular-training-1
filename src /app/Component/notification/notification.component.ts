import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  template:
    '<div class="alert alert-success" [hidden]="displayNotfication"><p>This website uses cookes for better user experience</p></div>',

  styles: [
    '.notification-div {margin : 10px 0px; padding:10px 20px; background-color: aquamarine; text-align:center; }',
  ],
})
export class NotificationComponent {
  displayNotfication: boolean = false;
}
