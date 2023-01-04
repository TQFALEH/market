import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { CartComponent } from './Components/cart/cart.component';
import { AccountComponent } from './Components/account/account.component';
import { GoodsComponent } from './Components/goods/goods.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { SwiperModule } from 'swiper/angular';
import { FilterPipe } from './pipe/filter.pipe';
import { ProuductListComponent } from './Components/goods/prouduct-list/prouduct-list.component';
import { AdminEditComponent } from './Components/goods/admin-edit/admin-edit.component';
import { BrandPipe } from './pipe/brand.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    AccountComponent,
    GoodsComponent,
    FilterPipe,
    ProuductListComponent,
    AdminEditComponent,
    BrandPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SwiperModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAvptYX5aqLm27eyIkGKm9MTHyE0j-fFK8',
      authDomain: 'market-6bfb1.firebaseapp.com',
      projectId: 'market-6bfb1',
      storageBucket: 'market-6bfb1.appspot.com',
      messagingSenderId: '513724331779',
      appId: '1:513724331779:web:5fba4b8d9fd42239391b36',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
