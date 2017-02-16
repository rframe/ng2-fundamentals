/**
 * Created by russell.frame on 2/14/2017.
 */
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'

import {ToastrService} from './common/toastr.service'

import {EventsAppComponent} from './events-app.component'
import {Error404Component} from './errors/Error-404.component'
import {NavBarComponent} from './nav/navbar.component'

import {
    EventService,
    EventRouteActivator,
    EventsListResolver,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent

} from './events/index';

import {appRoutes} from './routes'

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component
    ],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivator,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        },
        EventsListResolver
    ],
    bootstrap: [EventsAppComponent]
})

export class AppModule {}

function checkDirtyState(component:CreateEventComponent) {
    if(component.isDirty) {
        return window.confirm('You have not saved this even, to you really want to cancel?');
    }
    return true;
}