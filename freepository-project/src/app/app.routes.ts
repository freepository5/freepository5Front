import { Routes } from '@angular/router';
import { ProgramsComponent } from './pages/programs/programs.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ProgramsListComponent } from './pages/programs/programs-list/programs-list.component';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { PromotionsListComponent } from './pages/promotions/promotions-list/promotions-list.component';
import { ModuleFormComponent } from './components/forms/module-form/module-form.component';
import { RoadmapFormComponent } from './components/forms/roadmap-form/roadmap-form.component';
import { ResourceFormComponent } from './components/forms/resource-form/resource-form.component';
import { ModuleComponent } from './pages/modules/module/module.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResourceDetailComponent } from './pages/resources/resource-detail/resource-detail.component';
import { ResourceComponent } from './pages/resources/resource/resource.component';
import { ModuleDetailComponent } from './components/details/module-detail/module-detail.component';
import { GuardService } from './core/services/guard/guard.service';


export const routes: Routes = [
    {path:'',
        component:LayoutComponent,
        children:[
            
            {path:'register', component:RegisterComponent,},
            {path:'home', redirectTo:'' },
            {path:'', component:HomeComponent,  canActivate: [GuardService]},
            {path:'programs',component:ProgramsComponent, canActivate: [GuardService]},
            {path:'programs',component:ProgramsListComponent, canActivate: [GuardService]},
            {path:'promotions',component:PromotionsComponent, canActivate: [GuardService]},
            {path:'promotions', component:PromotionsListComponent, canActivate: [GuardService]},
            {path:'modules', component:ModuleComponent, canActivate: [GuardService]},
            {path: 'module-form', component:ModuleFormComponent, canActivate: [GuardService]},
            {path: 'module-detail/:id', component:ModuleDetailComponent, canActivate: [GuardService]},
            {path:'resources', component:ResourceComponent, canActivate: [GuardService]},
            {path: 'roadmap-form', component:RoadmapFormComponent, canActivate: [GuardService]},
            {path: 'resource-form', component: ResourceFormComponent, canActivate: [GuardService]},
            {path: 'register',component: RegisterComponent, canActivate: [GuardService]},
            {path:'resource-detail',component:ResourceDetailComponent, canActivate: [GuardService]},
            {path: 'resource-detail/:id', component: ResourceDetailComponent, canActivate: [GuardService] },
        ]
    }
];
