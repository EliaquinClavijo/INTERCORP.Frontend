import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {ClientsComponent} from "./main/clients/clients.component";

const routes: Routes = [
  {
    path: 'clients/create',
    component: MainComponent,
    children: [
      {
        path: '',
        component: ClientsComponent
      }
    ]
  },
  { path: '**', redirectTo: 'clients/create', pathMatch: 'full' }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
