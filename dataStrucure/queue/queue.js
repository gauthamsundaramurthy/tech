class Queue {
  constructor () {
    this.items = []
  } 

  enqueue(element) {
    console.log(`\n pushing ${element}`)
    this.items.push(element)
  }

  dequeue() {
    if (this.isEmpty() ) {
      return 'Underflow'
    }
    return this.items.shift()
  }

  front () {
    return this.items[0]
  }

  isEmpty() 
  { 
    return this.items.length == 0; 
  }

  printStack() 
  { 
    var str = ""; 
    for (var i = 0; i < this.items.length; i++) 
      str += this.items[i] + " "; 
    console.log(`\n current queue values --> ${str}`) 
  } 

}

let queue = new Queue(); 

queue.enqueue(1)
queue.printStack()
queue.enqueue(2)
queue.printStack()
queue.enqueue(3)
queue.printStack()

let poppedElement = queue.dequeue()
console.log(`\n popping out element from queue --> ${poppedElement}`)
queue.printStack()

let topmost = queue.front()
console.log(`\n Getting front element from queue --> ${topmost}`)
queue.printStack()

queue.enqueue(4)
queue.printStack()

queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.printStack()

poppedElement = queue.dequeue()
console.log(`\n popping out element from queue --> ${poppedElement}`)
