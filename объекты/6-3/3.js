let Y = Number(prompt());
const calculator = {
    base: Y - 2,
    power(Y){
        return (this.base)**Y;
    }
};
    
console.log(calculator.power(Y));