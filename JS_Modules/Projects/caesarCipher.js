function rot13(str) {
    let msg='';
    for(let i=0;i<str.length;i++){
        let charat = str[i].charCodeAt();
        if(charat<65 || charat>90){
          msg+=str[i];
        }else{
          let code = (charat + 13 > 90) ? (charat %26)+65 : charat +13;
          msg+= String.fromCharCode(code);
        }
    }
    return msg;
  }
  
rot13("SERR PBQR PNZC");