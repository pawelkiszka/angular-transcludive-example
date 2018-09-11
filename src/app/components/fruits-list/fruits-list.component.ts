import { Component, OnInit } from '@angular/core';
import { Fruit } from '../../models/fruit.model';

@Component({
    selector: 'app-fruits-list',
    templateUrl: './fruits-list.component.html'
})
export class FruitsListComponent {
    public fruits: Fruit[] = [
        {
            name: 'Orange',
            shape: 'spherical'
        },
        {
            name: 'Banana',
            shape: 'longitudinal'
        },
        {
            name: 'Pear',
            shape: 'pear-shape'
        },
        {
            name: 'Apple',
            shape: 'spherical'
        }
    ]
}
