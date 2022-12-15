function palindrome(str) {
  
    let len = str.length;
    let len1 = len;
    console.log(str)
    let strcpy = new Array();
    for(let i = 0;i< len;i++ ){
      strcpy[i] = str[len1 - 1];
      len1--;
    } 
    
   
     if((strcpy.join("").toString()) == str){
       return true;
     }else{
       return false;
     }
   }
   
   palindrome("eye");