let countBs = (str) => {
	let count=0;
  	for(let i=0; i < str.length;i++){
    	if(str[i] === 'B') count++;
    }
	return count
}

let countChar = (str,ch) => {
	let count=0;
  	for(let i=0; i < str.length;i++){
    	if(str[i] === ch) count++;
    }
	return count
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4