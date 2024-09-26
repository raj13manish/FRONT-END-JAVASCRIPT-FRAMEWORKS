import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ContactComponent } from './contact/contact.component';
import { MissionComponent } from './mission/mission.component';
import { TermsComponent } from './terms/terms.component';

export const routes: Routes = [


    {path:'home',component:HomeComponent},
 
    {path:'contact',component:ContactComponent},
    {path:'mission',component:MissionComponent},
    {path:'terms',component:TermsComponent},

];
