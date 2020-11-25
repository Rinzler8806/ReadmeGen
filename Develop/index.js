// At a minimum, your project README needs a title and a short description explaining the what, why, and how. What was your motivation? 
// Why did you build this project? (Note: The answer is not "Because it was a homework assignment.") What problem does it solve? 
// What did you learn? What makes your project stand out? If your project has a lot of features, consider adding a heading called "Features" and listing them here.
// ## Installation

// What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

// ## Usage 

// Provide instructions and examples for use. Include screenshots as needed. 

// ## Credits

// List your collaborators, if any, with links to their GitHub profiles.

// If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

// If you followed tutorials, include links to those here as well.

// ## License

// The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)

// ---

// 🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

// ## Badges

// ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

// Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

// ## Contributing

// If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

// ## Tests
const fs = require('fs')
const inquirer = require('inquirer')
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown')

// const writeFileAsync = path.promisify(fs.writeFile);

function promptUser() {
inquirer.prompt([
    {
        name:"title",
        type:"input",
        message: "What's the title of your project?"
    },
    {
        name:"description",
        type:"input",
        message: "Please provide a short description explaining the what, why, and how. What was your motivation? What did you learn? What makes your project stand out?"
    },
    {
        name:"Installation",
        type:"input",
        message: "What are the steps required to install your project?"
    },
    {
        name:"useage",
        type:"input",
        message: "What are some instructions and examples for use?"
    },
    {
        name:"github",
        type:"input",
        message: "What is your github URL?"
    },
    {
        name:"license",
        type:"input",
        message: "Please enter your license agreement."
    },
    {
        name:"image",
        type:"input",
        message: "Please provide a link to an image for your readme."
    }
]).then((resp) => {
    const fileName = `readme.md`

    fs.writeFile(fileName, generateMarkdown(resp), (err) =>
    err ? console.log(err) : console.log('Complete') )
})}
// Go the extra mile and write tests for your application. Then provide examples on how to run them.
// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
// init();

promptUser();