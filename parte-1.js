/*1- Resolver el problema utilizando javascript, para identificar una figura geométrica:

Teniendo una variable numérica que representa el número de lados de una figura geométrica, 
mostrar por consola su tipo. Los tipos son: "Círculo", "Triángulo", "Cuadrado", "Pentágono", "Hexágono" o "Polígono", según corresponda:

Círculo: si el número de lados es 0.
Triángulo: si el número de lados es 3.
Cuadrado: si el número de lados es 4.
Pentágono: si el número de lados es 5.
Hexágono: si el número de lados es 6.
Polígono: si el número de lados es mayor que 6.
Asegúrate de incluir un mensaje de error si el número de lados es menor o igual a cero.

2- Mejorar el ejercicio anterior con manejo de errores:

Modifica la función tipoFigura para que, además de determinar el tipo de figura geométrica, verifique que el número de lados sea válido 
(mayor o igual a cero). Si el número de lados es menor a cero,  debe mostrar  un mensaje de error indicando que el número de lados no es correcto.

3- Mejorar el ejercicio anterior para calcular el perímetro de la figura geométrica:

Amplía la funcionalidad del programa definiendo ademas una variable numerica que representa el largo de un lado,  
calcule y retorne el perímetro de la misma. El perímetro de una figura geométrica se calcula sumando las longitudes de todos sus 
lados. Si es un círculo, el perímetro será la circunferencia, calculada como 2 * π * radio, donde π es una constante (aproximadamente 3.14159) y 
radio es el radio del círculo.
 (para simplificar el ejercicio, se toma solo 1 lado asumiendo que todos los lados restantes son iguales) .

IMPORTANTE: resolver el enunciado de la forma que creas conveniente, si deseas organizarlo usando una o mas funciones o escribir el código directamente */

function identificarFigura(lados) {
  if (lados < 0) {
    return "Figura invalida, no existe figura con lados negativos";
  } else if (lados === 0) {
    return "Círculo";
  } else if (lados === 3) {
    return "Triángulo";
  } else if (lados === 4) {
    return "Cuadrado";
  } else if (lados === 5) {
    return "Pentágono";
  } else if (lados === 6) {
    return "Hexágono";
  } else if (lados > 6) {
    return "Polígono";
  }
}

console.log(identificarFigura(-1)); //Figura invalida, no existe figura con lados negativos
console.log(identificarFigura(0)); //Círculo
console.log(identificarFigura(1)); //undefined
console.log(identificarFigura(2)); //undefined
console.log(identificarFigura(3)); //Triángulo
console.log(identificarFigura(4)); //Cuadrado
console.log(identificarFigura(5)); //Pentágono
console.log(identificarFigura(6)); //Hexágono
console.log(identificarFigura(7)); //Polígono
