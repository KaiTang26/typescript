function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Kai", lastName: "Tang" };
console.log(greeter(user));
