import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { B4ButtonDirective } from './directives/b4-button.directive';
import { ListItemComponent } from './components/list-item/list-item.component';
import {FormsModule} from '@angular/forms';
import { IconInputComponent } from './components/icon-input/icon-input.component';
import '../b4-lib/enhancements/string.enhancement';


@NgModule({
  declarations: [B4ButtonDirective, ListItemComponent, IconInputComponent],
  exports: [B4ButtonDirective, ListItemComponent, IconInputComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class B4LibModule { }
