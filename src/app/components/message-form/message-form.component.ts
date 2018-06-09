import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { IMessage } from "../message-list/message-list.component";
import { Subject } from "rxjs/Subject";
import { fromPromise } from "rxjs/observable/fromPromise";

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {


  message: string;
  disabled = false;

  formSubmit: Subject<any> = new Subject();
  private messagesDb: AngularFirestoreCollection<IMessage>;


  constructor(db: AngularFirestore) {
    this.messagesDb = db.collection('messages');


  }

  ngOnInit(): void {

    this.formSubmit
      .asObservable()
      .map(() => this.message)
      .filter(messageStr => !!messageStr)
      .subscribe(messageStr => {
        const message: IMessage = {
          sender: "a",
          timestamp: (new Date()).toString(),
          body: messageStr
        };
        this.disabled = true;

        fromPromise(this.messagesDb.add(message))
          .subscribe(
            () => {
              this.message = '';
              this.disabled = false
            },
            () => {
              this.disabled = false
            })
      })
  }


}
