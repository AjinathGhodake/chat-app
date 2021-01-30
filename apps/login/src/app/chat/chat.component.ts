import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'login-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ChatComponent  {
  @ViewChild('list') listView;


  onClickAction() {
    console.log(this.listView);
    this.listView.nativeElement.style.display = 'block';
  }
}
