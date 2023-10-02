const { Triangle, Square, Circle } = require('./shapes.js');

function buildSVG(userParams) {
  const { logo, shape, textColor, colorChoice } = userParams;

  let shapeStyle = '';
  let textAlign = '';
  let viewBox = '';
  let aspectRatio = 'xMidYMid meet';
 
  switch (shape) {
    case 'Triangle':
      const triangle = new Triangle(colorChoice, textColor, 300, 200);
        shapeStyle = triangle.getSvgParams();
      viewBox = '0 0 300 200';
      textAlign = `<text x="50%" y="35%" text-anchor="middle" dominant-baseline="middle" font-size="60" font-weight="bold" fill="${textColor}">${logo}</text>`;
      break;
    case 'Circle':
      const circle = new Circle(colorChoice, textColor, 200);
        shapeStyle = circle.getSvgParams();
      viewBox = '0 0 400 400';
      textAlign = `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="140" font-weight="bold" fill="${textColor}">${logo}</text>`;
      break;
    case 'Square':
      const square = new Square(colorChoice, textColor, 300);
        shapeStyle = square.getSvgParams();
      viewBox = '0 0 300 300';
      textAlign = `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="104" font-weight="bold" fill="${textColor}">${logo}</text>`;
      break;
    default:
      throw new Error('Invalid shape selected');
  }

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="${viewBox}" preserveAspectRatio="${aspectRatio}">
  ${shapeStyle}
  ${textAlign}
  </svg>`;

  return svg;
}

module.exports = buildSVG;