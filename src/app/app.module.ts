import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { routing } from './app-routing.module';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { NavHeaderComponent } from './_components/nav-header/nav-header.component';
import { AdminComponent } from './pageAdmin/admin/admin.component';
import { HomeAdminComponent } from './pageAdmin/home-admin/home-admin.component';
import { HeaderComponent } from './pageAdmin/_layout/header/header.component';
import { FooterComponent } from './pageAdmin/_layout/footer/footer.component';
import { BaseLayoutComponent } from './pageAdmin/_layout/base-layout/base-layout.component';
import { AboutUsComponent } from './_components/about-us/about-us.component';
import { SpecialMenuComponent } from './_components/special-menu/special-menu.component';
import { OurmenuComponent } from './_components/ourmenu/ourmenu.component';
import { OurTeamComponent } from './_components/our-team/our-team.component';
import { OurGalleryComponent } from './_components/our-gallery/our-gallery.component';
import { OurBlogComponent } from './_components/our-blog/our-blog.component';
import { OurPricingComponent } from './_components/our-pricing/our-pricing.component';
import { OurReservationComponent } from './_components/our-reservation/our-reservation.component';
import { OurBannerComponent } from './_components/our-banner/our-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavHeaderComponent,
    AdminComponent,
    HomeAdminComponent,
    HeaderComponent,
    FooterComponent,
    BaseLayoutComponent,
    AboutUsComponent,
    SpecialMenuComponent,
    OurmenuComponent,
    OurTeamComponent,
    OurGalleryComponent,
    OurBlogComponent,
    OurPricingComponent,
    OurReservationComponent,
    OurBannerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
