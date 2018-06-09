import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { IMessage } from "../message-list/message-list.component";

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent {

  message: string;

  private messagesDb: AngularFirestoreCollection<IMessage>;


  constructor(db: AngularFirestore) {
    this.messagesDb = db.collection('messages');

  }

  add() {
    const message: IMessage = {
      sender: "a",
      timestamp: (new Date()).toString(),
      body: this.message
    }

    this.messagesDb
      .add(message);
  }

  onInvalidClick() {

  }

}
