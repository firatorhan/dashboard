import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent implements OnInit {

  activetext=1
  activeNatificatiosText=0

  constructor() { }


  projects = [
   {photo:"assets/icons/Ellipse 60.png" ,name: "Project Noname", time:"13 minutes ago"},
   {photo:"/assets/icons/Ellipse 61.png" ,name: "Income calculation", time:"29 minutes ago"},
   {photo:"/assets/icons/Ellipse 62.png" ,name: "New members on Payment project", time:"44 minutes ago"},
   {photo:"/assets/icons/Ellipse 63.png" ,name: "Updated activity", time:"2 hours ago"},
   {photo:"/assets/icons/Ellipse 64.png" ,name: "New chart on page visits", time:"3 hours ago"},
   {photo:"/assets/icons/Ellipse 65.png" ,name: "Project GP", time:"12 hours ago"}
  ]

  activeTextClick(){
    if(this.activetext=0){
      this.activetext=1
      this.activeNatificatiosText=0

    }
    this.activetext=1
    this.activeNatificatiosText=0
    console.log(this.activetext)
  }
  natificationsTextClick(){
    if(this.activeNatificatiosText=0){
      this.activeNatificatiosText==1
      this.activetext=0

    }
    this.activeNatificatiosText=1
    this.activetext=0
    console.log(this.activetext)

  }
  

  ngOnInit(): void {
  }
 

}
