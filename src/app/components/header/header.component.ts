import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent  {

  @ViewChild ('navToggle') navToggle!: ElementRef;
  @ViewChild('navMenu') navMenu!: ElementRef;
  @ViewChild('navClose') navClose!: ElementRef;
  

  constructor() { }
  
  showMenu(){
     this.navMenu.nativeElement.classList.add('show-menu');
  }
  hiddenMenu(){
    this.navMenu.nativeElement.classList.remove('show-menu');
  }
  
  
}
