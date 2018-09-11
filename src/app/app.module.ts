import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToysListComponent } from './components/toys-list/toys-list.component';
import { FruitsListComponent } from './components/fruits-list/fruits-list.component';
import { ListComponent, ListItemComponent, ListHeaderDirective, ListFooterDirective } from './components/list/list.component';
import { ListModule } from './components/list/list.module';

@NgModule({
    declarations: [
        AppComponent,
        ToysListComponent,
        FruitsListComponent
    ],
    imports: [
        BrowserModule,
        ListModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
