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
let input=[2,-5,-7,-13];
const output=findingBadData(input);
console.log(output)