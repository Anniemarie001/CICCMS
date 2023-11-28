import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RequestComponent } from './request/request.component';
import { ContractsComponent } from './contracts/contracts.component';
import { ReportsComponent } from './reports/reports.component';
import { ProfileComponent } from './profile/profile.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {DatePipe} from '@angular/common';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'angular-highcharts';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HighchartsChartModule } from 'highcharts-angular';
import { RequestByMonthComponent } from './request-by-month/request-by-month.component';
import { StatusByCategoryComponent } from './status-by-category/status-by-category.component';
import { LastFewRequestComponent } from './last-few-request/last-few-request.component';
import { NDAComponent } from './nda/nda.component';
//import { GoodsComponent } from './goods/goods.component';
import { GoodsAndServicesComponent } from './goods-and-services/goods-and-services.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CreateContractComponent } from './contracts/create-contract/create-contract.component';
import { AllContractsComponent } from './contracts/all-contracts/all-contracts.component';
import { ContractsTemplatesComponent } from './contracts-templates/contracts-templates.component';
import { RequestForContractComponent} from './request/request-for-contract/request-for-contract.component';
import { MyRequestComponent } from './request/my-request/my-request.component';
import { SharePointService } from './contracts/create-contract/sharepoint.service';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RequestDataService } from './Services/request/request-data.service';
import { CommonModule } from '@angular/common';
import { ViewRequestComponent } from './view-request/view-request.component';
import { RequestForContractTemplatesComponent } from './request/request-for-contract-templates/request-for-contract-templates.component';
import { RequestFormsComponent } from './request/request-forms/request-forms.component';
import { BackendService } from './Services/backend/backend.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    HomeComponent,
    SidenavComponent,
    RequestComponent,
    ContractsComponent,
    ReportsComponent,
    ProfileComponent,
    TopWidgetsComponent,
    RequestByMonthComponent,
    StatusByCategoryComponent,
    LastFewRequestComponent,
    NDAComponent,
   GoodsAndServicesComponent,
    CreateContractComponent,
    AllContractsComponent,
    ContractsTemplatesComponent,
    MyRequestComponent,
    ViewRequestComponent,
    RequestForContractComponent,
    RequestForContractTemplatesComponent,
    RequestFormsComponent
  ],
  imports: [
  BrowserModule,
  HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatDividerModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    DatePipe,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatMenuModule,
    ChartModule,
    FontAwesomeModule,
    HighchartsChartModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    CommonModule,
    MatCheckboxModule
  ],
  providers: [
    BackendService,
    RequestDataService],

  bootstrap: [AppComponent]
})
export class AppModule { }
