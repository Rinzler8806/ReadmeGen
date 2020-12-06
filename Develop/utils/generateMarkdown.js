function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description},

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)

## Installation

${data.Installation}

## Usage

${data.useage}

## Github

${data.github}

## License

${data.license}

![](${data.image})
`;
}

module.exports = generateMarkdown;
