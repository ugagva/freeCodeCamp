//A square of squares

//Given an integral number, determine if it's a square number:

 // SOLUTION
var isSquare = function(n){
    if (n>=0 &&  Math.sqrt(n) %1 ===0 ){
        return true
    }else return false
}
