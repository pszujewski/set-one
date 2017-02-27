function getYearOfBirth(age) {
  var yearOfBirth = 2017 - age;
  console.log(`I was born in ${yearOfBirth}.`);
}

function whoAmI(name, age) {
  if (name === undefined || age === undefined) {
    console.error("Arguments not valid");
  }
  else if (typeof name === "string" && isNaN(age) === false) {
    try {
      if (age < 0) {
        throw new Error("Hey man, you can't use negatives!");
      }
      var yearOfBirth = 2017 - age;
      console.log(`hi, my name is ${name} and I am ${age} years old.`);
      getYearOfBirth(age);
    }
    catch(err) {
      console.log(err.message);
    }
  }
}
whoAmI("Peter", "nine");
