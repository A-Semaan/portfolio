import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteContentComponent } from './components/site-content/site-content.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { EducationContentComponent } from './components/education-content/education-content.component';
import { ProjectsContentComponent } from './components/projects-content/projects-content.component';
import { ContactContentComponent } from './components/contact-content/contact-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteContentComponent,
    HeaderComponent,
    FooterComponent,
    HomeContentComponent,
    EducationContentComponent,
    ProjectsContentComponent,
    ContactContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
