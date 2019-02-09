import { NgModule } from '@angular/core';

// Modules for routing configuration
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
  { path: '', pathMatch: 'full', redirectTo: 'about' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
