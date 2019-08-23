const dec2Bin = function(dec)
{
    if(dec >= 0) {
        return dec.toString(2);
    }
    else {
        return (~dec).toString(2);
    }
}

console.log(dec2Bin(25))
