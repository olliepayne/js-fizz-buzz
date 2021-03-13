const inputEl = document.getElementById('input')
const runBtn = document.getElementById('run-btn')
runBtn.addEventListener('click', runFizzBuzz)
const outputEl = document.getElementById('output')

function runFizzBuzz() {
  outputEl.value = ''
  checkFizzBuzz(1, inputEl.value)
}

function checkFizzBuzz(i, n) {
  if (i <= n) {
    if (i % 3 === 0 && i % 5 === 0) {
      output = 'FizzBuzz'
    } else if (i % 3 === 0) {
      output = 'Fizz'
    } else if (i % 5 === 0) {
      output = 'Buzz'
    } else {
      output = i
    }

    outputEl.value = `${outputEl.value} \n ${output}`

    checkFizzBuzz(i + 1, n)
  }
}