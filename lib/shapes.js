
class Shapes {
    constructor(colorChoice, textColor) {
      this.textColor = textColor;
      this.colorChoice = colorChoice;
    }
  
    describe() {
      return `this is a ${this.colorChoice.toLowerCase()} shape with ${this.textColor.toLowerCase()} text`;
    }
    getSvgParams() {
  
    }
  }
  
  class Triangle extends Shapes {
    constructor(colorChoice, textColor, base, height) {
      super(colorChoice, textColor);
      this.base = base;
      this.height = height;
    }
  
    triangleArea() {
      return 0.5 * (this.base * this.height);
    }
    getSvgParams() {
      return `<polygon points="0,0 ${this.base}, 0 ${this.base / 2}, ${this.height}" stroke="${this.textColor}" stroke-width="4px" fill="${this.colorChoice}" />`;
    }
  }
  
  class Square extends Shapes {
    constructor(colorChoice, textColor, side) {
      super(colorChoice, textColor);
      this.side = side;
    }
    squareArea() {
      return (this.side * this.side);
    }
    getSvgParams() {
      return `<rect x="0" y="0" width="${this.side}" height="${this.side}" stroke="${this.textColor}" stroke-width="4px" fill="${this.colorChoice}" />`;
    }
  }
  
  class Circle extends Shapes {
    constructor(colorChoice, textColor, radius) {
      super(colorChoice, textColor);
      this.radius = radius;
    }
    circleArea() {
      return Math.PI * (this.radius * this.radius);
    }
    getSvgParams() {
      return `<circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" stroke="${this.textColor}" stroke-width="4px" fill="${this.colorChoice}" />`;
    }
  }
  
  module.exports = { Shapes, Triangle, Square, Circle };