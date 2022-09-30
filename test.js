//! Make a logical if to evaluate the score value with the following conditions:
//   * 1. If the score is 90 or more
//   * - Fill the result variable with the value: 'Congratulations! You get an A.'
//   * 2. If the score is 80 to 89
//   * - Fill the result variable with the value: 'You got the value B.'
//   * 3. If the score is 70 to 79
//   * - Fill the result variable with the value: 'You got the value C.'
//   * 4. If the score is 60 to 69:
//   * - Fill the result variable with the value: 'You got the value D.'
//   * 5. If the score is below 60:
//   * - Fill the result variable with the value: 'You got the value E.'

let score = '50';

if (score >= 90) {
    result = 'Conratulations! you get an A.'
} else if (score >= 80) {
    result = 'You got the value B.'
} else if (score >= 70) {
    result = 'You got the value C'
} else if (score >= 60) {
    result = 'You got the value D'
} else if (score <= 60) {
    result = 'You got the value E'
}

console.log(result)

