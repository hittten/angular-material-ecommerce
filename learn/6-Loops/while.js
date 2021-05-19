// do while

let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);


// while do
let i = 0;
while (i < 5) {
  i += 1;
  console.log(i);
}

// continue

let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n);
}


let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    // continue;
  }
  n += i;
  console.log(n);
}
