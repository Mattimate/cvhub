import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

import { MaterialModule } from "./material.module";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {} from "app/service";
import {
  AppComponent,
  HomeComponent,
  HeaderComponent,
  FooterComponent,
  CvPlusComponent,
  ContentComponent,
  FrontPageComponent,
  AboutMeComponent,
  SkillsComponent,
  ContactComponent,
  VideoProfileComponent,
  BlogComponent,
  SkillsSidenavComponent,
  ProjectJson
} from "app/.";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, MaterialModule, BrowserAnimationsModule],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CvPlusComponent,
    ContentComponent,
    FrontPageComponent,
    AboutMeComponent,
    SkillsComponent,
    ContactComponent,
    VideoProfileComponent,
    BlogComponent,
    SkillsSidenavComponent
  ],
  entryComponents: [SkillsSidenavComponent],

  providers: [ProjectJson],
  bootstrap: [AppComponent]
})
export class AppModule {}
