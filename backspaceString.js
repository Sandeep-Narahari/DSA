
function backSpaceString(firstString,secondString){
    // const firstString="#a#b#c#t"
    // const secondString="t"
    let newFirstString="";
    let newSecondString=""
    for (let i=0;i<firstString.length;i++){
        if(firstString[i]==="#" ){
            newFirstString=newFirstString.slice(0,-1)
            // console.log(newFirstString);

        }else{
            newFirstString+=firstString[i]
            // console.log("else",newFirstString);
        }
    }
    for (let j=0;j<secondString.length;j++){
        if(secondString[j]==="#"){
            newSecondString=newSecondString.slice(0,-1)
        }else{
            newSecondString+=secondString[j]
        }
    }
    console.log(newFirstString,newSecondString);
    if(newFirstString===newSecondString){
        console.log(true);
        return true
    }else{
        console.log(false);
        return false
    }
}
backSpaceString("dff#df","sdsd#sd#s")