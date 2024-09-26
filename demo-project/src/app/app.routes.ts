import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { VisionComponent } from './vision/vision.component';
import { MissionComponent } from './mission/mission.component';
import { TermsComponent } from './terms/terms.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ProgressReportComponent } from './progress-report/progress-report.component';

export const routes: Routes = [
    {path:'manish', component:HomeComponent
    },
    {path: 'about', component:AboutComponent},
    {path:'contact', component:ContactComponent},
    {path:'Vision',component:VisionComponent},
    {path:'Mission', component:MissionComponent},
    {path:'Terms',component:TermsComponent},
    {path:'feedback',component:FeedbackComponent},
    {path:'pipe',component:PipeDemoComponent},
    {path:'pr',component:ProgressReportComponent},
];
