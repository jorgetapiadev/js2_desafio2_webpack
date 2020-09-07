import { function1 } from "./one";
import { function2 } from "./two";
 
document.write('<hr>');
const function3 = (func1, func2) => {
    let resultOne = func1;
    let resultTwo = func2;

    let ObjectResults = {
        "status": "OK",
        "one": resultOne,
        "two": resultTwo
    };
    return ObjectResults;
};
console.log(function3(function1, function2));