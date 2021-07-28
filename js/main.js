import dragAndDrop from "./dragAndDrop.js";
import cardOptions from "./cardOptions.js";

dragAndDrop();
cardOptions();

let array = [2, 4, 6];
const count = 10
let i = 2;

function fibonachi() {
    array.push((array[i-1] + array[i]));
    i++
    if (array.length < count) {
            fibonachi()
    } else {
        console.log(array);
    }
    
}

fibonachi();    