class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color);
    }

    svg() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`; 
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    svg() {
        const height = 100 * (Math.sqrt(3)/2);
        return `<polygon points="150,${100-height/2} 125,${100+height/2} 175,${100+height/2}" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor(color) {
        super(color);
    }

    svg() {
        return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Triangle, Square};