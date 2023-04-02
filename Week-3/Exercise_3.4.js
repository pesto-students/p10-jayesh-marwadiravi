
  // Excercise 3.4
  
  function createStack() {
    return {
      items: [],
      push(item) {
        this.items.push(item);
      },
      pop() {
        return this.items.pop();
      },
    };
  }
  const stack = createStack();
  stack.push(10);
  stack.push(5);
  console.log(stack.pop()); // => 5
  console.log(stack.items); // => [10]
  stack.items = [10, 100, 1000]; // Encapsulationbroken!
  console.log(stack.items);
  
  // Modification
  
  function createStackModified() {
    class stackEncapsulate {
      #waterLimit = [];
  
      #checkWater(value) {
        this.#waterLimit.push(value);
        return this.#waterLimit;
      }
  
      push(value) {
        return this.#checkWater(value);
      }
  
      #waterCheck() {
        return this.#waterLimit.pop();
      }
  
      pop(value) {
        return this.#waterCheck(value);
      }
    }
    return new stackEncapsulate();
  }
  
  const stack2 = createStackModified();
  console.log(stack2.push(20)); // [20]
  console.log(stack2.push(30)); // [20,30]
  console.log(stack2.pop()); // 30
  console.log(stack2.items); // undefined
  