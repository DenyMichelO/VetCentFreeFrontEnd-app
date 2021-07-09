import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { MascotaComponent } from './mascota/mascota.component';
import { VeterinarioComponent } from './veterinario/veterinario.component';

const routes: Routes = [
  {path:'veterinario',component:VeterinarioComponent},
  {path:'mascota',component:MascotaComponent},
  {path:'consulta/:idVeterinario',component:ConsultaComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }