
function people (firstName, lastName, emailAddress) {
    this.name = firstName;
    this.surname = lastName;
    this.email = emailAddress;
}

people('Mihlali', 'Matrose', "mihlalimatrose@gmail.com");

const fs = require('fs');

const people = `${people}.\n${people}.\n${people}`;
fs.writeFileSync('./people.txt', people);
console.log('file written');