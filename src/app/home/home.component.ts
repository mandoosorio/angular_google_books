import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public inventory: string[] = [ ];

  public apiInfo;

  public currentItem?: string;
  
  constructor(public info: ApiService) { }

  ngOnInit(): void {
    this.info.getInfo().subscribe( response => {
      this.apiInfo = response;
      console.log(response);
    });
  }

  processItemSelect(item: string) {
    this.currentItem = item;
  }

  public addItem(item: string): void {
    this.inventory.push(item);
  }

  public getInventory(): string[] {
    return this.inventory;
  }

}
