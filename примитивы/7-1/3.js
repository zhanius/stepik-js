const budget={
    income:+prompt(),
    expenses:+prompt(),
    calculateProfit(){
        return (this.income-this.expenses)>0? `Ваша прибыль составляет ${this.income-this.expenses} рублей`:
        (this.income-this.expenses)<0?`Вы ушли в минус на ${Math.abs(this.income-this.expenses)} рублей`:"Вы отработали в ноль";
    }
}
console.log(budget.calculateProfit());