
  // Exercise 3.3
  
  function createIncrement() {
    let count = 0;
    function increment() {
      count = count + 1;
    }
    let message = `Count is ${count}`;
    function log() {
      console.log(message);
    }
    return [increment, log];
  }
  const [increment, log] = createIncrement(); // count = 0
  increment();
  increment();
  increment();
  log(); // What is logged?
  
  // when createIncrement is called, it gets all the current snapshot of vairable values and gives increment and log functions as output with count value
  // as count = 0 and hence message = "Count is 0"
  // when increment is called three times after above, count in increment function is increase by 3 times which makes count value in increment 2
  // but in log function the value of count is = 0 as the message variable at the time of createIncrement call is "Count is 0"
  // and log function is not affected by increment calls
  