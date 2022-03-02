import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FilesComponent } from './files/files.component';
import { FolderComponent } from './folder/folder.component';
import { HomeComponent } from './home/home.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ProfilComponent } from './profil/profil.component';
import { Settings1Component } from './settings1/settings1.component';
import { Settings2Component } from './settings2/settings2.component';

const routes: Routes = [

  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'files',
    component:FilesComponent
  },
  {
    path:'pie-chart',
    component:PieChartComponent
  },
  {
    path:'settings1',
    component:Settings1Component
  },
  {
    path:'settings2',
    component:Settings2Component
  },
  {
    path:'profil',
    component:ProfilComponent
  },
  {
    path:'folders',
    component:FolderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
