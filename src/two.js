export const function2 = Object => {
    let Objecttostring = JSON.stringify(Object);

    return Objecttostring;
};

let usersJson = [
    {
        Nombre: "Elizabeth",
        Edad: 35,
    },
    {
        Nombre: "Andrés",
        Edad: 36,
    },
    {
        nombre: "Renata",
        edad: 15,
    },
    {
        Nombre: "Mauricio",
        Edad: 16,
    },
    {
        Nombre: "Magdalena",
        Edad: 14,
    }

];

function2(usersJson);
console.log(function2(usersJson));
 document.write('<p>Two Js</p>');
 document.write('<hr>');
document.write(function2(usersJson))
 