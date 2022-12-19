const fs = require("fs");
const inquirer = require("inquirer");
const index = require("../index.js");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (license != "None") {
    badge = "![License Badge] (https://shields.io/badge/license-" + license + "-green)"
  }
  return badge;
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
function generateMarkdown({
  name, title, github, description, installation, usage, contributing, tests, license
}) {
  const sections = ["Name", "Title", "GitHub", "Description", "Installation", "Usage", "Contributing", "Tests", "License"];
  return `# ${title}

## ${name}
Write down your name.

## ${title}
Write down the title of your application.

## ${github}
-Provide a link of your GitHub username.

## ${description}
Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
- What was your motivation?
- Why did you build this project?
- What problem does it solve?
- What did you learn? 

## ${installation}
What are the steps required to install your project? Provide a step-by-styep description of how to get the development environment running.

## ${usage}
Provide instructions and examples for use. Include screenshots as needed.

## ${contributing}
Write down the contributors of this application.

## ${tests}
Go the extra mile and write tests for your application. Then provide examples on how to run them here.

## ${license}
Place a license in this application.
`;
}

module.exports = generateMarkdown;
