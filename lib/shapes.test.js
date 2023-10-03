const { Shapes, Triangle, Square, Circle } = require('./shapes.js');

describe('Shapes', () => {
  test('it should be a shape', () => {
    const shape = new Shapes('Blue', 'Whitesmoke');
    expect(shape.describe()).toBe('this is a Blue shape with whitesmoke text');
  });
});

describe('Triangle', () => {
  test('it should calculate the area of the triangle accurately', () => {
    const triangle = new Triangle('Logo', 'Green', 4, 3);
    expect(triangle.triangleArea()).toBe(6);
  });
});

describe('Square', () => {
  test('it should calculate the area of the square accurately', () => {
    const square = new Square('Logo', 'Pink', 5);
    expect(square.squareArea()).toBe(25);
  });
});

describe('Circle', () => {
  test('it should calculate the area of a circle accurately', () => {
    const circle = new Circle('Logo', 'Dark Red', 3);
    expect(circle.circleArea()).toBeCloseTo(28.27, 2);
  });
});