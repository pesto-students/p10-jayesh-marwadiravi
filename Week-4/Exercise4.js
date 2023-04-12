//Assignment 4

//Exercise 4.1
class PromiseFunction {
  constructor(resolve, reject, timeToPending) {
    this.x;
    this.status = "pending";
    this.timeToPending = timeToPending;
    let x = Math.random() * 100;
    console.log(x);
    console.log(x % 5);
    this.x = x;
    if (x % 5 === 0) {
      console.log('resolve');
      this.status = "resolve";
      resolve()
    } else {
      console.log('reject');
      this.status = "reject";
      reject()
      }
  }

  then_(callback){
    setTimeout(()=>{
      if (this.status==="resolve"){
        callback()
    }
    }, this.timeToPending )
    return this
  }

  catch_(callback){
    setTimeout(()=>{
      if (this.status==="reject"){
        callback()
    }
    }, this.timeToPending)
    return this
  }

  finally_(callback){
    setTimeout(()=>{
    if (this.status === 'reject'|| this.status === "resolve"){
      callback()
    }
  }, this.timeToPending)
    return this
  }

}

const p = new PromiseFunction(()=>{console.log("resolve callback")}, ()=>{console.log("reject callback")}, 1000)

console.log(p.then_(()=>{console.log("then argument")}).catch_(()=>{console.log("reject argument")}).finally_(()=>{console.log("finally argument")}))

//Exercise 4.2

var Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

class Teacher {
  teach(subject) {
    console.log(`${this.name} teaches ${subject} `);
  }
}

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

const obj1 = new Teacher();

obj1.initialize('ravi', 28);

obj1.teach('science');

// Exercise 4.3

const obj = {
  old: 0,
  new_: 1,
  res: 0,
  itera: 0,
  [Symbol.iterator](){
    return this
  },
  next()  {
    console.log(this.old)
    this.res = this.old + this.new_
    this.old = this.new_
    this.new_ = this.res
    this.itera = this.itera + 1
    return {
      value: this.old,
      done : this.itera>10
    }
  }
}

iterator = obj[Symbol.iterator]()
iterator.next()
iterator.next()
iterator.next()
iterator.next()
iterator.next()
iterator.next()
iterator.next()
iterator.next()
iterator.next()
iterator.next()
iterator.next()
iterator.next()
iterator.next()
