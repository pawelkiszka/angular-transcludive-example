import { Component, OnInit } from '@angular/core';
import { Toy } from '../../models/toy.model';

@Component({
    selector: 'app-toys-list',
    templateUrl: './toys-list.component.html'
})
export class ToysListComponent {

    public toys: Toy[] = [
        {
            name: 'Ball',
            color: 'blue'
        },
        {
            name: 'Bicycle',
            color: 'red'
        },
        {
            name: 'Frog',
            color: 'green'
        },
        {
            name: 'Teddy Bear',
            color: 'white'
        },
    ]
}
