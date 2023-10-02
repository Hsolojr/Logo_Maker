const fs = require('fs');
const inquirer = require('inquirer');
const { createLogo, generateSVG } = require('./lib/builder.js'); // You'll need to implement the logo generation logic in a separate file

async function promptUser() {
  try {
    const userInput = await inquirer.prompt([
      {
        name: 'text',
        message: 'Enter up to three characters:',
        validate: (input) => input.length <= 3,
      },
      {
        name: 'textColor',
        message: 'Enter text color (keyword or hex):',
      },
      {
        name: 'shape',
        type: 'list',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        name: 'shapeColor',
        message: 'Enter shape color (keyword or hex):',
      },
    ]);

    // Call your logo generation function with userInput
    const svgContent = createLogo(userInput);

    // Save the generated SVG content to a file
    fs.writeFileSync('logo.svg', svgContent);

    console.log('Generated logo.svg');

    // Generate a 300x200 PNG from the SVG (optional)
    await generateSVG('logo.svg', 'logo.png', 300, 200);
    
    console.log('Generated logo.png');
  } catch (error) {
    console.error('Error:', error);
  }
}

promptUser();
