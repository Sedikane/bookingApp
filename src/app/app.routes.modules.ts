import {BookingformComponent} from "src/app/component/bookingform/bookingform.component";
import {WelcomeHomeComponent} from 'src/app/component/welcome-home/welcome-home.component';
import {ContactComponent} from 'src/app/component/contact/contact.component';
import {AboutComponent} from 'src/app/component/about/about.component';
import {ApproveComponent} from 'src/app/component/approve/approve.component';

export const AppRoutes =[
    {path:'',component:WelcomeHomeComponent},
    {path: 'about',component: AboutComponent},
    {path: 'approve',component:ApproveComponent},
    {path:'welcome-home',component:WelcomeHomeComponent},
    {path: 'contact',component: ContactComponent},
    {path:'bookingform',component:BookingformComponent,children:[

    ]}
];