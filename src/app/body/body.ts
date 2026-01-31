import { Component } from '@angular/core';
import { Profile } from './profile/profile';
import { Proyects } from './proyects/proyects';


@Component({
  selector: 'app-body',
  imports: [Profile,Proyects],
  templateUrl: './body.html',
  styleUrl: './body.scss',
})
export class Body {

}
