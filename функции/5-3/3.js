function compareAvg(x,y){
    return x>y?"Среднее значение первого набора больше" : 
           x<y?"Среднее значение второго набора больше" :
           "Средние значения наборов равны";
}

function calculateAvg(x,y){
    return (x+y)/2;
}

let [a,b]=[+prompt(),+prompt()];
let [c,d]=[+prompt(),+prompt()];
console.log(compareAvg(calculateAvg(a,b), calculateAvg(c,d)));