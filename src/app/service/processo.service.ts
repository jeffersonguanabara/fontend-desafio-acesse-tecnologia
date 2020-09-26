import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

import { Processo } from '../model/processo';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {

  private processoURL = "http://localhost:8080/api/processos";

  constructor(private http: HttpClient) { }

 
  public async getProcessos() {
    return await this.http.get<Processo[]>(this.processoURL)
      .toPromise()
      .then(processos => processos);
  }

  public async salvar(processo: Processo): Promise<Processo> {
    return await this.http.post<Processo>(this.processoURL, processo)
      .toPromise()
      .then(processo => processo);
  }

  // public async pesquisar(filter: Filter): Promisse<Processo> {
  //   return await this.http.get(this.processoURL, filter)
  //     .toPromise()
  //     .then
  // }
}
