export interface InvestmentInputData {
    initialInvestment: number
    duration: number
    expectedReturn: number
    annualInvestment: number
}

export interface AnnualDataItem {
    year: number
    interest: number
    valueEndOfYear: number
    annualInvestment: number
    totalInterest: number
    totalAmountInvested: number
}

export type AnnualData = AnnualDataItem[]