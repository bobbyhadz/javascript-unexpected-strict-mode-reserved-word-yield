// ⛔️ SyntaxError: Unexpected strict mode reserved word 'yield'

// EXAMPLE 1 - Add an asterisk to mark the function as a generator

// ✅ works
function* generator() {
  yield 10;
  yield 15;
}

const gen = generator();

console.log(gen.next().value); // 👉️ 10
console.log(gen.next().value); // 👉️ 15

// ------------------------------------------------------------------

// // EXAMPLE 2 - The directly enclosing function has to be marked as a generator

// function generator() {
//   return function* inner() {
//     yield 10;
//     yield 15;
//   };
// }

// const gen = generator()();

// console.log(gen.next().value); // 👉️ 10
// console.log(gen.next().value); // 👉️ 15
