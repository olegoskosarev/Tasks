function User(fullName) {
    this.fullName = fullName;
}
  
const alex = new User("Alex Turner");

Object.defineProperties(alex, {
    firstName: {
        get: function() {
            return this.fullName.split(" ")[0];
        }, 

        set: function(newFirstName) {
            this.fullName = newFirstName + " " + this.lastName;
        }
    },

    lastName: {
        get: function() {
            return this.fullName.split(" ")[1];
        }, 

        set: function(newLastName) {
            this.fullName = this.firstName + " " + newLastName;
        }
    }
});

console.log(alex.firstName); 
console.log(alex.lastName);

alex.firstName = 'Sasha';

console.log(alex.fullName);