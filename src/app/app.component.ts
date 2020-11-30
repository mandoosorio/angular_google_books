import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'restapi';
  public apiInfo;

  constructor(public info: ApiService) { }

  ngOnInit(): void {
    this.info.getInfo().subscribe( response => {
      this.apiInfo = response;
      console.log(response);
    });
  }

  click() {
    this.info.getInfo().subscribe( response => {
      this.apiInfo = response;
      console.log(response);
    })
  }
}
