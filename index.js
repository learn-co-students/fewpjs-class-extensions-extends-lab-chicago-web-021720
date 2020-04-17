class Polygon {
    constructor(array) {
        this.sides = array;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((a,b)=>a+b);
    }
}

class Triangle extends Polygon {
    get isValid() {
        let sortedSides = this.sides.sort();
        return sortedSides[0] + sortedSides[1] > sortedSides[2];
    }
}

class Square extends Polygon {
    get isValid() {
        for (let i = 0; i < 3; i++) {
            if (this.sides[i] !== this.sides[i+1]) {
                return false;
            }
        }
        return true;
    }

    get area() {
        return this.sides[0] ** 2;
    }
}
