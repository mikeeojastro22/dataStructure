// Stack
// First In Last Out

/**
 * []
 * [1]
 * [1,2]
 * [1,2,3]
 * Retrieve Data
 * [1,2]
 * [1]
 * []
 */

let data = [];

function stack(element){ // adding elements to the stack
    data.push(element);
}

function unstack(){ // removing the last in
    return data.pop();
}

console.log(data);
stack("Monica");
console.log(data);
stack("Ross");
console.log(data);
stack("Chandler");
console.log(data);
console.log(`Unstacked: ${unstack()}`);
console.log(data);
console.log(`Unstacked: ${unstack()}`);
console.log(data);
console.log(`Unstacked: ${unstack()}`);
console.log(data);