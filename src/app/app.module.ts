import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Routing
import { AppRoutingModule } from './app-routing.module';

// import { SearchPipe } from './pipes/search.pipe';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { Ng2OrderModule } from 'ng2-order-pipe';

// Components
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { HomeComponent } from './home/home.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { LoginComponent } from './login/login.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ImagesComponent } from './components/images/images.component';
import { VideosComponent } from './components/videos/videos.component';
import { ProductsComponent } from './components/products/products.component';

// Services
import { AuthService } from './services/auth.service';
import { ProductService } from './services/product.service';

// Firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { UploadItemsComponent } from './components/upload-items/upload-items.component';
import { AngularFireStorageModule } from 'angularfire2/storage';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HomeComponent,
    PageTitleComponent,
    ActionBarComponent,
    LoginComponent,
    BlogsComponent,
    ImagesComponent,
    VideosComponent,
    ProductsComponent,
    ConfirmationComponent,
    UploadItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [
    AuthService,
    ProductService
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
