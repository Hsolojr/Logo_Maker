const { Triangle, Square, Circle } = require('./shapes.js');

function buildSVG(userParams) {
  // Destructure userParams object to get the necessary values
  const { logo, shape, textColor, colorChoice } = userParams;

  // Create a map of shapes with their associated settings
  const shapeMap = {
    Triangle: { className: Triangle, viewBox: '0 0 300 200', textX: '50%', textY: '35%', fontSize: 60 },
    Circle: { className: Circle, viewBox: '0 0 400 400', textX: '50%', textY: '50%', fontSize: 140 },
    Square: { className: Square, viewBox: '0 0 300 300', textX: '50%', textY: '50%', fontSize: 104 },
  };

  // Retrieve the settings for the selected shape
  const selectedShape = shapeMap[shape];

  // Handle an invalid shape selection
  if (!selectedShape) {
    throw new Error('Invalid shape selected');
  }

  // Extract the selected shape's className, viewBox, text position, and font size
  const { className, viewBox, textX, textY, fontSize } = selectedShape;

  // Create a new shape object based on the selected className
  const shapeObj = new className(colorChoice, textColor, ...className === Triangle ? [300, 200] : [200]);
  
  // Get the SVG parameters for the shape
  const shapeStyle = shapeObj.getSvgParams();

  // Generate the SVG markup
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="${viewBox}" preserveAspectRatio="xMidYMid meet">
      ${shapeStyle}
      <text x="${textX}" y="${textY}" text-anchor="middle" dominant-baseline="middle" font-size="${fontSize}" font-weight="bold" fill="${textColor}">${logo}</text>
    </svg>`;

  return svg;
}

module.exports = buildSVG;

