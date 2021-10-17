import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input()
  public commentUser!: string;

  @Output() public commentEvent = new EventEmitter<string>();

  public comment: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public sendComment() {
    console.log(this.comment)
    this.commentEvent.emit(this.comment);
  }
}
