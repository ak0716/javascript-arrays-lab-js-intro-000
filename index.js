var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
destructivelyAppendKitten = (kittens) => {
  kittens.push("Ralph");
  return kittens
}

destructivelyPrependKitten = (kittens) => {
  kittens.unshift("Bob")
  return kittens
}

console.log(kittens);
