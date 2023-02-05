let x = prompt('enter the number');
let y = prompt('enter number to the power' )
function pow(x,y) {
    if(y === 1) {
        return x;
    }else{
        return x * pow(x,y-1);
    }
}
alert(pow(x,y))