const data = {
    firstName: "Ravindra",
    LastName: "Marwadi",
  };
  
  const printName = function () {
    console.log(`The whole Name is ${this.firstName} ${this.LastName}`);
  };
  
  // Bind Example
  const funcbind = printName.bind(data);
  
  funcbind();
  
  // Call Example
  printName.call(data);
  
  // Apply Example
  
  function wrapperreduce(...arrr) {
    return arrr.reduce((a, b) => {
      return a + b;
    });
  }
  
  const addition = wrapperreduce.apply(null, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  
  console.log(addition);
  