// allow a user defined range
// print out into a 'virtual terminal'

const outputEl = document.getElementById('output')

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
    outputEl.innerText = outputEl.innerText + '\n' + output

    checkFizzBuzz(i + 1, n)
  }
}

checkFizzBuzz(1, 100)