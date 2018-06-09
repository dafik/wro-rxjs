import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages: Observable<Imessage[]>;
  private messagesDb: AngularFirestoreCollection<Imessage>;


  constructor(db: AngularFirestore) {
    this.messagesDb = db.collection('messages');
    this.messages = this.messagesDb
      .valueChanges()
      .pipe(
        map((x: Imessage[]) => x.sort((a: Imessage, b: Imessage) => a.timestamp - b.timestamp))
      );
  }
}

interface Imessage {
  body: string,
  sender: string,
  timestamp: number
}
