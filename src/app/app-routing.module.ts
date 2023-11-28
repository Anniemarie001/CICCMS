//app-routing-module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RequestComponent } from './request/request.component';
import { ReportsComponent } from './reports/reports.component';
import { ProfileComponent } from './profile/profile.component';
import { ContractsComponent} from './contracts/contracts.component';
import { ContractsTemplatesComponent} from './contracts-templates/contracts-templates.component';
import { RequestForContractComponent } from './request/request-for-contract/request-for-contract.component';
import { MyRequestComponent } from './request/my-request/my-request.component';
import { CreateContractComponent } from './contracts/create-contract/create-contract.component';
import { AllContractsComponent } from './contracts/all-contracts/all-contracts.component';
import { ViewRequestComponent } from './view-request/view-request.component';
import { RequestForContractTemplatesComponent } from './request/request-for-contract-templates/request-for-contract-templates.component';
import { RequestFormsComponent } from './request/request-forms/request-forms.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'request', component: RequestComponent },
  { path: 'request-for-contract', component: RequestForContractComponent },
  { path: 'my-request', component: MyRequestComponent },
  { path: 'contracts', component: ContractsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'create-contract', component: CreateContractComponent },
  { path: 'all-contracts', component: AllContractsComponent },
  { path: 'contracts-templates', component: ContractsTemplatesComponent },
  { path: 'view-request', component: ViewRequestComponent },
  { path: 'request-for-contract-templates', component: RequestForContractTemplatesComponent },
  { path: 'request-forms', component: RequestFormsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],




   exports: [RouterModule]
})
export class AppRoutingModule { }
