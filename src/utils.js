export default function currencyFormatter(num){
    return "$" +Number(num.toFixed(1)).toLocaleString()+"";
}