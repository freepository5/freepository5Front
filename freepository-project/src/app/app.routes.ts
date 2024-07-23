import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [

    { path: '',
    component: RegisterComponent,
    },

    { path: 'register',
    component: RegisterComponent,
    },


    { path: '',
    component: LoginComponent,
    },

     { path: '**',
    redirectTo: 'register',
    pathMatch: 'full',
    }
];

