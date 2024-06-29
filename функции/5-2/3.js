function comp(a,b){
    console.log(a>b ? `${a} больше, чем ${b}` : 
                a<b ? `${b} больше, чем ${a}` : 
                `${b} равно ${a}`);
}
let a = +prompt();
let b = +prompt();
comp(a,b);