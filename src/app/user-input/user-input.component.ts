import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() calculate = new EventEmitter<InvestmentInputData>()
  enteredInitialInvestment = '0'
  enteredAnnualInvestment = '0'
  enteredExpectedReturn = '5'
  enteredDuration = '10'

  onSubmit() {
    console.log('submitted')
    console.log('this.enteredInitialInvestment: ', this.enteredInitialInvestment)
    console.log('this.enteredAnnualInvestment: ', this.enteredAnnualInvestment)
    console.log('this.enteredExpectedReturn:  ', this.enteredExpectedReturn)
    console.log('this.enteredDuration: ', this.enteredDuration)
    this.calculate.emit({
      initialInvestment: Number(this.enteredInitialInvestment),
      duration: Number(this.enteredDuration),
      expectedReturn: Number(this.enteredExpectedReturn),
      annualInvestment: Number(this.enteredAnnualInvestment)
    })
  }
}
