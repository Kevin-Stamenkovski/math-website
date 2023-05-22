import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EquationsDisequationsComponent} from "./components/equations-disequations/equations-disequations.component";
import {GraphicsComponent} from "./components/graphics/graphics.component";
import {AnalitycGeometryComponent} from "./components/analityc-geometry/analityc-geometry.component";

const routes: Routes = [
  {path: 'eqz', component: EquationsDisequationsComponent},
  {path: 'graphs', component: GraphicsComponent},
  {path: 'geometry', component: AnalitycGeometryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const sections = [EquationsDisequationsComponent,AnalitycGeometryComponent,GraphicsComponent]
