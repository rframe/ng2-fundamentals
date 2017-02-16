/**
 * Created by rframe on 2/15/2017.
 */
/**
 * Created by russell.frame on 2/14/2017.
 */
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'

import {ProfileComponent} from './profile.component'
import {UserRoutes} from './user.routes'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(UserRoutes)
    ],
    declarations: [
        ProfileComponent
    ],
    providers: [
    ],
})

export class UserModule {}