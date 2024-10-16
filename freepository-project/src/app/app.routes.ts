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
import { ModuleComponent } from './pages/modules/module.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResourceDetailComponent } from './pages/resources/resource-detail/resource-detail.component';
import { ResourceComponent } from './pages/resources/resource/resource.component';
import { ModuleDetailComponent } from './pages/modules/modules-detail/module-detail.component';
import { GuardService } from './core/services/guard/guard.service';


// export const routes: Routes = [
//     {path:'',
//         component:LayoutComponent,
//         children:[
            
//             {path:'register', component:RegisterComponent,},
//             {path:'home', redirectTo:'' },
//             {path:'', component:HomeComponent,  canActivate: [GuardService]},
//             {path:'programs',component:ProgramsComponent, canActivate: [GuardService]},
//             {path:'programs',component:ProgramsListComponent, canActivate: [GuardService]},
//             {path:'promotions',component:PromotionsComponent, canActivate: [GuardService]},
//             {path:'promotions', component:PromotionsListComponent, canActivate: [GuardService]},
//             {path:'modules', component:ModuleComponent, canActivate: [GuardService]},
//             {path: 'module-form', component:ModuleFormComponent, canActivate: [GuardService]},
//             {path: 'module-detail/:id', component:ModuleDetailComponent, canActivate: [GuardService]},
//             {path:'resources', component:ResourceComponent, canActivate: [GuardService]},
//             {path: 'roadmap-form', component:RoadmapFormComponent, canActivate: [GuardService]},
//             {path: 'resource-form', component: ResourceFormComponent, canActivate: [GuardService]},
//             {path: 'register',component: RegisterComponent, canActivate: [GuardService]},
//             {path:'resource-detail',component:ResourceDetailComponent, canActivate: [GuardService]},
//             {path: 'resource-detail/:id', component: ResourceDetailComponent, canActivate: [GuardService] },
//         ]
//     }
// ];
export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'register', component: RegisterComponent },
            { path: 'home', redirectTo: '' },
            { path: '', component: HomeComponent },
            { path: 'programs', component: ProgramsComponent },
            { path: 'programs-list', component: ProgramsListComponent },  // Cambié el path aquí para que no se duplique
            { path: 'promotions', component: PromotionsComponent },
            { path: 'promotions-list', component: PromotionsListComponent }, // Cambié el path aquí también para evitar conflicto
            { path: 'modules', component: ModuleComponent },
            { path: 'module-form', component: ModuleFormComponent },
            { path: 'module-detail/:id', component: ModuleDetailComponent },
            { path: 'resources', component: ResourceComponent },
            { path: 'roadmap-form', component: RoadmapFormComponent },
            { path: 'resource-form', component: ResourceFormComponent },
            { path: 'resource-detail', component: ResourceDetailComponent },
            { path: 'resource-detail/:id', component: ResourceDetailComponent }
        ]
    }
];
