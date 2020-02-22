import { NgModule } from '@angular/core';
import { NumberSpellerComponent } from './number-speller/number-speller.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: NumberSpellerComponent,
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    declarations: [
        NumberSpellerComponent,
    ],
})
export class NumberSpellerModule { }