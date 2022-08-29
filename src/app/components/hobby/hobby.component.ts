import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent {
@Input() myhobby:any[]=[];
@Output() rhobby = new EventEmitter;
@Output() addf = new EventEmitter;
  constructor() {
   }
  delhobby(data:number){
    this.rhobby.emit(data);
  }
  afav(data:number){
    this.addf.emit(data);
  }
}

