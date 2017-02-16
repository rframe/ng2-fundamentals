/**
 * Created by russell.frame on 2/15/2017.
 */
import {Routes} from '@angular/router'

import {Error404Component} from './errors/Error-404.component';

import {
    EventRouteActivator,
    EventsListResolver,
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent

} from './events/index';



export const appRoutes:Routes = [
    {path: 'events', component: EventsListComponent, resolve: {events: EventsListResolver}},
    {path: 'events/new', component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
    {path: 'events/:id', component: EventDetailsComponent, canActivate:[EventRouteActivator]},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'}
]