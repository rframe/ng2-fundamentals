/**
 * Created by rframe on 2/15/2017.
 */
import {Router, ActivatedRouteSnapshot, CanActivate} from '@angular/router'
import {Injectable} from '@angular/core'
import {EventService} from '../shared/event.service'

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService:EventService, private router: Router) {

    }

    canActivate(route:ActivatedRouteSnapshot) {
        //Check if the event exists and cast it to a boolean
        const eventExists = !!this.eventService.getEvent(+route.params['id']);

        if(!eventExists) {
            this.router.navigate(['/404']);
        }
        return eventExists;
    }
}
