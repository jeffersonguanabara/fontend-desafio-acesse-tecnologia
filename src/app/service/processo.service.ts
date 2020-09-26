import { Injectable } from '@angular/core';

import api from './api.service';

import { Processo } from '../model/processo';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {

  private processoURL = "http://localhost:8080/api/";

  constructor() { }

 
  /* public async getProcessos() : Promise<Processo[]> {
    const processos = await api.get('/processos')
      .then(function(response)) {

      }
      .catch(function(error) {
        
      })
  } */
}
