const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
  { type: "title", message: "what is the title of this application?", name: "title" },

  { type: "input", name: "description", message: "What does this application do?" },

  { type: "input", name: "install", message: "How do I install this application?" },

  { type: "input", name: "usage", message: "How do I use this application?" },

  {
    name: "license",
    type: "list",
    message: "Which license you would like to use for this application?",
    choices: [
      "Academic Free License v3.0",
      "Apache license 2.0",
      "Artistic license 2.0",
      "Boost Software License 1.0",
      "BSD 2-clause license",
      "BSD 3-clause license",
      "Creative Commons Zero v1.0 Universal",
      "Creative Commons Attribution 4.0",
      "Creative Commons Attribution Share Alike 4.0",
      "Do What The Fuck You Want To Public License",
      "Educational Community License v2.0",
      "Eclipse Public License 1.0",
      "Eclipse Public License 2.0",
      "European Union Public License 1.1",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU General Public License v3.0",
      "GNU Lesser General Public License v2.1",
      "GNU Lesser General Public License v3.0",
      "ISC",
      "LaTeX Project Public License v1.3c",
      "Microsoft Public License",
      "MIT",
      "Mozilla Public License 2.0",
      "none",
      "Open Software License 3.0",
      "SIL Open Font License 1.1",
      "University of Illinois/NCSA Open Source License",
      "The Unlicense",
      "zLib License",
    ],
  },

  { type: "confirm", name: "tableOfContents", message: "Do you want a Table of Contents?"},

  { type: "input", name: "contributing", message: "How do I contribute to this application?" },

  { type: "input", name: "testing", message: "How do I test this application?" },

  { type: "input", name: "username", message: "What is your Github username?" },

  { type: "input", name: "email", message: "What is your e-mail?" },
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
