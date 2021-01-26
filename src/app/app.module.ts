import { DialogModule } from './dialog/dialog.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicComponent } from './dynamic/dynamic.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		DialogModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
