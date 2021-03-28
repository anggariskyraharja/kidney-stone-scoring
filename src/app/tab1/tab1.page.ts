import { ɵDomAdapter } from '@angular/common';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  score: number = 0;
  classification1: string = 'Please answer all of the questions!';
  classification2: string;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;

  scoring(){
    if (this.q1 == 'q11'){
      this.score = this.score + 1;
    } else if (this.q1 == 'q12'){
      this.score = this.score + 2;
    } else if (this.q1 == 'q13'){
      this.score = this.score + 3;
    } else if (this.q1 == 'q14'){
      this.score = this.score + 4;
    }
    if (this.q2 == 'q11'){
      this.score = this.score + 1;
    } else if (this.q2 == 'q12'){
      this.score = this.score + 2;
    }
    if (this.q3 == 'q11'){
      this.score = this.score + 1;
    } else if (this.q3 == 'q12'){
      this.score = this.score + 2;
    }
    if (this.q4 == 'q11'){
      this.score = this.score + 1;
    } else if (this.q4 == 'q12'){
      this.score = this.score + 2;
    } else if (this.q4 == 'q13'){
      this.score = this.score + 3;
    }
    if (this.q5 == 'q11'){
      this.score = this.score + 1;
    } else if (this.q5 == 'q12'){
      this.score = this.score + 2;
    }
    this.classification1 = 'The STONE Nephrolithometry Score is '+this.score+' points.'
    if (this.score == 5){
      this.classification2 = '94% chance of patient being stone free after first procedure.';
    } else if (this.score == 6){
      this.classification2 = '88% chance of patient being stone free after first procedure.';
    } else if (this.score == 7){
      this.classification2 = '92% chance of patient being stone free after first procedure.';
    } else if (this.score == 8){
      this.classification2 = '83% chance of patient being stone free after first procedure.';
    } else if (this.score == 9){
      this.classification2 = '64% chance of patient being stone free after first procedure.';
    } else if (this.score == 10){
      this.classification2 = '42% chance of patient being stone free after first procedure.';
    } else if (this.score == 11){
      this.classification2 = '27% chance of patient being stone free after first procedure.';
    } else if (this.score == 12){
      this.classification2 = '27% chance of patient being stone free after first procedure.';
    } else if (this.score == 13){
      this.classification2 = '27% chance of patient being stone free after first procedure.';
    }
  }
  checkq1(event) {
    this.q1 = event.target.value;
    this.score = 0;
    if (this.q1 == null || this.q2 == null || this.q3 == null || this.q4 == null || this.q5 == null){this.classification1='Please answer all of the questions!'}else{this.scoring();};
  }
  checkq2(event) {
    this.q2 = event.target.value;
    this.score = 0;
    if (this.q1 == null || this.q2 == null || this.q3 == null || this.q4 == null || this.q5 == null){this.classification1='Please answer all of the questions!'}else{this.scoring();};
  }
  checkq3(event) {
    this.q3 = event.target.value;
    this.score = 0;
    if (this.q1 == null || this.q2 == null || this.q3 == null || this.q4 == null || this.q5 == null){this.classification1='Please answer all of the questions!'}else{this.scoring();};
  }
  checkq4(event) {
    this.q4 = event.target.value;
    this.score = 0;
    if (this.q1 == null || this.q2 == null || this.q3 == null || this.q4 == null || this.q5 == null){this.classification1='Please answer all of the questions!'}else{this.scoring();};
  }
  checkq5(event) {
    this.q5 = event.target.value;
    this.score = 0;
    if (this.q1 == null || this.q2 == null || this.q3 == null || this.q4 == null || this.q5 == null){this.classification1='Please answer all of the questions!'}else{this.scoring();};
  }

  constructor(public alertController: AlertController) {
  }

}
