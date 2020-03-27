let scrabbleScore = require('./scrabbleScore');

/**
 * Given an array of words, return the average scrabble
 * score.
 *
 * Use your implementation of scrabbleScore.
 */
function avgScrabbleScore(words) {
  let scores = 0;

  for(let word of words) {
    // console.log("score of " + word + " is " + scrabbleScore(word));
    scores = scores + scrabbleScore(word);
    // console.log("scores is now " + scores);
  }

  return scores/(words.length);
}

if (require.main === module) {
  console.log('Running sanity checks for avgScrabbleScore:');

  console.log(avgScrabbleScore(['aaa', 'cat', 'dog']) === 13/3);
  console.log(avgScrabbleScore(['aaaa', 'bbbb', 'cccc', 'dddd', 'zzzz']) === 76/5);
}

module.exports = avgScrabbleScore;
