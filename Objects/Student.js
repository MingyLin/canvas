function Student(firstName, subject) {
    Person.call(this, firstName);
    this.subject = subject;    
}

Student.prototype = Object.create(Person.prototype);