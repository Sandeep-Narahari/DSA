// ****
// ***
// **
// *

function invertTriangle(height){

    for(let row=1;row<=height;row++){
        let rowContent=""
        for(let col=height;col>=row;col--){
            // console.log(col);
            // rowContent=rowContent+col
            rowContent=rowContent+"*"
        }
        console.log(rowContent);

    }

}
invertTriangle(5)