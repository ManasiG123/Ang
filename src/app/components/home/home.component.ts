import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
@Input() msg:string = "hobby";
@Input() hobbylist:any[]=[];
@Output() newhobby = new EventEmitter;
@Output() remhobby = new EventEmitter;
@Output() addfav = new EventEmitter;
@Input() myfav:any[]=[];
@Output() rmvfav=new EventEmitter;

no:any;

  constructor() { }
addnewhobby($event:any){
  this.newhobby.emit($event);
  
}
delhobby($event:any){
  this.remhobby.emit($event);
}
addtofav($event:any){
  this.addfav.emit($event);
}
remvfav($event:any){
  this.rmvfav.emit($event);
}

}
