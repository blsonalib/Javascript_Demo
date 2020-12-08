var person = {
    firstName: "Sonali",
    lastName: "Bankar",
    age: 25,
    job: "Dev",

    fullName: function () {
        return this.firstName + " is " + this.lastName;
    }
};
document.getElementById("demo").innerHTML = person.fullName();