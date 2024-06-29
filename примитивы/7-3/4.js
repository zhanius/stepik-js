let a=prompt();
let b=prompt();
console.log(`Символ "${b}" встречается ${[...a].filter(i=>i===b).length} раз(-а)`);