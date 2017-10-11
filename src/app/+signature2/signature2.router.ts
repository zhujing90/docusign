
//this is the router for a module.
//this router will be merged with  the root module router when compile.
//if will be better to create routers for every modules.
import { Routes, RouterModule } from '@angular/router';

import { Signature2Component } from './signature2.component';

const routes: Routes = [
    { path: '', component: Signature2Component },
];

export const routing = RouterModule.forChild(routes);