class Stack {
    constructor () {
      this.items = []
    } 
  
    push(element) {
      console.log(`\n pushing ${element}`)
      this.items.push(element)
    }
  
    pop() {
      if (this.isEmpty() ) {
        return 'Underflow'
      }
      return this.items.pop()
    }
  
    peek () {
      return this.items[this.items.length -1]
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
      console.log(`\n current stack values --> ${str}`) 
    } 
  
  }
  
  let stack = new Stack(); 
  
  stack.push(1)
  stack.printStack()
  stack.push(2)
  stack.printStack()
  stack.push(3)
  stack.printStack()
  
  let poppedElement = stack.pop()
  console.log(`\n popping out element from stack --> ${poppedElement}`)
  stack.printStack()
  
  let topmost = stack.peek()
  console.log(`\n Getting topmost element from stack --> ${topmost}`)
  stack.printStack()
  
  
  stack.push(4)
  stack.printStack()
  