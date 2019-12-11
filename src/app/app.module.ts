import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Store } from 'store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
	declarations: [ AppComponent ],
	imports: [ BrowserModule, AppRoutingModule ],
	providers: [ Store ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
