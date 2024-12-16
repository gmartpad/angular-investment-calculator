import { Injectable } from "@angular/core";
import { AnnualData, AnnualDataItem, InvestmentInputData } from "./investment-input.model";

@Injectable({ providedIn: 'root' })
export class InvestmentService {
    resultsData: AnnualData = []

    calculateInvestmentResults(data: InvestmentInputData): void {
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
        
        this.resultsData = annualData;
    }
}