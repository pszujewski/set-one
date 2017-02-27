function getYearOfBirth(age) {
  var yearOfBirth = 2017 - age;
  console.log(`I was born in ${yearOfBirth}.`);
}

function whoAmI(name, age) {
  var yearOfBirth = 2017 - age;
  console.log(`hi, my name is ${name} and I am ${age} years old.`);
  getYearOfBirth(age);
}
whoAmI("Peter", "27");
