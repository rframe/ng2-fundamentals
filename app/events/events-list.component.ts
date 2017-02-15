/**
 * Created by russell.frame on 2/14/2017.
 */
import {Component,OnInit} from '@angular/core'
import {EventService} from "./shared/event.service";
import {ToastrService} from '../common/toastr.service'

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
    events: any[]

    constructor(private eventService: EventService, private toastr: ToastrService) {
    }

    ngOnInit() {
        this.events = this.eventService.getEvents()
    }

    handleThumbnailClick(eventName) {
        this.toastr.success(eventName);
    }
}