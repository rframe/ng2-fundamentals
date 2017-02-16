/**
 * Created by russell.frame on 2/14/2017.
 */
import {Component,OnInit} from '@angular/core'
import {EventService} from "./shared/event.service";
import {ToastrService} from '../common/toastr.service';
import  {ActivatedRoute} from '@angular/router';

@Component({
    template: `
    <div>
        <h1>Upcoming Angular 2 Events</h1>
    </div>
    <hr>
    <div class="row">
        <div class="col-md-5" *ngFor="let event of events" >
            <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
        </div>
    </div>
    `
})
export class EventsListComponent implements OnInit {
    events: any

    constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        //no longer necissary to call the event service manually as it is now loaded on the route by the route resolver
        //this.eventService.getEvents().subscribe(events => {this.events = events;});
        this.events = this.route.snapshot.data['events'];
    }

    handleThumbnailClick(eventName) {
        this.toastr.success(eventName);
    }
}