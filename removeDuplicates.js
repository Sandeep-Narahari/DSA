var removeDuplicates = function(s) {
    const stack=[]
    for (let i=0;i<s.legth;i++){
        if (s[i]===stack[stack.length-1]) stack.pop()
        else stack.push(s[i])
    }
    console.log(stack);
    return stack.join('')

    };
removeDuplicates("aabcca")