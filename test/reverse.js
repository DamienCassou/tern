// Test inverted flow of information (against propagation) when no
// accurate information is available.

var x = {foo: 1, bar: 2};

// num: fn(x: <number>) -> <number>
function num(x) {
  return x * 3;
}

// obj: fn(x: {bar: <number>, foo: <number>}) -> <number>
function obj(x) {
  return x.foo - x.bar;
}