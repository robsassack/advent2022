const fs = require('fs');
// read input file
let file = fs.readFileSync('./input.txt', 'utf8');
let input = file.split('\n');

const fullyContains = (a, b) => {
  // checks if a contains b or b contains a
  return (a.every((item) => b.includes(item))) || (b.every((item) => a.includes(item)));
}

const overlap = (a, b) => {
  // checks if a and b have any overlapping values
  return (a.some((item) => b.includes(item))) || (b.some((item) => a.includes(item)));
}

let full = 0;
let overlaps = 0;
let assignments = [];

input.forEach((line) => {
  let section = line.split(',');
  let newAssignment = section.map((pair) => {
    let newPair = [];
    let range = pair.split('-');
    const start = parseInt(range[0]);
    const end = parseInt(range[1]);
    for (let i = start; i <= end; i++) {
      newPair.push(i);
    }
    return newPair;
  })
  assignments.push(newAssignment);
})


assignments.forEach((assignment) => {
  if (fullyContains(assignment[0], assignment[1])) {
    full++;
  }
  if (overlap(assignment[0], assignment[1])) {
    overlaps++;
  }
})

// Part 1
console.log("Number of fully contained assignment pairs: " + full);

// Part 2
console.log("Number of overlapping assignment pairs: " + overlaps);
