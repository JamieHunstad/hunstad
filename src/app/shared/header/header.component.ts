import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggle: boolean = false;
  removeClouds: boolean = false;
  fireClouds: boolean = false;

  constructor() {
   }


  ngOnInit(): void {
    setTimeout(() => {
      this.removeClouds = false;
      this.fireClouds = false;
      this.fireClouds = true;

      setTimeout(() => {
        this.removeClouds = true;
      }, 3000)

    }, 30)
  }

  navToggle(){
    this.toggle = !this.toggle;
  }

  

}
