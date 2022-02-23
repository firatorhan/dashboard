import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  @Input() isActiveChild=0
  textActive1=1
  textActive2=0
  textActive3=0

  constructor() { }

  TopText1Click(){
    if(this.textActive1==1){
      this.textActive2=0
      this.textActive3=0
    }else{
      this.textActive1=1
      this.textActive2=0
      this.textActive3=0
    }
  }
  TopText2Click(){
    if(this.textActive2==1){
      this.textActive1=0
      this.textActive3=0
    }else{
      this.textActive1=0
      this.textActive2=1
      this.textActive3=0
    }

  }
  TopText3Click(){
    if(this.textActive3==1){
      this.textActive1=0
      this.textActive2=0
    }else{
      this.textActive1=0
      this.textActive2=0
      this.textActive3=1
    }

  }

  ngOnInit(): void {
  }

}
