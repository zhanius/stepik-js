let a=prompt().split(', ');
let b=prompt().split(', ').map(x=>Number(x));
for(let i=0;i<b.length;i++){
    console.log(a[b[i]]);
}
