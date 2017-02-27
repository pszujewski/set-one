function getYearOfBirth(age) {
  let yearOfBirth = 2017 - age;
  console.log(`I was born in ${yearOfBirth}.`);
}

function whoAmI(name, age) {
  if (name === undefined || age === undefined || typeof name !== "string" || isNaN(age)) {
    console.error("Arguments not valid");
  }
  try {
    if (age < 0) {
      throw new Error("Hey man, you can't use negatives!");
    } else {
      console.log(`hi, my name is ${name} and I am ${age} years old.`);
      getYearOfBirth(age);
    }
  }
  catch(err) {
    console.log(err.message);
  }
}
whoAmI("Peter", "9");
