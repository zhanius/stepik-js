const obj = {
    divide(a,b){
        return a%b;
    }
};

let [a,b]=[+prompt(),+prompt()];
console.log(obj.divide(a,b));
