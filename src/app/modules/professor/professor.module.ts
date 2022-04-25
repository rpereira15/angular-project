import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorCreateComponent } from './pages/professor-create/professor-create.component';
import { GenericRouterComponent, ProfessorRoutingModule } from './professor-routing.module';
import { ProfessorListComponent } from './pages/professor-list/professor-list.component';



@NgModule({
  declarations: [
    GenericRouterComponent,
    ProfessorCreateComponent,
    ProfessorListComponent
  ],
  imports: [
    CommonModule,
    ProfessorRoutingModule
  ]
})
export class ProfessorModule { }
