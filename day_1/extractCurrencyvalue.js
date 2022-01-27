const extractCurrencyValue = (str)=>{
    let t=str.length - 1;
    return Number(str.slice(-t));
}
let str = "&1200";
console.log(extractCurrencyValue(str));