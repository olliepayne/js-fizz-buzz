// Write a program that outputs the string representation of numbers from 1 to n.
// But for multiples of three it should output “Fizz” instead of the number
// for the multiples of five output “Buzz”. 
// For numbers which are multiples of both three and five output “FizzBuzz”.

// allow a user defined range
// print out into a 'virtual terminal'

function checkFizzBuzz(i, n) {
  if (i <= n) {
    let output = ''

    if (i % 3 === 0 && i % 5 === 0) {
      output = 'FizzBuzz'
    } else if (i % 3 === 0) {
      output = 'Fizz'
    } else if (i % 5 === 0) {
      output = 'Buzz'
    } else {
      output = i
    }

    console.log(output)

    checkFizzBuzz(i + 1, n)
  }
}

checkFizzBuzz(1, 100)