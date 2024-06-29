let a=prompt().split(', ');
let b=prompt().split(', ').map(x=>Number(x));
let str=b.map(x=>a[x]).join(' ');
console.log(str);
