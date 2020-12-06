const fs = require('fs')
const inquirer = require('inquirer')
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown')

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

function writeToFile(fileName, data) {
}

function init() {

}

promptUser();