import { Component, Input, OnInit } from '@angular/core';
import { Info } from '../models/new-project-model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
@Input() public info!: Info;

public messageCar: string = "";

public commentUserPrint: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public onKeyUp(letter: string): void {
    this.messageCar = letter;
  }

  public receiveComment($event: string): void {
    this.commentUserPrint = $event;
  }

}
