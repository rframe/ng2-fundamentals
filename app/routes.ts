/**
 * Created by russell.frame on 2/15/2017.
 */
import {Routes} from '@angular/router'
import {EventsListComponent} from "./events/events-list.component";
import {EventDetailsComponent} from "./events/event-details/event-details.component";

export const appRoutes:Routes = [
    {path: 'events', component: EventsListComponent},
    {path: 'events/:id', component: EventDetailsComponent},
    {path: '', redirectTo: '/events', pathMatch: 'full'}
]