import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { ProgramComponent } from './pages/program/program.component';
import { RoadmapComponent } from './pages/roadmap/roadmap.component';

export const routes: Routes = [

    { path: '',
    component: RegisterComponent,
    },

    { path: 'register',
    component: RegisterComponent,
    },


    { path: 'login',
    component: LoginComponent,
    },

    //  { path: '**',
    // redirectTo: 'register',
    // pathMatch: 'full',
    // },
    {
        path:'principal',
        component:PrincipalComponent
    },
   {
    path:'programs',
    component:ProgramsComponent
   },
   {
   path:'program',
   component:ProgramComponent
},
{
    path:'roadmap',
    component:RoadmapComponent
}
];

