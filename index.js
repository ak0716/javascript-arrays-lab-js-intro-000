var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
destructivelyAppendKitten = () => {
  kittens.push('Ralph');
  return kittens;
}

destructivelyAppendKitten();

destructivelyPrependKitten = (name) => {
  kittens.unshift(name);
  return kittens;
}

destructivelyPrependKitten('Bob');
