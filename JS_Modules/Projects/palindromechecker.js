function palindrome(str){
    str = str.replace(/\W|_/g,"").toLowerCase();
    console.log(str);
    let end = str.length - 1;

    for(let i=0;i<str.length/2 ;i++){
        if(str[end] !== str[i]){
            return false;
        }
        end--;
    }
    return  true;
}


palindrome("eye")