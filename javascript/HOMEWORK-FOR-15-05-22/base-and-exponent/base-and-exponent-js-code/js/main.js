var base = parseInt(prompt("Please enter the base value: "))
var exponent = parseInt(prompt("Please enter the exponent value: "))

var product = 1;
var exp = exponent;

while (exp > 0) {
  product *= base;
  exp--;
}

alert(product);