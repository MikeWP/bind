var person = {
    firstName : 'John',
    lastName : 'Doe',
    getFullName : function() {
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(person.getFullName())

var henry = {
    firstName : 'Henry',
    lastName : 'kramel',
}

console.log(henry)

var getHenryFullName = person.getFullName.bind(henry)

console.log(getHenryFullName());
