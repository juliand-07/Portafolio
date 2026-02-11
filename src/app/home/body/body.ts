import { Component } from '@angular/core';
import { Profile } from './profile/profile';
import { Proyects } from './proyects/proyects';
import { Contact } from './contact/contact';


@Component({
  selector: 'app-body',
  imports: [Profile,Proyects,Contact],
  templateUrl: './body.html',
  styleUrl: './body.scss',
})
export class Body {

}
