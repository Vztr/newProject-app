import { Component, Input, OnInit } from '@angular/core';
import { Info } from '../models/new-project-model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
@Input() public info!: Info;

  constructor() { }

  ngOnInit(): void {
  }

}
