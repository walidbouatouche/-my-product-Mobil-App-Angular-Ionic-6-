import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PipePipe } from './pipes/pipe.pipe';
import { DirectiveDirective } from './directive/directive.directive';
 
@NgModule({
  declarations: [AppComponent, PipePipe, DirectiveDirective],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot({

    rippleEffect: false, mode: 'ios' ,
    swipeBackEnabled:false
   
     

  }), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
  
 