// Day 5: Logical Operators, Ternary Operator, Decision Making

// Declaring variables
let a = 59;
let b = 45;

// Logical AND (&&): true only if both conditions are true
let res = a > b && a == b;
console.log("Logical AND result:", res); // false

// Logical OR (||): true if at least one condition is true
let res1 = a < b || a !== b;
console.log("Logical OR result:", res1); // true

// Logical NOT (!): inverts the result of the condition
let res2 = a !== b;
console.log("Logical NOT result:", res2); // true

// Ternary Operator: shorthand for if-else
console.log(a < b ? "This is true" : "This is Incorrect"); // This is Incorrect

// Decision Making using if-else
let x = 5;

if (x > 5) {
    console.log("x is greater than 10");
} else {
    console.log("x is less than or equal to 10");
}
