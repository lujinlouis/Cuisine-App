import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input('titleFromApp') title: string;


  @Output() termsEmitter = new EventEmitter(); //emitter

  termsStringToEmit: string = "Do not use our recipes without giving us credit! We work very hard to provide these wonderful recipes. Say Thanks!"

  emittingFunction() {
    this.termsEmitter.emit(this.termsStringToEmit); //use emitter
  }

  

  ngOnInit(): void {
    this.emittingFunction();
  }

}
