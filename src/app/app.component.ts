import { Component } from '@angular/core';
import { FormControlName } from '@angular/forms/src/directives/reactive_directives/form_control_name';
import { FormGroupName } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import {NgForm} from '@angular/forms';

//import { setInterval } from 'timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public quote:any;
  ngOnInit() {
   setInterval(() => {
      this.ShowTime();
    }, 1000);
    var j=1;
    for(j=1;j<=localStorage.length;j++)
    this.AlarmArr.push(j);
  }
  daysstr:string="";
  title = 'app';
  imagePath="";
  hour: Number = 0;
  minute: Number = 0;
  seconds: Number = 0;
  ShowTime(){
    this.hour = new Date().getHours();
    this.minute=new Date().getMinutes();
    this.seconds=new Date().getSeconds();
    var i;
    for( i=1;i<= localStorage.length;i++){
      console.log(JSON.parse(localStorage.getItem(i)));
      var obj=JSON.parse(localStorage.getItem(i));
      console.log(obj.time);
     if(obj.time == (this.hour+"-"+this.minute)){
        alert("Ringing Alarm....");
      }
    }
    
  }
  str : object= {};
  user : string = "";
   AlarmArr:any[]=new Array();
  Setalarm(hour,minute){
    this.str ={ 'time':''+hour+'-'+minute+'',
                'days':this.daysstr};
                
    this.AlarmArr.push(localStorage.length);
    console.log(this.str);
    localStorage.setItem((Number(localStorage.length) + 1)),JSON.stringify(this.str))
  }

  Remove(key:any){
    console.log(key);
    localStorage.removeItem(key);
    this.AlarmArr.pop(key-1);
 }

 
 logCheckbox(element): void {
  this.daysstr += element.value;
  console.log (this.daysstr);
  
}

  
  

  //setInterval(Setalarm(), 1000);
  
}


