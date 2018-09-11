import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent, ListItemComponent, ListHeaderDirective, ListFooterDirective } from './list/list.component';
import { ToysListComponent } from './components/toys-list/toys-list.component';
import { FruitsListComponent } from './components/fruits-list/fruits-list.component';

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        ListItemComponent,
        ListHeaderDirective,
        ListFooterDirective,
        ToysListComponent,
        FruitsListComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
