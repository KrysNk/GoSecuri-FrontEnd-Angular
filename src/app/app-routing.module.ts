import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdentificationComponent } from './components/identification/identification.component';
import { IndexPageComponent } from './components/index-page/index-page.component';


const routes: Routes = [
{path: '', redirectTo: '/index-page', pathMatch: 'full' },
{path: 'identification', component: IdentificationComponent },
{path: 'index-page', component: IndexPageComponent},
{path: 'login-admin', component: LoginAdminComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
