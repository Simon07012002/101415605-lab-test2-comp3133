import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterlistComponent } from './components/characterlist/characterlist.component';
import { CharacterdetailsComponent } from './components/characterdetails/characterdetails.component';

const routes: Routes = [
  { path: '', component: CharacterlistComponent },
  { path: 'character/:id', component: CharacterdetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
