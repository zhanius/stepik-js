let s=+prompt();
let h=+prompt();
let desc=prompt();
let volume=function(s,h,desc){
    return desc==="конус"?`Объем конуса: ${(s*h)/3}` : `Объем цилиндра: ${s*h}`;
}
console.log(volume(s,h,desc));