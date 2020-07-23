import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AngularFireModule } from "angularfire2";
import { environment } from '../environments/environment'
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFirestore } from 'angularfire2/firestore';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { ChatService} from "./servicers/chat.service"; 
@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    AngularFireAuthModule,
    FormsModule 
  ],
  providers: [AngularFirestore,ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
