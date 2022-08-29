import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addhobby',
  templateUrl: './addhobby.component.html',
  styleUrls: ['./addhobby.component.css']
})
export class AddhobbyComponent {
  myhobby = " ";
  //@Input() myhobby:any[]=[];
@Output() mynewhobby = new EventEmitter;
  constructor() { }
  addhobby(data:string){
    this.mynewhobby.emit(data);
    this.myhobby = "";
  }
  
}