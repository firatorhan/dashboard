import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { PinkChartComponent } from './pink-chart/pink-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardBalanceChartComponent } from './card-balance-chart/card-balance-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { SmallCardBlueComponent } from './small-card-blue/small-card-blue.component';
import { SmallCardPurpleComponent } from './small-card-purple/small-card-purple.component';
import { HorisontalLineChartComponent } from './horisontal-line-chart/horisontal-line-chart.component';
import { SlimTextWidgetComponent } from './slim-text-widget/slim-text-widget.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SubmenuComponent,
    TopMenuComponent,
    PinkChartComponent,
    CardBalanceChartComponent,
    LineChartComponent,
    SmallCardBlueComponent,
    SmallCardPurpleComponent,
    HorisontalLineChartComponent,
    SlimTextWidgetComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
