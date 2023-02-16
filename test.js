//Assignment 04:
//Problem-1:

function mindGame(positiveNumber){
    if(typeof(positiveNumber)==='number'){
        let result=(((positiveNumber*3)+10)/2)-5;
        return result;
    }
    else{
        return "Please enter input as a number!!";
    }
    
}
const input1=12;
const output1=mindGame(input1);
//console.log(output1)

//Problem2:

function evenOdd(string){
    if(typeof(string)==='string'){
        const charNumber=string.length;
        if(charNumber%2===0){
            return 'even';
        }
        else{
            return 'odd'
        }
    }
    else{
        return "Please enter input as String"
    }
}
const charSting=12;
const output2=evenOdd(charSting);
//console.log(output2)

//Problem3

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
const input3=6;
const output3=isLGSeven(input3);
//console.log(output3)

//Problem4

function findingBadData(numbers){
    let checkInput=Array.isArray(numbers);
    if(checkInput===true){
        let badData=0;
        let goodData=0;
            for(let i=0; i<numbers.length;i++){
            const index=i;
            const element=numbers[i];
                if(element<0){
                    badData++;
                    }
            else{
                goodData++;
            }
        }
        return badData;
    }
    else{
        return "Please enter input as Array";
    }
}
let input4=[2,-5,-7,-13];
const output4=findingBadData(input4);
// console.log(output4)

//Problem 5:

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
const output5=gemsToDiamond(num1,num2,num3);
// console.log(output5)
