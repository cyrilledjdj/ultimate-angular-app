import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Store } from 'store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { HealthModule } from './health/health.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [ AppComponent, AppHeaderComponent, AppNavComponent ],
	imports: [ BrowserModule, AppRoutingModule, AuthModule, HealthModule, BrowserAnimationsModule ],
	providers: [ Store ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
