function findNb(m) {

    let n= (Math.sqrt(8*Math.sqrt(m)+1)-1)/2;

    return n===Math.floor(n) ? n: (-1);

}
