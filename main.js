// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**

// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date());

const displayDate = () => {
  const currentDate = new Date();

  document.getElementById("display-element").innerHTML = currentDate;
};

// Write a JavaScript program to convert a number to a string.
const numberToString = (num) => {
  return num.toString();
};

const stringConversion = () => {
  const numInput = document.getElementById("choosenumber").value;
  const convertStr = numberToString(numInput);
  document.getElementById("visiblenumtostring").innerHTML = typeof convertStr;
};

// Write a JavaScript program to convert a string to the number.

const stringToNum = (string) => {
  return Number(string);
};

const numberConversion = () => {
  const strInput = document.getElementById("inputString").value;
  const convertNum = stringToNum(strInput);
  document.getElementById("stringtonum").innerHTML = typeof convertNum;
};

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// * Boolean
// * Null
// * Undefined
// * Number
// * NaN
// * String

// this will let you find the data type using a console.
const findDataType = (x) => {
  return typeof x;
};

// this will let you find data types using the DOM
const printDataType = (x) => {
  const value = document.getElementById("inputData").value;
  const finalData = document.getElementById("visibledata");

  if (value =='undefined' || value == '') {
    finalData.innerHTML = 'undefined'
  } else if (value === 'true'|| value === 'false'){
    finalData.innerHTML = typeof true
  } else if (value == 'null' || value == 'Null') {
    finalData.innerHTML = 'null'
  } else if (isNaN(value) === true) {
    finalData.innerHTML = typeof 'String'
  } else if (!isNaN(value === false)) {
    finalData.innerHTML = typeof 3
  } else {
    finalData.innerHTML = 'NaN'
  }

};

// Write a JavaScript program that adds 2 numbers together.

const simpleAdd = () => {
  const firstAdd = parseInt(document.getElementById("numOne").value);
  const secAdd = parseInt(document.getElementById("numTwo").value);
  const sum = firstAdd + secAdd;

  document.getElementById("solution").innerHTML = sum;
};

// Write a JavaScript program that runs only when 2 things are true.


const paramTrue = () => {
  const truthOne = document.getElementById("truthOne").value;
  const truthTwo = document.getElementById("truthTwo").value;
  const truthsFound = document.getElementById("findtruths")

  if (truthOne == "true" && truthTwo == "true") {
    truthsFound.innerHTML = true;
  } else {
    truthsFound.innerHTML = "Find two truths.";
  }
};

// Write a JavaScript program that runs when 1 of 2 things are true.

const halfTrue = (x, y) => {
  const truthOneB = document.getElementById("truthOneB").value
  const truthTwoB = document.getElementById("truthTwoB").value
  const halfTrueData = document.getElementById("justOneTruthShown")

  if (truthOneB == "true" || truthTwoB == "true") {
    halfTrueData.innerHTML = true;
  } else {
    halfTrueData.innerHTML ="Please make one drop down true";
  }
};

// Write a JavaScript program that runs when both things are not true.

const paramFalse = (x, y) => {
  const falseOne = document.getElementById("falseOne").value
  const falseTwo = document.getElementById("falseTwo").value
  const falseFound = document.getElementById("findFalse")

  if (falseOne == "false" && falseTwo == "false") {
    falseFound.innerHTML = false
  } else {
    falseFound.innerHTML = "Find two false"
  }
};

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey,
// 2. reload VS Code,
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html`
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.

// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
