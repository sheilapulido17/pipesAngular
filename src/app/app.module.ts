import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextListComponent } from './text-list/text-list.component';
import { CamelCasePipe } from './camel-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TextListComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
