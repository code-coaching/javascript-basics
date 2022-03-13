class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  greeting() {
    return `Hello, my name is ${this.firstName} ${this.lastName}!`;
  }
}

class Student extends Person {
  constructor(firstName, lastName, age) {
    super(firstName, lastName, age);
  }
}

class Teacher extends Person {
  constructor(firstName, lastName, age) {
    super(firstName, lastName, age);
  }

  greeting() {
    return `${super.greeting()} I am a teacher!`;
  }
}

const students = [];
students.push(new Student("John", "Duck", 30));
students.push(new Student("Donald", "Duck", 19));
students.push(new Student("Mickey", "Mouse", 18));
students.push(new Student("Barry", "Allen", 20));

const teachers = [];
teachers.push(new Teacher("Bart", "Duisters", 30));
teachers.push(new Teacher("Mark", "Duisters", 30));

const printInformation = (persons) => {
  persons.forEach((person) => {
    console.log(person.greeting());
  });
};

printInformation(students);
printInformation(teachers);
