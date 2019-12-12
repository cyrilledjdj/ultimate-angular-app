import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth/auth.service';

@NgModule({
	declarations: [ AuthFormComponent ],
	imports: [ CommonModule, ReactiveFormsModule ],
	exports: [ AuthFormComponent ]
})
export class SharedModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: SharedModule,
			providers: [ AuthService, AuthGuard ]
		};
	}
}
