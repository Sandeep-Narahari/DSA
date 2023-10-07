var mergeAlternately = function(word1, word2) {
    const word1Separate=[]
const word2Separate=[]
let newWord="";
for (const char of word1){
    // console.log(char);
    word1Separate.push(char)
}
for (const char of word2){
    word2Separate.push(char)
}
// we have start appending from word1 
const word1SeparateLength =word1Separate.length
const word2SeparateLength =word2Separate.length
const maxLen= Math.max(word1SeparateLength,word2SeparateLength)
for (let i=0;i<maxLen;i++){
    if (typeof (word1Separate[i]) ==="undefined"){
        newWord+=word2Separate[i]
        

    }else if (typeof (word2Separate[i]) ==="undefined"){
        newWord+=word1Separate[i]

    }else{
        newWord+=word1Separate[i]+word2Separate[i]
    }

}
return newWord

};
const a=mergeAlternately("abcd","pq")
console.log(a);