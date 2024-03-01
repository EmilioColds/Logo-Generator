const {Circle, Triangle, Square} = require('./shapes');

describe('Shape testing', () => {
    test('Circle generator', () => {
        const circle = new Circle('green');
        expect(circle.svg()).toContain('circle');
        expect(circle.svg()).toContain('fill="green"');
    });

    test('Triangle generator', () => {
        const triangle = new Triangle('green');
        expect(triangle.svg()).toContain('polygon');
        expect(triangle.svg()).toContain('fill="green"');
        expect(triangle.svg()).toContain('points="150,50 100,150 200,150"');
    });

    test('Square generator', () => {
        const square = new Square('green');
        expect(square.svg()).toContain('rect');
        expect(square.svg()).toContain('fill="green"');
        expect(square.svg()).toContain('x="100"');
        expect(square.svg()).toContain('width="100"');
        expect(square.svg()).toContain('height="100"');
    });
});