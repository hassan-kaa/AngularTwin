import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { ListUserComponent } from './list-user/list-user.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';


const ROUTES : Routes=[
  {path:"products",component:ListProductComponent},
  {path:"users",component:ListUserComponent},
  {path:"",component:HomeComponent},
  {path:"index",redirectTo:"",pathMatch:"full"},
  {path:"contact",component:ContactComponent},
  {path:"**",component:NotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(ROUTES)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
