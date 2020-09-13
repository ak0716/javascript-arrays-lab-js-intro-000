var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
destructivelyAppendKitten = () => {
  kittens.push('Ralph');
  return kittens;
}

function destructivelyPrependKitten() {
  kittens.unshift('Bob');
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten () {
  let newKittens = kittens.concat('Broom')
  return newKittens
}

function prependKitten () {
  let newKittens = 'Arnold'.concat(kittens)
  return newKittens
  
}
