import { Component } from '@angular/core';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html'
})
export class TaskListComponent {
    title = 'List of Tasks';
    tasks: any[] = [
        {
            id: 1,
            description: 'task 1',
            completed: false
        },
        {
            id: 2,
            description: 'task 2',
            completed: false
        },
        {
            id: 3,
            description: 'task 3',
            completed: false
        }
    ];
}
