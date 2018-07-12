import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//
import { Ng2Rut } from 'ng2-rut';
import * as Hammer from 'hammerjs';
import { HammerGestureConfig } from '@angular/platform-browser';
//
import { AppComponent } from './app.component';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

 
import { GeneralService } from './services/general/general.service'; 
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './/app-routing.module';

import { 
  MatToolbarModule 
} from '@angular/material';

@NgModule({
  declarations: [ 
    AppComponent,
    HomeComponent, 
  ],
  entryComponents: [],
  imports: [
    FormsModule,
    BrowserModule,
    Ng2Rut, 
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}), 
    MatToolbarModule, 
  ],
  providers: [ 
    GeneralService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
