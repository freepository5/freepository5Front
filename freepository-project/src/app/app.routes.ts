import { Routes } from '@angular/router';
import { ProgramsComponent } from './pages/programs/programs.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ProgramsListComponent } from './pages/programs/programs-list/programs-list.component';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { PromotionsListComponent } from './pages/promotions/promotions-list/promotions-list.component';
import { ModuleFormComponent } from './components/forms/module-form/module-form.component';
import { RoadmapsComponent } from './pages/roadmaps/roadmaps.component';
import { RoadmapsListComponent } from './pages/roadmaps/roadmaps-list/roadmaps-list.component';
import { RoadmapFormComponent } from './components/forms/roadmap-form/roadmap-form.component';
import { ResourceFormComponent } from './components/forms/resource-form/resource-form.component';

export const routes: Routes = [
    {path:'',
        component:LayoutComponent,
        children:[
            {path:'home', redirectTo:'' },
            {path:'', component:HomeComponent,  },
            {path:'programs',component:ProgramsComponent,},
            {path:'programs',component:ProgramsListComponent},
            {path:'promotions',component:PromotionsComponent},
            {path:'promotions', component:PromotionsListComponent},
            {path:'roadmaps',component:RoadmapsComponent},
            {path:'roadmaps', component:RoadmapsListComponent},
            {path: 'module-form', component:ModuleFormComponent},
            {path: 'roadmap-form', component:RoadmapFormComponent},
            {path: 'resurce-form', component: ResourceFormComponent},
            
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


