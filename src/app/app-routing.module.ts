import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddproductComponent} from'./addproduct/addproduct.component'
import {ProductlistComponent} from'./productlist/productlist.component'


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ProductlistComponent },
  { path: 'Addproduct', component: AddproductComponent },
];
@NgModule({
  imports: [    RouterModule.forRoot(routes,{

    useHash: true
  })],
  exports: [RouterModule],

})
export class AppRoutingModule {
  
 }
