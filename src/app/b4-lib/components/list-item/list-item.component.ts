import {Component, Input, OnInit} from '@angular/core';
import {IListItem} from "../../models/IListItem";

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit{
  ngOnInit(): void {
    if(this.listItem.value === '') {
      this.listItem.value = 'trace';
    }
    if(this.listItem.key === '') {
      throw new DOMException('key must be not empty');
    }
  }

  _isClicked = false;

  @Input()
  public listItem: IListItem = {key: '', value: 'trace'};

}
