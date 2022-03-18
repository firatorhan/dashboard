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
import { CalendarWidgetComponent } from './calendar-widget/calendar-widget.component';
import { FolderComponent } from './folder/folder.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { Settings1Component } from './settings1/settings1.component';
import { Settings2Component } from './settings2/settings2.component';
import { ProfilComponent } from './profil/profil.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HomeComponent } from './home/home.component';
import { WelcomeBackComponent } from './welcome-back/welcome-back.component';
import { FilesComponent } from './files/files.component';
import { MatTableModule } from '@angular/material/table';
import { TotalSystemChartComponent } from './total-system-chart/total-system-chart.component';
import { TranslateModule, TranslateLoader} from "@ngx-translate/core";
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; 



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
    CalendarWidgetComponent,
    FolderComponent,
    PieChartComponent,
    Settings1Component,
    Settings2Component,
    ProfilComponent,
    HomeComponent,
    WelcomeBackComponent,
    FilesComponent,
    TotalSystemChartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatCardModule,
    MatDatepickerModule,
    MatTableModule,
    HttpClientModule,
    TranslateModule.forRoot(
      {
loader:{
  provide: TranslateLoader,
  useFactory: (http:HttpClient)=>{return new TranslateHttpLoader(http,'./assets/i18n/','.json');},
  deps: [HttpClient]
}
      }
    ),
  
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
