// array of questions for user
const generateMarkdown = require("./utils/generateMarkdown")
const questions = [

];


// function to write README file
function writeToFile(fileName, data) {
    generateMarkdown(data);
}

// function to initialize program
function init() {
    //ask the inquirer stuff
    //one question about file name
    // writeToFile(saidFileName, dataFromQuestions)
}

// function call to initialize program
init();
