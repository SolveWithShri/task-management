import { NgModule } from '@angular/core';

import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/components/common/messageservice';
import { ToggleButtonModule } from 'primeng/togglebutton';

const componentList = [
    CardModule,
    TableModule,
    CheckboxModule,
    CalendarModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    ToggleButtonModule
];

@NgModule({
    imports: componentList,
    exports: componentList,
    providers: [MessageService]
})
export class PrimeNgModule { }
