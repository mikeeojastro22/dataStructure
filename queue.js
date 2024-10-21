// Queue
// First in First Out

/**
 * []
 * [1]
 * [1,2]
 * [1,2,3]
 * Retrieve Data
 * [2,3]
 * [3]
 * []
 */

let data = [];

// enqueue

function enqueue(element){ // adding elements to our queue
    data.push(element);
}

function dequeue(){ // removes the element who entered first
    return data.shift();
}

console.log(data);
enqueue("Phoebe");
console.log(data);
enqueue("Joey");
console.log(data);
enqueue("Rachel");
console.log(data);
console.log(`Dequeued: ${dequeue()}`);
console.log(data);
console.log(`Dequeued: ${dequeue()}`);
console.log(data);
console.log(`Dequeued: ${dequeue()}`);
console.log(data);