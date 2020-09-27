import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Processo } from '../model/processo';
import { ProcessoService } from '../service/processo.service';

import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

interface Filter{
    numero_processo?: string;
    nome_solicitante?: string;
}

@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrls: ['./processo.component.css'],
  providers: [ 
    MessageService,
    ConfirmationService,
  ],
})

export class ProcessoComponent implements OnInit {

  title = 'Gerenciador de Processos';

  numero_processo: string;
  nome_solicitante: string;

  searchProcessForm: FormGroup;

  processoDialog: boolean;

  processos: Processo[];

  processo: Processo;

  selectedProcess: Processo[];

  submitted: false;

  constructor(
    private processoService: ProcessoService, 
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private formBuilder: FormBuilder
) { }

    ngOnInit() {
        this.searchProcessForm = this.formBuilder.group({
            numero_processo: [
                '', 
                [
                    Validators.required, 
                    Validators.length
                ]],
            nome_solicitante: ['', [Validators.required, Validators.maxLength]]
        })
        this.processoService.getProcessos().then(data => this.processos = data);
    }
    get f() {
        return this.searchProcessForm.controls;
    }

    onSubmit() { };

    openNew() {
        this.processo = {};
        this.submitted = false;
        this.processoDialog = true;
    }

    deleteSelectedProducts() {
        this.confirmationService.confirm({
            message: 'Tem certeza que deseja excluir os processos selecionados?',
            header: 'Confirmar',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.processos = this.processos.filter(val => !this.selectedProcess.includes(val));
                this.selectedProcess = null;
                this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Processos excluídos', life: 3000});
            }
        });
    }

    editProduct(processo: Processo) {
        this.processo = {...processo};
        this.processoDialog = true;
    }

    deleteProduct(processo: Processo) {
       /*  this.confirmationService.confirm({
            message: 'Tem certeza de que deseja excluir ' + processo.numero_processo + '?',
            header: 'Confirmar',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.processos = this.processos.filter(val => val.id !== processo.id);
                this.processo = {};
                this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Processo excluído', life: 3000});
            }
        }); */
    }

    hideDialog() {
        this.processoDialog = false;
        this.submitted = false;
    }
    
    saveProcess() {
        // this.submitted = true;

        /* if (this.processo.numero_processo.trim()) {
            if (this.processo.id) {
                this.processos[this.findIndexById(this.processo.id)] = this.processo;                
                this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Processo atualizado', life: 3000});
            }
            else {
                this.processo.id = this.createId();
                this.processo.image = 'product-placeholder.svg';
                this.processos.push(this.processo);
                this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Processo Salvo', life: 3000});
            }

            this.processos = [...this.processos];
            this.processoDialog = false;
            this.processo = {};
        } */
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.processos.length; i++) {
            if (this.processo[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

}
