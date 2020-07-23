import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public chats : any[]=[];
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;
  constructor(private afs: AngularFirestore) {
    
  }
  cargarMenssajes() {
    this.itemsCollection = this.afs.collection<any>('chats');
    return this.itemsCollection.valueChanges();
  } 
  
}
