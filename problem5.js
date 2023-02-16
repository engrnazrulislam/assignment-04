function gemsToDiamond(n1,n2,n3){
    if(((typeof(n1))==='number')&& ((typeof(n2))==='number')&& (typeof(n3))==='number'){
    const friend1=n1*21;
    const friend2=n2*32;
    const friend3=n3*43;
    const totalDiamond=friend1+friend2+friend3;
    if(totalDiamond>(1000*2)){
        return totalDiamond-2000;
    }
    else{
        return totalDiamond;
    }
}
else{
    return "Please enter input as three number";
}
}
const num1=100;
const num2=5;
const num3=1;
const output=gemsToDiamond(num1,num2,num3);
console.log(output)