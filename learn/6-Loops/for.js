// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// for
for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log('Walking east one step', step);
}

// for with break
for (let step = 0; step < 5; step++) {
  if (step === 2) {
    break;
  }
  console.log('Walking east one step', step);
}

// for with continue
for (let step = 0; step < 5; step++) {
  if (step === 2) {
    continue
  }
  console.log('Walking east one step', step);
}

// for in
const obj = {
  name: 'pepe',
  lastName: 'lopez'
}

for (let objectKey in obj) {
  console.log(objectKey)
}

// for of
const arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
  console.log(i); // logs 3, 5, 7
}
