import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketlistComponent } from './ticketlist/ticketlist.component';
import { TickettrendComponent } from './tickettrend/tickettrend.component';

const routes: Routes = [
  { path: 'ticketlist/:type', component: TicketlistComponent },
  { path: 'tickettrend', component: TickettrendComponent },
  { path: '', component: TicketlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
