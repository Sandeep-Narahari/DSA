/* rows =3 PAYPALISHIRING
P   A   H   N
A P L S I I G
Y   I   R
*/
var convert = function(s, numRows) {
    let arr= new Array(numRows).fill("")
    let dir="down"

   let  currentRow=0 
    for (let i=0;i<s.length;i++){
        arr[currentRow]+=s[i]
        if (currentRow===0 ){
            dir="down"
        }else if (currentRow===numRows-1){
            dir="up"
        }
        currentRow+=dir==="down"?1:-1

    }
    console.log(arr);
    console.log(arr.join(""));

    return arr.join("")
    
};
convert("ABCD",3)