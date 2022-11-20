import { words } from './words.js'
let input = 'раз'

/* MY_ALGORITHM */
/* words.forEach(word => {
  let matchedChars = 0
  for (i=1; i<=input.length; i++) {
    if (input[input.length-i] == word[word.length-i]) {
      matchedChars ++
    }
  }
  if (matchedChars == input.length) {
    console.log(word)
  }
}) */

words.forEach(word => {
  if (word.endsWith(input)) {
    console.log(word)
  }
})