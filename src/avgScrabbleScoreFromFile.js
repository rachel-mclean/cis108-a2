let fs = require('fs');
let avgScrabbleScore = require('./avgScrabbleScore');

/**
 * Returns the average scrabble score of all the words the
 * given text file.
 *
 * Use fs.readFileSync to read the contents.
 *
 * Create some sample files yourself. We also supplied
 * sample-words.txt.
 */
function avgScrabbleScoreFromFile(fileName) {
  let arrayOfWords = fs.readFileSync(`../src/${fileName}`, 'utf-8').split('\n');
  console.log(arrayOfWords);
  let averageScore = avgScrabbleScore(arrayOfWords);
  return averageScore;
}

if (require.main === module) {
  console.log('Running sanity checks for avgScrabbleScoreFromFile:');

  console.log(avgScrabbleScoreFromFile('sample-words.txt'));
  console.log(avgScrabbleScoreFromFile('most-common-words.txt'))
}

module.exports = avgScrabbleScoreFromFile;
