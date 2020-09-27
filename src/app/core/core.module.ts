import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { NavbarComponent } from './navbar/navbar.component';

import { MenubarModule} from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CommonModule,
    HttpClientModule,
    MenubarModule,
    RouterModule
  ],
  exports: [
    HttpClientModule,
    NavbarComponent,
  ],
  bootstrap: [ NavbarComponent ],
})
export class CoreModule { }
