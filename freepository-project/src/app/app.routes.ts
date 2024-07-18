import { Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { ProgramComponent } from './pages/program/program.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { RoadmapComponent } from './pages/roadmap/roadmap.component';

export const routes: Routes = [
    {path:'',
        component:LayoutComponent,
        children:[
            {path:'principal', redirectTo:'' },
            {path:'', component:PrincipalComponent,  },
            {path:'programs',component:ProgramsComponent},
            {path:'program',component:ProgramComponent},
            {path:'roadmap', component:RoadmapComponent},
        ]}];


//     { path: '',
//         component: RegisterComponent,
//     },

//     { path: 'register',
//         component: RegisterComponent,
//     },
    
    
//     { path: 'login',
//         component: LoginComponent,
//     },
    
//     {
//         path:'principal',
//         component:PrincipalComponent,
//     },
//     {
//     path:'programs',
//     component:ProgramsComponent
// },

//    {
//    path:'program',
//    component:ProgramComponent
// },
// {
//     path:'roadmap',
//     component:RoadmapComponent
// }


