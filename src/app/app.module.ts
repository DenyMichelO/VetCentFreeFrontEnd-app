import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{OAuthModule} from 'angular-oauth2-oidc'

import{HttpClientModule} from '@angular/common/http'
import{FormsModule}from '@angular/forms';

import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { VeterinarioComponent } from './veterinario/veterinario.component';
import { MascotaComponent } from './mascota/mascota.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    //SignupComponent,
    VeterinarioComponent,
    MascotaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OAuthModule.forRoot({
      resourceServer: {
          allowedUrls: ['http://localhost:8083/'],
          sendAccessToken: true
      }
  }),
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
