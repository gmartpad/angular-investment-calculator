import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInputData } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  calculate = output<InvestmentInputData>()
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
    this.calculate.emit({
      initialInvestment: Number(this.enteredInitialInvestment()),
      duration: Number(this.enteredDuration()),
      expectedReturn: Number(this.enteredExpectedReturn()),
      annualInvestment: Number(this.enteredAnnualInvestment())
    })
    this.resetInputs()
  }
}
