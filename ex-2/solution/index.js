class Student {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  greeting() {
    return `Hello, my name is ${this.firstName} ${this.lastName}!`;
  }
}

const students = [];
students.push(new Student("John", "Duck", 30));
students.push(new Student("Donald", "Duck", 19));
students.push(new Student("Mickey", "Mouse", 18));
students.push(new Student("Barry", "Allen", 20));

const printStudentInformation = () => {
  students.forEach((student) => {
    console.log(student.greeting());
  });
};

printStudentInformation();
