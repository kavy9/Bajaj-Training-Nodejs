const filterRange = (arr,a,b)=>{
    var arr0=[];
    arr.forEach(i => {
        if(i>=a && i<=b){
            arr0.push(i);
        }
    });
    return arr0;
}

let arr = [1,2,3,4,5,6,7,8,9];
let rarr = filterRange(arr,3,6);
console.log(rarr);