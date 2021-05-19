class Person {
  constructor(name) {
    this.name = name
  }
}

const p1 = new Person('Gilberto')

console.log(p1.name)
p1.name = "José";
console.log(p1.name)

class Teacher extends Person {
  constructor(name, subjects) {
    super(name);
    this.subjects = subjects;
  }
}

const t1 = new Teacher('Pepe', ['html', 'javascript'])

console.log(t1.name)
t1.name = "Alberto";
console.log(t1.subjects)

// to run this node learn/12-POO/main.js
