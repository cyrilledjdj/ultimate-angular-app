import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth/auth.service';

@NgModule({
	declarations: [ AuthFormComponent ],
	imports: [ CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatCardModule ],
	exports: [ AuthFormComponent, MatButtonModule ]
})
export class SharedModule {
	static forRoot(): ModuleWithProviders<SharedModule> {
		return {
			ngModule: SharedModule,
			providers: [ AuthService, AuthGuard ]
		};
	}
}
