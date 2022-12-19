// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of challenge?'
    },
    { 
        type: 'input', 
        name: 'github',
        message: 'Where is your GitHub username?'

    },
    {
      type: `input`,
      name: `description`,
      message: `What is this project about?`
    },
    {
      type: `input`,
      name: `installation`,
      message: `How is this installed?`
    }, 
    {
      type: `input`,
      name: `usage`,
      message: `How can this be used?`
    },
    {
      type: `input`,
      name: `contributing`,
      message: `How have you contributed to this application?`
    },
    {
      type: `input`, 
      name: `tests`,
      message: `How can we test this?`
    },
    {
      type: `list`,
      name: `license`,
      message: `Choose your license`,
      choices: [`Apache 2.0`, `MIT`, `GNU`, `I don't have a license`],
    },
]; // 


// TODO: Create a function to write README file
function writeToFile(fileName, data)  {
    console.log(data);
    return console.log(data);
}

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions)
  .then((data) => {fs.writeFileSync('README.md', generateMarkdown(data))})
      .then(() => console.log('Successfully wrote to README.md'))
    //  .catch((err) => console.error(err));
};

// .then(answers) => {
//   const htmlPageContent = generateMarkdown(answers);

 //fs.writeFile("index.html", htmlPageContent,(err)=>
//   err ? console.log(err) : console.log("Successfully created index.html!")
//   );
// });

// Function call to initialize app
init();


