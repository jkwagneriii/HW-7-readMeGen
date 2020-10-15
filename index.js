const generateMarkdown = require("./utils/generateMarkdown")
// array of questions for user
// type: (String) Type of the prompt. Defaults: input - Possible values: input, number, confirm, list, rawlist, expand, checkbox, password, editor
// name: (String) The name to use when storing the answer in the answers hash
// message: (String|Function) The question to print. If defined as a function, the first parameter will be the current inquirer session answers. Defaults to the value of name (followed by a colon).
//For a good ReadME file we need a project title, a description, a table of contents, installation instructions, how to use the project, a badge, a license (checkbox?), project author(s), contact emails, and a link to the github repo.
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of this project?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of the poject."
    },
    {
        type: "input",
        name: "toc",
        message: "Provide a table of contents. When writing, seperate each name by commas."
    },
    {
        type: "input",
        name: "install",
        message: "Please provide any necessary installation instructions."
    },
    {
        type: "input",
        name: "usage",
        message: "What will this project be used for?"
    },
    {
        type: "",
        name: "",
        message: ""
    },
    {
        type: "",
        name: "",
        message: ""
    },
    {
        type: "",
        name: "",
        message: ""
    },
    {
        type: "",
        name: "",
        message: ""
    },
    {
        type: "",
        name: "",
        message: ""
    },
    {
        type: "",
        name: "",
        message: ""
    },

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
