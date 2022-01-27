const unique = (arr)=> {
         let arr0=[];
         arr.forEach(element => {
             if(!arr0.includes(element)){
                 arr0.push(element);
             }
         });     
         return arr0;
}

let arr = ["one","one","one","two"];
let arr0 = unique(arr);
console.log(arr0);