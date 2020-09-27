import { Data } from '@angular/router';

export interface Processo {
    id?: number
    data_do_processo?: Date;
    data_de_criacao?: Date;
    numero_processo?: string;
    solicitante?: {
        id?:number;
        nome?:string;
        cep?:string;
        rua?:string;
        numero?:string;
        bairro?:string;
        cidade?:string;
    }
    anexo?:string;
}