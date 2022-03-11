const student = {
  firstName: "John",
  lastName: "Duck",
  age: 30,
  greeting: function () {
    return `Hello, my name is ${this.firstName} ${this.lastName}!`;
  },
};

const student2 = {
  firstName: "Donald",
  lastName: "Duck",
  age: 19,
  greeting: function () {
    return `Hello, my name is ${this.firstName} ${this.lastName}!`;
  },
};

const student3 = {
  firstName: "Mickey",
  lastName: "Mouse",
  age: 18,
  greeting: function () {
    return `Hello, my name is ${this.firstName} ${this.lastName}!`;
  },
};

const student4 = {
  firstName: "Barry",
  lastName: "Allen",
  age: 20,
  greeting: function () {
    return `Hello, my name is ${this.firstName} ${this.lastName}!`;
  },
};

const students = [student, student2, student3, student4];

const printStudentInformation = () => {
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(student.greeting());
  }
};

printStudentInformation();
