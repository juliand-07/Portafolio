import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-proyects',
  imports: [RouterOutlet, NgIf],
  templateUrl: './proyects.html',
  styleUrl: './proyects.scss',
})
export class Proyects {

  visible= true;

  constructor(private router : Router){

  }

  back(){
  this.router.navigate(["/home"]);
  this.visible=true;
  }
  deskary(){
    this.router.navigate(['home/deskary']);
    this.visible= false;
  }

  events(){
    this.visible= false;
    this.router.navigate(['home/events']);
  }
  spring(){
    this.visible= false;
    this.router.navigate(['home/spring']);
  }

}
