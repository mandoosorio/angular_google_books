import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  @Output() bookSelected = new EventEmitter<string>();

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
  }

  public emit(book: string) {
    this.bookSelected.emit(book);
  }

}
