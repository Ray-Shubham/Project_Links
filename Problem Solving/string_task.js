// 1) Write a program to convert the lower case vowels to upper and viceversa.

// input: I am Good
// output: I Am GOOd

function convertVowelCase(input) {
    const vowels = 'aeiouAEIOU';
    return input.split('').map(char => {
      if (vowels.includes(char)) {
        return char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
      }
      return char;
    }).join('');
  }
  
  // Test the function
  console.log(convertVowelCase("I am Good")); 


// 2) Write a program to print one vowel, followed by consnant and soon.
// input: I am Good
// output: ImaGodo

// input: Hello World
// output: eHololWorld

function alternateVowelsConsonants(input) {
    const vowels = 'aeiouAEIOU';
    let vowelQueue = [];
    let consonantQueue = [];
    
    // Separate vowels and consonants
    input.split('').forEach(char => {
      if (char !== ' ') {
        vowels.includes(char) ? vowelQueue.push(char) : consonantQueue.push(char);
      }
    });
    
    // Alternate vowels and consonants
    let result = '';
    while (vowelQueue.length > 0 || consonantQueue.length > 0) {
      if (vowelQueue.length > 0) result += vowelQueue.shift();
      if (consonantQueue.length > 0) result += consonantQueue.shift();
    }
    
    return result;
  }
  
  // Test the function
  console.log(alternateVowelsConsonants("I am Good")); // Output: ImaGodo
  console.log(alternateVowelsConsonants("Hello World"));


// 3) Write a program to print the vowels followed consnants in every word.

// input: Hello World
// output: eoHll oWrld


function groupVowelsConsonants(input) {
    const vowels = 'aeiouAEIOU';
    
    return input.split(' ').map(word => {
      let wordVowels = '';
      let wordConsonants = '';
      
      word.split('').forEach(char => {
        vowels.includes(char) ? wordVowels += char : wordConsonants += char;
      });
      
      return wordVowels + wordConsonants;
    }).join(' ');
  }
  
  // Test the function
  console.log(groupVowelsConsonants("Hello World")); // Output: eoHll oWrld
