import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EquationsDisequationsComponent} from "./components/equations-disequations/equations-disequations.component";
import {GraphicsComponent} from "./components/graphics/graphics.component";
import {AnalitycGeometryComponent} from "./components/analityc-geometry/analityc-geometry.component";
import {EsponenzialiComponent} from "./components/esponenziali/esponenziali.component";
import {LogaritmiComponent} from "./components/logaritmi/logaritmi.component";

const routes: Routes = [
  {path: 'eqz', component: EquationsDisequationsComponent},
  {path: 'graphs', component: GraphicsComponent},
  {path: 'geometry', component: AnalitycGeometryComponent},
  {path: 'esp', component: EsponenzialiComponent},
  {path: 'log', component: LogaritmiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const sections = [EquationsDisequationsComponent,AnalitycGeometryComponent,GraphicsComponent]
