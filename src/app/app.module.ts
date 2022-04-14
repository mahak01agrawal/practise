import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { AddCategoryComponent } from './add-category/add-category.component';
import { VeiwCategoryComponent } from './veiw-category/veiw-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
 
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    PageNotFoundComponent,
    AddCategoryComponent,
    VeiwCategoryComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService,AuthGuard,
  {
    provide:HTTP_INTERCEPTORS,
    useClass : TokenInterceptorService,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
