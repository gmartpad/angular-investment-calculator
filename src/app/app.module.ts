import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { HeaderComponent } from "./header/header.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
        AppComponent, 
        UserInputComponent, 
        InvestmentResultsComponent, 
        HeaderComponent
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule, CommonModule]
})
export class AppModule {}