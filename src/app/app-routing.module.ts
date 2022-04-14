import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { VeiwCategoryComponent } from './veiw-category/veiw-category.component';

const routes: Routes = [
  {path :"signup", component : SignupComponent},
  {path : "signin", component : SigninComponent},
  {
    path : "add-category", 
    component : AddCategoryComponent,
    canActivate : [AuthGuard]
  },
  {
   path : "view-category",
   component : VeiwCategoryComponent,
   canActivate : [AuthGuard]
  },
  {path : "**" , component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
