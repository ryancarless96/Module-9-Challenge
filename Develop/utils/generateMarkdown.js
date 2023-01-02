 //Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != "None") {
    return "![License Badge] (https://shields.io/badge/license-" + license + "-green)";
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  switch (license) {
    case "MIT":
      licenseLink = "https://mit-license.org/";
      break;
    case "Apache 2.0":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html"
      break;
    case "GNU":
      licenseLink = "https://www.gnu.org/gnu/linux-and-gnu.html#:~:text=If%20you%20want%20to%20make%20a%20link%20on,https%3A%2F%2Ffoldoc.org%2Flinux%20is%20a%20good%20URL%20to%20use.%20Postscripts";
      break;
    default:
      licenseLink = "";
      break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license != "None") {
    licenseSection += "## License/n"
    licenseSection += "Please see" + renderLicenseLink(license) + "to get detailed info for this license/n";
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)
${data.installation}

* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
${data.contributing}

* [Tests](#tests)
${data.test}

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}
  
## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${
    data.email
  }. You can find more of my work at [${data.github}](https://github.com/${
    data.github
  }/).

`;
}

module.exports = generateMarkdown;
