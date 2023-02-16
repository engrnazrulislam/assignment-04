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
const output=evenOdd(charSting);
console.log(output)
