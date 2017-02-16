/**
 * Created by rframe on 2/15/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: `<create-event></create-event>`,
    template: `
        <h1>New Event</h1>
        <hr>
        <div class="col-md-6">
            <h3>[Create Event Form will go here]</h3>
            <br>
            <br>
            <button class="btn btn-primary">Save</button>
            <button class="btn btn-primary" (click)="cancel()">Cancel</button>
        </div>
        
    `
})

export class CreateEventComponent implements OnInit {
    isDirty:boolean = false
    constructor(private router:Router) {

    }
    ngOnInit() {

    }
    cancel() {
        this.router.navigate(['/events']);
    }
}
