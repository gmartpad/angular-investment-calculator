import { Component, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  constructor(private investmentService: InvestmentService) {}

  enteredInitialInvestment = signal<string>('0')
  enteredAnnualInvestment = signal<string>('0')
  enteredExpectedReturn = signal<string>('5')
  enteredDuration = signal<string>('10')

  resetInputs() {
    this.enteredInitialInvestment.set('0')
    this.enteredAnnualInvestment.set('0')
    this.enteredExpectedReturn.set('5')
    this.enteredDuration.set('10')
  }

  onSubmit() {
    console.log('submitted')
    this.investmentService.calculateInvestmentResults({
      initialInvestment: Number(this.enteredInitialInvestment()),
      duration: Number(this.enteredDuration()),
      expectedReturn: Number(this.enteredExpectedReturn()),
      annualInvestment: Number(this.enteredAnnualInvestment())
    })
    this.resetInputs()
  }
}
