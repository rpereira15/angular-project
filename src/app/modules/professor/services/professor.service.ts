import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProfessorDetalhado, ProfessorSimples } from '../models/professor.model';
import { Pagina } from 'src/app/commons/models/page.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private httpClient: HttpClient) { }

  salvarService(professor: ProfessorDetalhado):
    Promise<ProfessorDetalhado | undefined> {
    return this.httpClient
      .post<ProfessorDetalhado>('http://localhost:9092/api/v1/professor/', professor)
      .toPromise();
  }

  atualizarService(professor: ProfessorDetalhado):
    Promise<ProfessorDetalhado | undefined> {
    return this.httpClient
      .put<ProfessorDetalhado>(`http://localhost:9092/api/v1/professor/${professor.id}`, professor)
      .toPromise();
  }

  buscarUmProfessorService(id: number):
    Promise<ProfessorDetalhado | undefined> {
    return this.httpClient
      .get<ProfessorDetalhado>(`http://localhost:9092/api/v1/professor/${id}`)
      .toPromise();
  }

  listarService():Promise<Pagina<ProfessorSimples> | undefined> {
      return this.httpClient
      .get<Pagina<ProfessorSimples>>('http://localhost:9092/api/v1/professor/')
      .toPromise();
  }

  excluirService(id: number | undefined):Promise<any>  {
    return this.httpClient
      .delete<any>(`http://localhost:9092/api/v1/professor/${id}`)
      .toPromise();
  }
}
