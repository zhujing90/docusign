import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap';

@NgModule({
    imports: 
    [
        RouterModule,
        CommonModule,
        AccordionModule.forRoot()
    ],
    exports: [],
    declarations: [
        HomeComponent
    ],
    providers: [],
})
export class HomeModule { }
