import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private r:Router) { }

  ngOnInit() {
  }
  adminlogin(x,y)
  {
   
    if(x=='yo')
    {
      if(y==123)
      {
        console.log(x,y);
  this.r.navigate(['/header']);
      }
      else
      {
        this.r.navigate(['/adminlogin']);
        console.log("not");
      }
  
    }
  }
}
