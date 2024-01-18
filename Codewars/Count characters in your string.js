function count(string) {

    return string.split('').reduce((tally,letters)=>{
        tally[letters]= (tally[letters] || 0)+1
        return tally;
    }, {})
}