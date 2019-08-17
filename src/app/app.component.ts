import {Component} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {AuthService} from './services/auth.service';

export interface Item {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Observable<any[]>;

  constructor(public auth: AuthService, db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
  }
}
