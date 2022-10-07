import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { AedsinsComponent } from './pages/aedsins/aedsins.component';
import { QledComponent } from './pages/qled/qled.component';
import { AboutComponent } from './pages/about/about.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MetaversoComponent } from './pages/metaverso/metaverso.component';
import { HeExhiComponent } from './sharepage/he-exhi/he-exhi.component';

const routes: Routes = [
  { path: '', redirectTo: 'units', pathMatch: 'full' },
  {
    path: 'units',
    component: MainPageComponent,
    children: [
      { path: '', redirectTo: 'aedsins', pathMatch: 'full' },
      { path: 'aedsins', component: AedsinsComponent },
      { path: 'metaverse', component: MetaversoComponent },
      { path: 'qled', component: QledComponent },
      { path: 'about', component: AboutComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AedsinsComponent,
    MetaversoComponent,
    QledComponent,
    AboutComponent,
    MainPageComponent,
    MetaversoComponent,
    HeExhiComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
