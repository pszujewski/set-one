function getYearOfBirth(age) {
  let yearOfBirth = 2017 - age;
  console.log(`I was born in ${yearOfBirth}.`);
}

function whoAmI(name, age) {
  try {
    if (typeof name === "undefined" || typeof age === "undefined" || typeof name !== "string" || typeof age !=="number") {
      throw new Error("Arguments is undefined or not the right type");
    }

    if (age < 0) {
      throw new Error("Hey man, you can't use negatives!");
    }
    console.log(`hi, my name is ${name} and I am ${age} years old.`);
    getYearOfBirth(age);
  }
  catch(err) {
    console.log(err.message);
  }
}
whoAmI("Peter", -9);
