import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { CartComponent } from './Components/cart/cart.component';
import { GoodsComponent } from './Components/goods/goods.component';
import { ProuductListComponent } from './Components/goods/prouduct-list/prouduct-list.component';
import { AdminEditComponent } from './Components/goods/admin-edit/admin-edit.component';
import { GaurdService } from './services/Guard/gaurd.service';
import { IsAdminGuardService } from './services/Guard/is-admin-guard.service';
import { GuardLoginService } from './services/Guard/guard-login.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'login', component: LoginComponent,canActivate:[GuardLoginService] },
  { path: 'signup', component: SignupComponent ,canActivate:[GuardLoginService]},
  { path: 'cart', component: CartComponent, canActivate: [GaurdService] },
  {
    path: 'admin',
    component: GoodsComponent,
    canActivate: [IsAdminGuardService],
  },
  { path: 'prouductsList', component: ProuductListComponent },
  { path: 'newProudct', component: AdminEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
