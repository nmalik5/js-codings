let Person = function (name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
}

let Student = function (name, id) {
    Person.call(this, name);
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;

let student = new Student('Doe', 1);

console.log('student type of student ?', student instanceof Student);
console.log('student type of person ?', student instanceof Person);
console.log('name of student', student.getName());


