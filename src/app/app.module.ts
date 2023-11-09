import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MsalGuard,
  MsalInterceptor,
  MsalModule,
  MsalRedirectComponent,
} from '@azure/msal-angular';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AzadService } from './azad.service';

// const isIE = window.navigator.userAgent.indexOf('MSIE') > -1 || window.navigator.userAgent.indexOf('Trident')

@NgModule({
  declarations: [AppComponent, ProfileComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule.forRoot(
      new PublicClientApplication({
        auth: {
          clientId: '8b6d5f0a-6987-445a-9263-2b8fadc28630',
          redirectUri: 'http://localhost:4200',
          authority:
            'https://login.microsoftonline.com/cd3779f6-2af9-4aee-be9a-45e131119f0b',
        },
        cache: {
          cacheLocation: 'localStorage',
          storeAuthStateInCookie: false,
        },
      }),
      {
        interactionType: InteractionType.Redirect,
        authRequest: {
          scopes: ['user.read'], // It uses access token from Graph API
        },
      },
      {
        interactionType: InteractionType.Redirect,
        protectedResourceMap: new Map([
          ['https://graph.microsoft.com/v1.0/me', ['user.Read']],
        ]),
      }
    ),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true,
    },
    MsalGuard,
    AzadService,
  ],
  bootstrap: [AppComponent, MsalRedirectComponent],
})
export class AppModule {}
