import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProfessorDetalhado } from '../models/professor.model';

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
}
