import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorCreateComponent } from './pages/professor-create/professor-create.component';
import { GenericRouterComponent, ProfessorRoutingModule } from './professor-routing.module';
import { ProfessorListComponent } from './pages/professor-list/professor-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GenericRouterComponent,
    ProfessorCreateComponent,
    ProfessorListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProfessorRoutingModule
  ]
})
export class ProfessorModule { }
