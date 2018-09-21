import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendingPage } from './pending';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    PendingPage,
  ],
  imports: [
    NgxDatatableModule,
    IonicPageModule.forChild(PendingPage),
  ],
})
export class PendingPageModule {}
