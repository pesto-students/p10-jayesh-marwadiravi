// Excersie 3.1
function add(a, b) {
    return a + b;
  }
  
  function memoize(func) {
    const mapper = new Map();
  
    return function (...args) {
      const inputStr = args.join("");
      if (mapper.get(inputStr) === undefined) {
        const result = args.reduce((a, b) => {
          return func(a, b);
        });
        console.log("If ", result);
        mapper.set(inputStr, result);
      } else {
        console.log("else", mapper.get(inputStr));
        return mapper.get(inputStr);
      }
    };
  }
  
  const memoizeAdd = memoize(add);
  
  memoizeAdd(100, 200);
  memoizeAdd(100, 200);
  
  memoizeAdd(100, 100);
  memoizeAdd(100, 100);
  
  