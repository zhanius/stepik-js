let a=prompt().split(' ');
let newarr=a.includes("Андорра-Ла-Велла")?a.filter(x=>x.endsWith("а")):a.filter(x=>x.endsWith("н"));
console.log(newarr);