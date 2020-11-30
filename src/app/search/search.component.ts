import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

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

  showSearchValue(search: string) {
    console.log(search);
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
