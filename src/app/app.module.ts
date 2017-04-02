import { AppRoutingModule } from './app.routing.module';
import { DashboardComponent } from './components/dashboard.component';

import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './components/hero-detail.component';
import { HeroService } from './services/hero.service';
import { HeroesComponent } from './components/heroes.component';


@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent],
  bootstrap: [AppComponent],
  providers: [HeroService]
})
export class AppModule { }
