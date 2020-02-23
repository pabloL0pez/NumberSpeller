import { NgModule } from '@angular/core';
import { NumberSpellerComponent } from './number-speller/number-speller.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonAppModule } from '../common-app.module';

const routes: Routes = [
    {
        path: '',
        component: NumberSpellerComponent,
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonAppModule,
    ],
    declarations: [
        NumberSpellerComponent,
    ],
})
export class NumberSpellerModule { }