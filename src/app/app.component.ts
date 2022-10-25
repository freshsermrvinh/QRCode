import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'QR';
  public qrInfo = 'QR';
  public width = 399;

  public change(event: any): void {
    console.log('event=', event.target.value);
    this.qrInfo = event.target.value;
  }
}
