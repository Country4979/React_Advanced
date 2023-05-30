/*CON ARROW FUNCTIONS
const pipe =
    (...functions) =>
    (value) => {
        return functions.reduce((currentValue, currentFunction) => {
            return currentFunction(currentValue);
        }, value);
    };*/

function pipe(...functions) {  //...functions es un array de funciones
    return function (value) {
        return functions.reduceRight((currentValue, currentFunction) => {
            return currentFunction(currentValue);
        }, value);
    };
}

export default pipe;
