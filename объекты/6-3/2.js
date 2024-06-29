const balance = Number(prompt())        
let bankAccount = {
  balance,
  checkBalance(){
      return `Ваш текущий баланс: ${this.balance} долларов`;
  }
};
console.log(bankAccount.checkBalance());