
//this is the router for a module.
//this router will be merged with  the root module router when compile.
//if will be better to create routers for every modules.
import { Routes, RouterModule } from '@angular/router';

import { SigningComponent } from './signing.component';

const routes: Routes = [
    { path: '', component: SigningComponent },
];

export const routing = RouterModule.forChild(routes);