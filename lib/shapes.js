// Base class for all shapes
class Shapes {
  constructor(colorChoice, textColor) {
    this.textColor = textColor;
    this.colorChoice = colorChoice;
  }

  // A method to describe the shape and its colors
  describe() {
    return `This is a ${this.colorChoice.toLowerCase()} shape with ${this.textColor.toLowerCase()} text`;
  }

  // Abstract method for getting SVG parameters, to be implemented by subclasses
  getSvgParams() {
    throw new Error('Subclasses must implement getSvgParams');
  }
}

// Subclass for Triangle
class Triangle extends Shapes {
  constructor(colorChoice, textColor, base, height) {
    super(colorChoice, textColor);
    this.base = base;
    this.height = height;
  }

  // Calculate the area of the triangle
  triangleArea() {
    return 0.5 * (this.base * this.height);
  }

  // Generate SVG parameters for a triangle
  getSvgParams() {
    return `<polygon points="0,0 ${this.base},0 ${this.base/2},${this.height}" stroke="${this.textColor}" stroke-width="4px" fill="${this.colorChoice}" />`;
  }
}

// Subclass for Square
class Square extends Shapes {
  constructor(colorChoice, textColor, side) {
    super(colorChoice, textColor);
    this.side = side;
  }

  // Calculate the area of the square
  squareArea() {
    return this.side * this.side;
  }

  // Generate SVG parameters for a square
  getSvgParams() {
    return `<rect x="0" y="0" width="${this.side}" height="${this.side}" stroke="${this.textColor}" stroke-width="4px" fill="${this.colorChoice}" />`;
  }
}

// Subclass for Circle
class Circle extends Shapes {
  constructor(colorChoice, textColor, radius) {
    super(colorChoice, textColor);
    this.radius = radius;
  }

  // Calculate the area of the circle
  circleArea() {
    return Math.PI * (this.radius * this.radius);
  }

  // Generate SVG parameters for a circle
  getSvgParams() {
    return `<circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" stroke="${this.textColor}" stroke-width="4px" fill="${this.colorChoice}" />`;
  }
}

// Export the base class and subclasses
module.exports = { Shapes, Triangle, Square, Circle };
