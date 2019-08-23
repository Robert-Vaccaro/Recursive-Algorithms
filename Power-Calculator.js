const sumOf = function(number, expon) {
  if (expon>=0){
    console.log(number**expon)
  }
  else{
    console.log("Exponent needs to be positive")
  }
};

let num = 10;
let pow = 2;
sumOf(num,pow)
