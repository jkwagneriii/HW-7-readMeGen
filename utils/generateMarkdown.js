// function to generate markdown for README
function generateMarkdown(data) {
  return `
# Title Goes Here

## Summary
${data.description}

## Usage
${data.usage}
  

`;
}

module.exports = generateMarkdown;
