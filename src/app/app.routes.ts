import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

const appRoutes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: UserLoginComponent
    },
    {
        path: 'signature',
        //component: UploadComponent
        loadChildren: './+signature/signature.module#SignatureModule'
    },
    {
        path: 'signature2',
        //component: UploadComponent
        loadChildren: './+signature2/signature2.module#Signature2Module'
    },
    {
        path: 'documents',
        //component: UploadComponent
        loadChildren: './+documents/documents.module#DocumentsModule'
    },
    {
        path: 'signing',
        //component: UploadComponent
        loadChildren: './+signing/signing.module#SigningModule'
    },
    {
        path: 'template',
        //component: UploadComponent
        loadChildren: './+template/template.module#TemplateModule'
    },
    {
        path: '**',//fallback router must in the last
        component: HomeComponent
    }
];

export const rootRouters = RouterModule.forRoot(appRoutes);
