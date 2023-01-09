const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
  { type: "input", message: "What is the title of this application?", name: "title" },

  { type: "input", message: "What does this application do?", name: "description" },

  { type: "input", message: "How do I install this application?", name: "install" },

  { type: "input", message: "How do I use this application?", name: "usage" },

  {
    type: "list",
    message: "Which license you would like to use for this application?",
    choices: ["none", "MIT", "Bower", "NPM", "GitLab"],
    name: "license",
  },

  { type: "input", message: "How do I contribute to this application?", name: "contributing" },

  { type: "input", message: "How do I test this application?", name: "testing" },

  { type: "input", message: "What is your Github username?", name: "username" },

  { type: "input", message: "What is your e-mail?", name: "email" },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const markdownData = generateMarkdown(data);
  return fs.writeFileSync(fileName, markdownData);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    writeToFile("README.md", response);
  });
}

// Function call to initialize app
init();

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
