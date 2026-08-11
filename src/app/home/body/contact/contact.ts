import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs,{ EmailJSResponseStatus } from '@emailjs/browser';
import { log } from 'console';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

  SERVICE_ID = 'service_l5e7l4v';
  TEMPLATE_ID = 'template_sdf1ddv';
  PUBLIC_KEY = 'xcL4CTpXP8T8q_tzx';

  sending = false;

  Hola(){
    console.log("Hola");
  }
  sendEmail(form : HTMLFormElement):void{  
    this.sending = true;

    emailjs.sendForm(
      this.SERVICE_ID,
      this.TEMPLATE_ID,
      form,{
        publicKey: this.PUBLIC_KEY
      }).then(()=>{
        console.log('Correo enviado correctamente');
        form.reset();
        this.sending = false;

      });

  }
}
