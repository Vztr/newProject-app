import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Photos } from '../models/new-project-model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})

export class PhotosComponent implements OnInit {
@Input() public photos!: Photos;

  constructor() { }

  ngOnInit(): void {
  }

}
