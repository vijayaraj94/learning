import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';

const routes: Routes = [
  { path: 'crud', component: CrudComponent },
  { path: 'shopping', component: ShoppingPageComponent },
  { path: '',   redirectTo: '/crud', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
