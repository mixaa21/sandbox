function fibonacci(max) {
  let array = [0,1]
  let sum = 0
  for (i = 2; array[i-1] + array[i-2] < max; i++) {
    array.push(array[i-1] + array[i-2])
  }
  array = array.filter(item => {
    return item % 2 === 0
  }).map(i => {
    sum += i
  })
  return sum
}

console.log(fibonacci(1));