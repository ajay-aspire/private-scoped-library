import { NgModule } from '@angular/core';
import { PrivateLibSimpleComponent } from './private-lib-simple.component';

@NgModule({
  declarations: [PrivateLibSimpleComponent],
  imports: [
  ],
  exports: [PrivateLibSimpleComponent]
})
export class PrivateLibSimpleModule { }
