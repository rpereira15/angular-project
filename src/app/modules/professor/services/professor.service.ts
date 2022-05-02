import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProfessorDetalhado } from '../models/professor.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private httpClient: HttpClient) { }

  salvarService(professor: ProfessorDetalhado) {
    this.httpClient.get('http://localhost:9092/api/v1/professor/')
    .toPromise()
    .then(result => {
      console.log(result);
    })
  }
}
