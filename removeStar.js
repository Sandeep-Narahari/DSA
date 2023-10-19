var removeStars = function(s) {
    let newString="";
    for(let i=0;i<s.length;i++){
        if (s[i]==="*"){
            newString=newString.slice(0,-1)
        }else{
            newString+=s[i];
        }

    }
    return newString;

};
removeStars("df**sd*")