const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const titleCasedTutorials = tutorials.map(function (tutStr){

    return capitalizedTutorials(tutStr);

  })
  return titleCasedTutorials;
}

function capitalizedTutorials(tutStr) {
  // return tutString[0].toUpperCase() + tutString.slice(1).toLowerCase()
  const answer = [];
  const strArr = tutStr.split(' ');
  for(let element of strArr) {
    answer.push(element[0].toUpperCase() + element.slice(1));
  }
  return answer.join(' ')
}

// console.log(capitalizedTutorials("what is JSNOP"))