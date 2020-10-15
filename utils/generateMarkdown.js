// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Project Title: ${data.title}

  ## Project Description: 
  ${data.description}

  ## Table of Contents: 
  ${data.toc}

  ## Installation Instructions: 
  ${data.install}

  ## Usage Instructions: 
  ${data.usage}

  ## License: 
  ![License](https://img.shields.io/badge/License-${data.license}-blue)

  ## Author(s): 
  ${data.author}

  ## Contact Email: 
  ${data.email}

  ## Github Username: 
  (www.github.com/${data.gitName})

  ## Github Repo Link: 
  (${data.link})
  
`;
}

module.exports = generateMarkdown;
