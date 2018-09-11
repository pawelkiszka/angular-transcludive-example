import { Component, OnInit, Directive } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html'
})
export class ListComponent { }

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html'
})
export class ListItemComponent { }

@Directive({
    selector: '[app-list-header]'
})
export class ListHeaderDirective { }

@Directive({
    selector: '[app-list-footer]'
})
export class ListFooterDirective { }

