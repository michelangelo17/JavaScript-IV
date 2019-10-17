// CODE here for your Lambda Classes
class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
  };
  speak() {
    console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
  }
}

class Instructor extends Person {
  constructor(attrs) {
    super(attrs);
    this.specialty = attrs.specialty;
    this.favLanguage = attrs.favLanguage;
    this.catchPhrase = attrs.catchPhrase;
  };
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} recieves a perfect score on ${subject}`);
  }
  grading(student) {
    student.grade = Math.round(Math.random()*100);
  }
}

class Student extends Person {
  constructor(attrs) {
    super(attrs);
    this.previousBackground = attrs.previousBackground;
    this.className = attrs.className;
    this.favSubjects = attrs.favSubjects;
    this.grade = Math.round(Math.random()*100);
  }
  listsSubjects() {
    console.log(...this.favSubjects);
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun a sprint challenge on ${subject}`);
  }
  graduate() {
    let gradeOverUnder = 70 - this.grade;
    if (this.grade > 70) {
      gradeOverUnder *= -1;
      console.log(`Congratulations! Your final grade is ${this.grade}, you passed by ${gradeOverUnder} points! You are ready to graduate!`);
    } else if (this.grade < 70) {
      console.log(`You are not ready to graduate, your final grade is ${this.grade}. You were ${gradeOverUnder} points away! Don't worry though, that's what Flex is for!`);
    } else {
      //at 70 there is no points over or under passing so different message for that case.
      console.log(`Congratulations! Your final grade is ${this.grade}, that's a passing score! You are ready to graduate!`);
    }
  }
}

class ProjectManager extends Instructor {
  constructor(attrs) {
    super(attrs);
    this.gradClassName = attrs.gradClassName;
    this.favInstructor = attrs.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} annonces to the ${channel}, @${channel} standy times!`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}



// Demo Objects

// const testOne = new Person({
//   name: 'Test',
//   age: 28,
//   location: 'Paris, France',
// })

// const testTwo = new Instructor({
//   name: 'Testy',
//   age: 30,
//   location: 'London, England',
//   specialty: 'JavaScript',
//   favLanguage: 'JavaScript',
//   catchPhrase: 'I love JavaScript!',
// })

// const testThree = new Student({
//   name: 'McTesty',
//   age: 32,
//   location: 'Berlin, Germany',
//   previousBackground: 'Sales',
//   className: 'WEB28',
//   favSubjects: ['JavaScript', 'React', 'Node.js'],
// })

// const testFour = new ProjectManager({
//   name: 'Testy McTestyFace',
//   age: 34,
//   location: 'Brussels, Belgium',
//   specialty: 'Node.js',
//   favLanguage: 'Python',
//   catchPhrase: 'All your base are belong to us!',
//   gradClassName: 'WEB10',
//   favInstructor: 'Testy',
// })



// Tests

// console.log(testOne);
// testOne.speak();

// console.log(testTwo);
// testTwo.speak();
// testTwo.demo('React');
// testTwo.grade(testThree, 'CSS');

// console.log(testThree);
// testThree.listsSubjects();
// testThree.PRAssignment('Node.js');
// testThree.sprintChallenge('UI');

// console.log(testFour);
// testFour.standUp('WEB28_McTestyFace');
// testFour.debugsCode(testThree, 'JavaScript Fundamentals');



// Stretch tests

// Use stringify to see what the value is before grading method runs. console.log points to the object so will show updated value even though called before grading.


// console.log(JSON.stringify(testThree));

// testTwo.grading(testThree);

// console.log(JSON.stringify(testThree));

// testFour.grading(testThree);

// console.log(testThree);

// testThree.graduate();
