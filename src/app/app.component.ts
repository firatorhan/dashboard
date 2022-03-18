import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
  name = 'Julie'

  supportLanguages = ['en','tr'];

  constructor(private translateService:TranslateService){
    this.translateService.addLangs(this.supportLanguages);
    this.translateService.setDefaultLang('en');
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang);

  }
  selectLang(lang:any) {
    this.translateService.use(lang)
    
  }
 
}
