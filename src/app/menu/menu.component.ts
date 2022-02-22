import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isActive = 0; //açılır menü için kulladım
  forSwitch1 = 1;
  forSwitch2 = 0;
  forSwitch3 = 0;
  forSwitch4 = 0;
  forSwitch5 = 0;
  activetext = 0

  constructor() { }

  ngOnInit(): void {
   
  }
// Açılır menü başlangıç 
  menuClick(){
    if (this.isActive==0) {
      this.isActive=1;

    }else{
      this.isActive=0;
    }
    
    
  }
  // Açılır menü Bitiş

  homeSwitchClick(){

    if (this.forSwitch1==0) {
      this.forSwitch1=1;
      this.forSwitch2 = 0;
      this.forSwitch3 = 0;
      this.forSwitch4 = 0;
      this.forSwitch5 = 0;

    }else{
      this.isActive=0;
      this.forSwitch1=1;
      
    }
    
  }
  folderSwitchClick(){
    if (this.forSwitch2==0) {
      this.forSwitch1=0;
      this.forSwitch2 = 1;
      this.forSwitch3 = 0;
      this.forSwitch4 = 0;
      this.forSwitch5 = 0;

    }else{
      this.isActive=0;
      this.forSwitch2=1;
    }
  }

  appyPieSwitchClick(){
    if (this.forSwitch3==0) {
      this.forSwitch1=0;
      this.forSwitch2 = 0;
      this.forSwitch3 = 1;
      this.forSwitch4 = 0;
      this.forSwitch5 = 0;

    }else{
      this.isActive=0;
      this.forSwitch3=1;
    }
  }

  setting1SwitchClick(){
    if (this.forSwitch4==0) {
      this.forSwitch1=0;
      this.forSwitch2 = 0;
      this.forSwitch3 = 0;
      this.forSwitch4 = 1;
      this.forSwitch5 = 0;

    }else{
      this.isActive=0;
      this.forSwitch4=1;
    }
  }

  setting2SwitchClick(){
    if (this.forSwitch5==0) {
      this.forSwitch1=0;
      this.forSwitch2 = 0;
      this.forSwitch3 = 0;
      this.forSwitch4 = 0;
      this.forSwitch5 = 1;

    }else{
      this.isActive=0;
      this.forSwitch5=1;
    }
  }
  }



