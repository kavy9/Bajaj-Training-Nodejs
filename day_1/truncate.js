const truncate = (str,maxV)=> {
        let t=str.length - maxV;
        return str.replace(str.slice(-t) ,"..." )
};
let str = "truncate";
str = truncate(str,5);
console.log(str);