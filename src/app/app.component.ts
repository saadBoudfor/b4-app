import { IInputIcon } from './b4-lib/models/IInputIcon';
import {Component, OnInit} from '@angular/core';
import {IListItem} from './b4-lib/models/IListItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  newIngredient: IListItem = {key: '', value: ''};
  ingredientList: IListItem[];
  inputObject: IInputIcon;

  ngOnInit(): void {
    this.ingredientList = [];
    this.inputObject = {iconName: 'date_range', placeholder: 'Ajouter un produit...', value: ''};
  }

  updateIngredient(newValue: string) {
    this.newIngredient.key = newValue;
  }

  addIngredient() {
    if (this.newIngredient.key !== '') {
      this.ingredientList.push(this.newIngredient);
      this.newIngredient = {key: '', value: ''};
      this.inputObject = {iconName: 'date_range', placeholder: 'Ajouter un produit...', value: ''};
    }
  }
}
