// Only change code below
class Person {

    show(){
      console.log(Person.display());
    }
    static display(message){
      var message = "Static method from Person class";
      return message;
    }
  }
  // Only change code above
  var message = new Person();
  message.show();
  module.exports = Person;