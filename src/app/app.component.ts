import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oneTitle: string = 'Check out my new Recipe App!';

  childTermsData: string;

  captureEmittedData(emittedData: string) {
    this.childTermsData = emittedData;
  }

  displayTerms = () => {

    alert(this.childTermsData);
  }
}
