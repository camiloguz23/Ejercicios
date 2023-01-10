//^ Array

const list = ["ca", "mi", "lo", "jey"];
list.push('as') 
console.log(list)
list.pop() 
console.log(list)
list.splice(3,1) 
console.log(list)

//^ map
const newList = list.map((item,index,list) => {
    return item.includes("c") ? 'tengo una c': item
})

//^ filter

const newList2 = list.filter((item) => {
    if (item.includes("c")) {
        return item
    }
})

//^ reduce

const numbers = [1,2,3,4,5]

const sum = numbers.reduce((valor1,valor2) => valor1+valor2,1)

console.log(sum);

//^ objetos

const personas = [
  {
    name: "Jeyson",
    age: 26,
    email: "jeysonkm",
    password: "454aasa",
    nacionalidad: "CO",
  },
  {
    name: "Andrea",
    age: 20,
    email: "Andrea",
    password: "454aasa",
    nacionalidad: "CO",
  },
  {
    name: "Natalia",
    age: 25,
    email: "Natalianm",
    password: "454aasa",
    nacionalidad: "FR",
  },
  {
    name: "Viviana",
    age: 23,
    email: "Vivinanava",
    password: "454aasa",
    nacionalidad: "AR",
  },
  {
    name: "Juan",
    age: 7,
    email: "jeysonkm",
    password: "454aasa",
    nacionalidad: "AR",
  },
  {
    name: "Franco",
    age: 15,
    email: "jeysonkm",
    password: "454aasa",
    nacionalidad: "MX",
  },
];

const edad = personas.filter((item) => item.age < 18);

const argentinos = personas.filter((item) => item.nacionalidad === "AR");

const addCC = personas.map((item) => {
  if (item.nacionalidad == "CO") {
    item.cedula = 111111;
    return item;
  }

  return item;
});

const suma = personas
  .filter((item) => item.nacionalidad === "CO" || item.name === "Natalia")
  .reduce((counter, item) => counter + item.age,0);

console.log(suma);
