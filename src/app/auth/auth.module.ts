import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { firebaseConfig } from 'appConfig';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		AuthRoutingModule,
		AngularFireModule.initializeApp(firebaseConfig),
		AngularFireAuthModule,
		AngularFireDatabaseModule,
		SharedModule.forRoot()
	]
})
export class AuthModule {}
