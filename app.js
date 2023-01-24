const numero = 2;

const suma = function (num1,num2) {
  return num1 + num2;
}

function resta(num1,num2) {
  return num1 - num2;
}

function operacion(ope,num1,num2) {
  const TYPE_OPERATIONS = {
    suma : suma,
    resta: resta
  }

  return TYPE_OPERATIONS[ope](num1,num2)
  
}

console.log(operacion("suma",10,2));

