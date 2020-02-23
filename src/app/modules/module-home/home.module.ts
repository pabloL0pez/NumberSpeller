import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home-screen/home.component';
import { CommonAppModule } from '../common-app.module';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonAppModule,
    ],
    declarations: [ 
        HomeComponent 
    ],
})
export class HomeModule {}