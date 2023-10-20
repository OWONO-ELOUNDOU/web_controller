import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './screens/body/body.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { OffersComponent } from './screens/offers/offers.component';
import { StatisticsComponent } from './screens/statistics/statistics.component';
import { PrestationsComponent } from './screens/prestations/prestations.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    DashboardComponent,
    SidebarComponent,
    OffersComponent,
    StatisticsComponent,
    PrestationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
