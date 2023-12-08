'use strict';
function getElementWidth(content, padding, border) {
    return (
        parseFloat(content) + parseFloat(padding) * 2 + parseFloat(border) * 2
    );
}
console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
// console.log(getElementWidth('155.5px', '3.3px', '5.1px')); // 200
