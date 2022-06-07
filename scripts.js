// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText() {
  if (text.trim().length === 0) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++
    }
  });
  return wordCount;
}

function ommitOffensiveWords (word,text) {
  const wordArray = text.split(" ");
  wordArray.forEach(function(word) {
    if (text === word) {
      return " ";
    }
    return text;
  });
}


function ommitOffensiveWords(word, text) {
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (element === word) {
      console.log(true);
    } else {
			console.log(false);
		}   	
  });
}

const word = "zoinks";
const text = "hello world zoinks";