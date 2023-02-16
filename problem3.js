function isLGSeven(number){
    if(typeof(number)==='number'){
        const diff=number-7;
        if(diff<7){
            return diff
        }
        else{
            return number*2;
        }
    }
    else{
        return "Please enter input as number";
    }
}
const input=6;
const output=isLGSeven(input);
console.log(output)