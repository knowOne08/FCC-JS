



let min = (a,b) =>{
	if(a > b) return b;
  	return a;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10