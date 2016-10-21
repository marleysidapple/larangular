///<reference path="../../../typings/index.d.ts"/>
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { SidebarComponent }   from './sidebar/sidebar.component';
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
    imports:      [ BrowserModule, HttpModule, JsonpModule ],
    declarations: [ AppComponent, SidebarComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }



