import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public library: string[] = [ ];

  public searchString?: string = "";

  private apiKey;

  constructor(private http: HttpClient) { }

  public addBook(book: string): void {
    this.library.push(book);
    console.log(this.library);
  }

  public getLibrary(): string[] {
    return this.library;
  }

  public printSearch(): void {
    console.log("title for api: " + this.searchString);
    this.getInfo();
  }

  public getInfo() {
    console.log("this.searchString", this.searchString);
    this.apiKey = "AIzaSyBXh-q5PwWPI2nNsQEaJr4Zloljeza2VGc";
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${this.searchString}&key=AIzaSyBXh-q5PwWPI2nNsQEaJr4Zloljeza2VGc&maxResults=10`);
  }

  //need to find a way to call on the api on click and render the information
}
