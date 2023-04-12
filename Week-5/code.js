/// Assignment 5
// Exercise 5.1

function dotask1() {
    setTimeout(() => {
      console.log('Task 1');
    }, 2000);
  
    return 'task1';
  }
  
  function dotask2() {
    setTimeout(() => {
      console.log('Task 2');
    }, 1000);
    return 'task2';
  }
  
  function dotask3() {
    setTimeout(() => {
      console.log('Task 3');
    }, 1500);
    return 'task3';
  }
  
  function* GeneratorApproach(...args) {
    for (let ele of args) {
      console.log(ele);
      yield ele();
    }
    return 'result';
  }
  
  const iterator1 = GeneratorApproach(dotask1, dotask2, dotask3);
  
  console.log(iterator1.next());
  console.log(iterator1.next());
  console.log(iterator1.next());
  console.log(iterator1.next());
  
  async function AsyncAwaitApproach(fn1, fn2, fn3) {
    await fn1();
    await fn2();
    await fn3();
  }
  
  AsyncAwaitApproach(dotask1, dotask2, dotask3);
  
  // Execise 5.2
  
  function isVowel(char) {
    return 'aeiou'.includes(char);
  }
  
  function vowelCount(str) {
    const vowelMap = new Map();
    for (let char of str) {
      let lowerCaseChar = char.toLowerCase();
      if (isVowel(lowerCaseChar)) {
        if (vowelMap.has(lowerCaseChar)) {
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    return vowelMap;
  }
  
  console.log(vowelCount('aeiouaeiou'));
  
  function unique(arr) {
    const result = [];
    for (let ele in arr) {
      if (!result.includes(ele)) {
        result.push(ele);
      }
    }
    return result;
  }
  
  // Exercise 5.3
  
  class Set_ {
    constructor(arr) {
      this.arr = arr;
      this.unique = unique(arr);
    }
    size(arr) {
      return unique(arr).length;
    }
  }
  
  let array = [1, 3, 4, 1];
  
  hasDuplicate = (arr) => new Set_(arr).size() !== arr.length;
  console.log(hasDuplicate(array));