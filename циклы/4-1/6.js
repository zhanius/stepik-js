let a = +prompt();
let b = +prompt();

while(b >= a){
      if(a%3===0) console.log(a);
      a++;
      if(b==a) break;
}

while(b <= a){
      if(a%3===0) console.log(a);
      a--;
}