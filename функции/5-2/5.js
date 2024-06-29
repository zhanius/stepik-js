function calc(a,b,c){
    console.log(c==="+" ? a+b: 
                c==="-" ? a-b: 
                c==="/" ? a/b: 
                c==="*" ? a*b:
               "Неверный оператор");
 }
 
 let [a,b,c] = [+prompt(), +prompt(), prompt()];
 calc(a,b,c);