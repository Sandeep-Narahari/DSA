var commonFactors = function(a, b) {
    const isGreater=a>b
    let n;
    const arr=[]
    if (isGreater){
      n=b
    }else{
        n=a
    }
    for(let i=1;i<=n;i++){
        const remA=a%i
        const remB=b%i
        if (remA===0 && remB===0){
            arr.push(i)
        }
    }
    // console.log(arr);
    return arr.length
    
};
const a=commonFactors(12,6)
console.log(a);