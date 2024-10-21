import { Routes } from '@angular/router';
import { TemplateDrivenFormComponent } from './component/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';

export const routes: Routes = [
    {path: 'template-driven-form', component: TemplateDrivenFormComponent},
    {path: 'reactive', component: ReactiveFormComponent},
    {path: '', redirectTo: 'template-driven-form', pathMatch: 'full'},
];
