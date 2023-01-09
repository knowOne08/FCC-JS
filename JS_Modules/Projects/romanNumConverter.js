function convertToRoman(num) {
    let ans ='';
    let nums = {
        M :	1000,
        CM :	900,
        D:	500,
        CD:	400,
        C:	100,
        XC:	90,
        L:	50,
        XL:	40,
        X	:10,
        IX	:9,
        V	:5,
        IV	:4,
        I	:1,
    }
    let keys = Object.keys(nums);
    while(num>0){
        
        let l = "I"
        for(let i=0;i<keys.length;i++){
             if( num>= nums[keys[i]]){
                l = keys[i];
                break;
             }
        }
        ans += l;
        num = num - nums[l];
        
    }
    return ans;
   }
convertToRoman(36); 