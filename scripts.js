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

// function ommitOffensiveWords (word,text) {
//   const wordArray = text.split(" ");
//   wordArray.forEach(function(word) {
//     if (text === word) {
//       return " ";
//     }
//     return text;
//   });
// }


// function ommitOffensiveWords(word, text) {
//   const wordArray = text.split(" ");
//   wordArray.forEach(function(element) {
//     if (element === word) {
//       console.log(true);
//     } else {
// 			console.log(false);
// 		}   	
//   });
// }

// function ommitOffensiveWords(badWords, text) {
//   const wordArray = text.split(" ");
//   wordArray.forEach(function(element) {
//     if (element === badWords) {
      
//     } 
//   });
// }

// function ommitOffensiveWords(word, text) {
//   const wordArray = text.split(" ");
//   wordArray.forEach(function(element) {
//     if (element === word) {
//       console.log(true);
//     } else{
//       console.log(false)
//     }
//   });
// }

function ommitOffensiveWords(badWord, text) {
	let safeWords = [];
  const wordArray = text.split(" ");
  let counter = -1;
  wordArray.forEach(function(element) {
    safeWords = wordArray;
    counter++;
    if(element === badWord) {
      safeWords.splice(counter, 1);
    }
  });  
  return safeWords.join(" ");
}

const badWords = ['zoinks', 'muppeteer', 'biffaroni', 'loopdaloop' ];
const text = "Hello zoinks world! I love zoinks";
const badWord = badWords[0];

console(ommitOffensiveWords(badWord, text));




