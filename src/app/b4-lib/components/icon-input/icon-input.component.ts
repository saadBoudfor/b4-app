import {Component, Input, Output, EventEmitter} from '@angular/core';
import {IInputIcon} from '../../models/IInputIcon';

@Component({
  selector: 'icon-input',
  templateUrl: './icon-input.component.html',
  styleUrls: ['./icon-input.component.scss']
})
export class IconInputComponent {

  @Input()
  public inputIcon: IInputIcon = {value: '', iconName: '', placeholder: ''};

  @Input()
  public suggestions: string[] = [];

  @Output()
  public valueChanged = new EventEmitter<string>();

  hideSuggestion = true;

  reset() {
    this.inputIcon.value  = '';
  }

  filter(suggestion: string): string[]{
    return this.suggestions.filter(element => element.contains(suggestion));
  }

  onValueChanged(value: string) {
      this.valueChanged.emit(value);
  }
}
