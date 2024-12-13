import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import type { AnnualData, AnnualDataItem, InvestmentInputData } from './investment-input.model';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  resultsData: AnnualData = []

  onCalculateInvestmentResults(data: InvestmentInputData) {
    console.log('data: ', data)
    const annualData = this.calculateInvestmentResults(data)
    console.log('annualData: ', annualData)
    this.resultsData = annualData
  }

  calculateInvestmentResults(data: InvestmentInputData): AnnualData {
    const { 
      initialInvestment, 
      duration, 
      expectedReturn, 
      annualInvestment 
    } = data
    const annualData = [];
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      const annualDataItem: AnnualDataItem = {
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      }
      annualData.push(annualDataItem);
    }
  
    return annualData;
  }

}
