class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((memo, side) => {
            return memo + side
        })
    }
}

class Triangle extends Polygon {
    get isValid() {
        const booleansArray = []
        const sidesCopy = [...this.sides]
        for(let i=0; i < 3; i++) {
            let thirdSide = sidesCopy.shift()
            let sum = sidesCopy.reduce((memo, side) => memo + side)
            booleansArray.push(sum > thirdSide)
            sidesCopy.push(thirdSide)
        }
        return booleansArray.every(boolean => boolean === true)
    }
}

class Square extends Polygon {
    get isValid() {
        return this.sides.every(side => side === this.sides[0])
    }

    get area() {
        return this.sides[0] ** 2
    }
}