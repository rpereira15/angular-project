import { Component, OnInit } from '@angular/core';
import { ProfessorDetalhado } from '../../models/professor.model';
import { ProfessorService } from '../../services/professor.service';

@Component({
  selector: 'app-professor-create',
  templateUrl: './professor-create.component.html',
  styleUrls: ['./professor-create.component.scss']
})
export class ProfessorCreateComponent implements OnInit {

  professor = {} as ProfessorDetalhado;

  constructor(private professorService: ProfessorService) { 
    
  }

  ngOnInit(): void {
  }

  salvarController() {
    this.professorService.salvarService(this.professor);
  }

}
