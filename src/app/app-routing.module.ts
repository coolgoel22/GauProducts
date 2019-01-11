import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ImagesComponent } from './components/images/images.component';
import { VideosComponent } from './components/videos/videos.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
    { path: '',   component: LoginComponent},
    { path: 'home',   component: HomeComponent},
    { path: 'blogs',   component: BlogsComponent},
    { path: 'images',   component: ImagesComponent},
    { path: 'videos',   component: VideosComponent},
    { path: 'products',   component: ProductsComponent},
    { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
