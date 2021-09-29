// Only change line of code below this line
class Microsoft {
    constructor(name){
      this._name = name;
    }
    
    get name(){
      return this._name;
    }
    
    set name(newName){
      this._name = newName;
    }
    
    occupation(){
       return `${this._name} is philanthropist!`;
    }
  }
  class Facebook extends Microsoft{
    constructor(name,age){
      super(name);
      this.age = age;
    }
    studentAge(){
      return `${this._name} is ${this.age}`;
    }
    
  }
  let henry = new Microsoft("William Henry Gates III");
  console.log(henry.occupation());
  let elliot = new Facebook("Mark Ellior Zuckerberg", 23);
  console.log(elliot.occupation());
  console.log(elliot.studentAge());
  // Only change line of code above this line
  module.exports = {
    Microsoft,
    Facebook
  }