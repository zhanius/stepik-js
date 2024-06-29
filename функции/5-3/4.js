function calcTri(x,y,z){
    return (x+y<=z || x+z<=y || z+y<=x) ? "Треугольник не существует" : "Треугольник существует";
}

let [x,y,z]=[+prompt(),+prompt(),+prompt()];
console.log(calcTri(x,y,z));