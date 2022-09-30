//!Class
const mail = {
    from : "pengirim@gmail.com",
    sendMessage : function (msg,to) {
        console.log(`Kamu mengirim : ${msg} ke ${to} from ${this.from}`);
    }
};

console.log(mail.from);
mail.sendMessage('apakabar','penerima@dicoding.com')

class Animal {
    constructor(name, age, isMammal) {
      this.name = name;
  
      this.age = age;
  
      this.isMammal = isMammal;
    }
  }
  
  class Rabbit extends Animal {
    constructor(name, age, isMammal) {
      super(name, age, true);
    }
  
    eat() {
      return `${this.name} sedang makan!`;
    }
  }
  
  class Eagle extends Animal {
    constructor(name, age, isMammal) {
      super(name, age, false);
    }
  
    fly() {
      return `${this.name} sedang terbang!`;
    }
  }
  
  const myRabbit = new Rabbit("Labi", 2);
  
  myRabbit.eat();
  
  console.log(myRabbit.eat());
  
  const myEagle = new Eagle("Elo", 4);
  
  myEagle.fly();
  
  console.log(myEagle.fly());