let numbers = [1, 4, 23, -4, 'one', 6, 0, 1.1, 3.1415];

export const function1 = (arr) => {

    let resultado = [];

    numbers.forEach(element => {
        if (typeof (element) === "number") {
            resultado.push(element * 4);

        }
    });

    resultado = resultado.filter(function (elementos) {
        if (elementos > 8) {
            return elementos;
        }
    });
    return resultado;

};

 function1(numbers);
console.log(function1(numbers));
document.write('<p>One Js</p>');
document.write('<hr>');
document.write(function1(numbers))
document.write('<hr>');
