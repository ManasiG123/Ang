import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],




})
export class AppComponent {

  phoneNumber = "1234567890";

  hobbies = [{name:"Travelling",startdt:"2022-01-01",fav:0},
  {name:"Dancing",startdt:"2022-01-01",fav:0}
];
favhobby:any[]=[];
lnk = "";
isLoggedin = false;
  invalue = "";
  isActive = false;
  title = 'Hobbies';
  col = 2;
  email = "gmanasi32@gmail.com.com";
  xyz:any;
  pic = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/British_Airways_747-400_World_Traveller_cabin.jpg/220px-British_Airways_747-400_World_Traveller_cabin.jpg";
  myhobby: any;
  addHobby($event:any){
    let obj = {name:$event,startdt:"2022-01-02",fav:0};
    this.hobbies.unshift(obj);
  }

  
  updatelnk(data:string){
    this.lnk = data;
  }

 // Addtohobby($event:any){
    //console.log($event);
   // let obj={id:Math.random(), hobby:$event,img:'', fav:0};
    //this.myhobby.unshift(obj);
    //$event.target.value=""
  //}

 /* AddtoHobby(data:any){
    let obj={name:data, startdt:"2022-01-01",fav:0};
    this.hobbies.unshift(obj);
    console.log(data);
  }*/
   delhobby($event:any){
    this.hobbies.splice($event,1);
  }
  addtofav($event:any){
    this.hobbies[$event].fav=1;
    this.favhobby=this.hobbies.filter(item=>item.fav==1);
  }
  removefav($event:any){
    this.hobbies[$event].fav=0;
  }

}


  // invalue="";
  // isActive=false;

  // col=2;
  // email="gmanasi32@gmail.com"
  //  pic="https://upload.wikimedia.org/wikipedia/commons/7/72/A_backpacking_travel_to_europe_R002-005.jpg";
  // test($event:any){
  //   console.log($event.target.value);
  //   this.invalue=$event.target.value;
  // }
 
  // deleteHobby (data:any) {
  //   this.hobbies = this.hobbies.filter((v, i) => i !== data);
  // }
