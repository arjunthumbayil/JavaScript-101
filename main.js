// Reduce

let users = [
  { firstname: "fds", lastName: "b", dob: 1995, age: 27 },
  { firstname: "e", lastName: "fd", dob: 1998, age: 24 },
  { firstname: "ff", lastName: "gg", dob: 1993, age: 29 },
  { firstname: "u", lastName: "m", dob: 1994, age: 28 },
  { firstname: "d", lastName: "b", dob: 1995, age: 27 },
  { firstname: "ak", lastName: "aff", dob: 1997, age: 26 },
  { firstname: "rs", lastName: "fff", dob: 1997, age: 27 },
  { firstname: "r", lastName: "z", dob: 1992, age: 30 },
  { firstname: "dd", lastName: "p", dob: 1993, age: 29 },
  { firstname: "as", lastName: "r", dob: 1994, age: 28 },
  { firstname: "nd", lastName: "b", dob: 1997, age: 25 },
  { firstname: "ndd", lastName: "fb", dob: 1999, age: 23 },
  { firstname: "slu", lastName: "dsm", dob: 1996, age: 26 },
  { firstname: "du", lastName: "srm", dob: 1993, age: 29 },
];
/* We need to have count of how many people where born in a particular year.
Output should be of the form {1990:x, 1991:y, 1992:z, ....}
where x,y,z are respective total counts of people having dob as the key year.
 */

// acc = {1990:x, 1991:y, 1992:z, ....};

const output = users.reduce((acc, curr) => {
  if (acc[curr.dob]) {
    acc[curr.dob] = ++acc[curr.dob];
  } else {
    acc[curr.dob] = 1;
  }

  return acc;
}, {});

console.log(output);

let outputTwo = users.reduce(
  (acc, curr) => ({ ...acc, [curr.dob]: acc[curr.dob] + 1 || 1 }),
  {}
);

console.log(outputTwo);

const outputThree = users.reduce(function (acc, { age, firstname }) {
  if (age >= 28) {
    acc.push(firstname);
  }
  return acc;
}, []);

console.log(outputThree);
