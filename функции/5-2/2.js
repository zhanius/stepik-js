function fact(a){
    let sum=1;
    while(a>0){
        sum*=a;
        a--;
    }
    console.log(sum);
}

let a=+prompt();
fact(a);