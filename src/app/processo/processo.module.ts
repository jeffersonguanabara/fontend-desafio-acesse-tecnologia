import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessoComponent } from './processo.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputMaskModule } from 'primeng/inputmask';

import { ProcessoService } from '../service/processo.service';

@NgModule({
  declarations: [
    ProcessoComponent,
  ],
  imports: [
    CommonModule,
    InputTextModule,
    InputMaskModule,
    ButtonModule,
    ConfirmDialogModule,
    DialogModule,
    TableModule,
    CalendarModule,
    ToolbarModule,
    ToastModule,
    ReactiveFormsModule
  ],
  providers: [
    ProcessoService
  ],
  bootstrap: [ProcessoComponent],
})
export class ProcessoModule { }
