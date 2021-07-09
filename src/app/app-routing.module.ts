import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MascotaComponent } from './mascota/mascota.component';
import { VeterinarioComponent } from './veterinario/veterinario.component';


const routes: Routes = [
  {path:'veterinario',component:VeterinarioComponent},
  {path:'mascota',component:MascotaComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
