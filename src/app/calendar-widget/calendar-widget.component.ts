import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-widget',
  templateUrl: './calendar-widget.component.html',
  styleUrls: ['./calendar-widget.component.css']
})
export class CalendarWidgetComponent implements OnInit {
  
  selected: Date | null;
  
  constructor() { }
  
  ngOnInit(): void {
    
  }

}
