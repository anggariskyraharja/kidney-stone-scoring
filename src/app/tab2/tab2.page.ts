import { ɵDomAdapter } from '@angular/common';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  score: number = 0;
  classification1: string = 'Please answer all of the questions!';
  classification2: string;
  q1: string;

  scoring(){
    if (this.q1 == 'q11' || this.q1 == 'q12'){
      this.classification1 = 'The STONE Nephrolithometry Score is grade I.'
      this.classification2 = 'The stone free rate (SFR) after PCNL is 81%'
    } else if (this.q1 == 'q13' || this.q1 == 'q14' || this.q1 == 'q15'){
      this.classification1 = 'The STONE Nephrolithometry Score is grade II.'
      this.classification2 = 'The stone free rate (SFR) after PCNL is 72.4%'
    } else if (this.q1 == 'q16' || this.q1 == 'q17' || this.q1 == 'q18'){
      this.classification1 = 'The STONE Nephrolithometry Score is grade III.'
      this.classification2 = 'The stone free rate (SFR) after PCNL is 35%'
    } else if (this.q1 == 'q19' || this.q1 == 'q110'){
      this.classification1 = 'The STONE Nephrolithometry Score is grade IV.'
      this.classification2 = 'The stone free rate (SFR) after PCNL is 29  %'
    }
  }
  checkq1(event) {
    this.q1 = event.target.value;
    this.score = 0;
    if (this.q1 == null){this.classification1='Please answer all of the questions!'}else{this.scoring();};
  }

  constructor(public alertController: AlertController) {
  }

}
