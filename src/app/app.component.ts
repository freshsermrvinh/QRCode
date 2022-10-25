import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'QR';
  public baseInfo = 'http://localhost:4200/';
  public qrInfo = this.baseInfo;
  public width = 399;
  public name ='';
  public age = 0;

  constructor(route: ActivatedRoute){
    route.queryParams.subscribe((v) => {
      console.log("queryParams = ",v);
      if(v && v.data){
        const data = v.data;
        console.log("queryParams = ",data);
        console.log("name = ",data.name);
        console.log("age = ",data.age);
        
        const obj = JSON.parse(data);
        console.log("queryParams Oject = ",obj);
        console.log("name = ",obj.name)
        console.log("age = ",obj.age)

      }   
  });
}

  public ngOnInit(): void{}

  public changeBase(event: any): void {
    console.log('event=', event.target.value);
    this.baseInfo = event.target.value;
    this.qrInfo = event.target.value;
    this.combine();
  }
  public changeName(event: any): void {
    this.name = event.target.value;
    this.combine();
  }
  public changeAge(event: any): void {
    this.age = event.target.value;
    this.combine();
  }

  public combine():void{
    const data = JSON.stringify({name:this.name,age:this.age});
    this.qrInfo = this.baseInfo +'?data=' + data;
    console.log('qrInfo',this.qrInfo);
  }
}
