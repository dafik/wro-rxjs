import { Component } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {

  messages: Observable<IMessage[]>;
  private messagesDb: AngularFirestoreCollection<IMessage>;


  constructor(db: AngularFirestore) {
    this.messagesDb = db.collection('messages', ref => ref.orderBy('timestamp', 'desc'));
    this.messages = this.messagesDb.valueChanges();
  }
}

export interface IMessage {
  body: string,
  sender: string,
  timestamp: string
}
