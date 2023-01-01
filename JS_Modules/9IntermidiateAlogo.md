1. Sum All Numbers in a Range
    ```javascript
    function sumAll(arr) {
    let sum = 0;
    if(arr[0] < arr[1]){
        for(let i = arr[0];i<=arr[1];i++){

        sum += i;
        } 
    }else{
        for(let i = arr[1];i<=arr[0];i++){
        sum += i;
        } 
    }
    return sum;
    }
    sumAll([1, 4]);
    ```
2.  Diff Two Arrays
    ```javascript
        function diffArray(arr1, arr2) {
    let newArr = arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));;
    
    
    
    return newArr;
    }

    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
    ```

3.  Seek and Destroy
    ```javascript
    function destroyer(arr, ...toremove) {
    
    return arr.filter(elem => !toremove.includes(elem));
    }

    destroyer([1, 2, 3, 1, 2, 3], 2, 3);
    ```

