import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {

  downloadCv():void{
    const link = document.createElement('a');
    link.href ='files/CV-Julian-Murcia.pdf';
    link.download='CV-Julian-Murcia.pdf';
    link.click();
  }
}
