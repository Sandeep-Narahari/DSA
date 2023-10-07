const a=[34,2,2,5,2,2,2,2,2,2,1]
const majorityNum= ()=>{
    const trackMap = new Map()
    // what this map do 
    // it is used to hold two numbers 
    // 1) number in array 
    // 2) frequency count of that number s
    for (let i=0; i<a.length;i++){
        if (trackMap.has(a[i] )){
            trackMap.set(a[i],trackMap.get(a[i])+1)
        }else{
            trackMap.set(a[i],1)
        }  

    }
    for (const [num ,count] of trackMap){
        console.log(a.length);
        if (count>Math.floor(a.length/2)){
        return num
        }
    }
    console.log(trackMap);
    return -1
   
}
const ans=majorityNum()
