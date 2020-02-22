import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./modules/module-home/home.module').then(m => m.HomeModule),
    },
    {
        path: 'number-speller',
        loadChildren: () => import('./modules/module-number-speller/number-speller.module').then(m => m.NumberSpellerModule),
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class SpellerModule { }