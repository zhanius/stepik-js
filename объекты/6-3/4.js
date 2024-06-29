let bankAccount = {
    balance: 500,
  
    deposit: function(amount) {
      this.balance+=amount;
      return this.balance;
    },
  
    withdraw: function(amount) {
      if(this.balance>=amount){
          this.balance-=amount;
          return this.balance;
      }else{
          return "Недостаточно средств на счете";
      }
    },
  };
  
  const amount = Number(prompt());
  const choice = prompt();
  if (choice === "внести") {
      console.log(bankAccount.deposit(amount));
  } else if (choice === "снять") {
      console.log(bankAccount.withdraw(amount));
  } 