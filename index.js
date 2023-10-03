const fs = require('fs').promises; // Importing the 'fs' module with promises support
const inquirer = require('inquirer'); // Importing the 'inquirer' module for user prompts
const buildSVG = require('./lib/builder.js'); // Importing the 'buildSVG' function from the './lib/builder.js' file

async function generateLogo() {
  try {
    // Prompt the user for input using 'inquirer'
    const logoParams = await inquirer.prompt([
      {
        type: 'input',
        name: 'logo',
        message: 'Enter up to three characters for your logo:',
        validate: (input) => input.length <= 3,
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['Triangle', 'Circle', 'Square'],
      },
      {
        type: 'list',
        name: 'textColor',
        message: 'Choose your text color:',
        choices: ['Black', 'White', 'Blue', 'Grey', 'Custom'],
       
      },
      {
        type: 'input',
        name: 'customTextColor',
        message:
          'Enter your custom text color (Color name or hex):',
        
      },
      {
        type: 'list',
        name: 'colorChoice',
        message: 'Pick the color you want the shape to be:',
        choices: ['Black', 'Red', 'green', 'Pink', 'Custom'],
      
      },
      {
        type: 'input',
        name: 'customShapeColor',
        message:
          'Enter your custom shape color (Color name or hex):',
       
      },
    ]);

    // Destructure user input into individual variables
    const {
      logo,
      shape,
      textColor,
      customTextColor,
      colorChoice,
      customShapeColor,
    } = logoParams;

    // Determine the text and shape color based on user input
    const textColorChoice = customTextColor || textColor;
    const shapeColorChoice = customShapeColor || colorChoice;

    // Generate the SVG logo using the 'buildSVG' function
    const svgCreator = buildSVG({
      logo,
      shape,
      textColor: textColorChoice,
      colorChoice: shapeColorChoice,
    });

    // Write the generated SVG content to a file
    await fs.writeFile('./Result/logo.svg', svgCreator);
    console.log('Generated logo.svg');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Call the 'generateLogo' function to start logo generation
generateLogo();
