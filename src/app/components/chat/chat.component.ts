import { Component} from '@angular/core';
import { ChatService} from '../../servicers/chat.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  mensaje: string = ""; 

  constructor(public _cs: ChatService) { 
    this._cs.cargarMenssajes().subscribe((mensajes: any[]) => {
      console.log(mensajes)
    });

  } 
  enviar_mensaje() {
    console.log("mensaje enviado",this.mensaje);  
  }
}
