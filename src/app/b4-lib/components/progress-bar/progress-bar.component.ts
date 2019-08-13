import { IProressBar } from './../../models/IProgressBar';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {


  @Input()
  public progressBar: IProressBar;

  rangeMax: number[];

  constructor() { }

  ngOnInit() {
    this.rangeMax = Array(5).fill(0, 0, 5).map((x, i) => i);
  }

}
