function mindGame(positiveNumber){
    if(typeof(positiveNumber)==='number'){
        let result=(((positiveNumber*3)+10)/2)-5;
        return result;
    }
    else{
        return "Please enter input as a number!!";
    }
    
}
const input='helo';
const output=mindGame(input);
console.log(output)