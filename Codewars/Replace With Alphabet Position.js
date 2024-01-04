
function alphabetPosition(text) {

    const  newText=text.split('').map(e=>parseInt(e,36)-9).filter( e=> e>=+1).join(' ')

    return newText;
}