// Your code here
class Polygon {
  constructor(sides){
    this.sides = sides;
  }
  get countSides(){
    return this.sides.length;
  }
  get perimeter(){
    return this.sides.reduce((sum,side) => sum + side,0);
  }
}

class Triangle extends Polygon {
  get isValid(){
    let s = this.sides.sort();
    return s[0] + s[1] > s[2];

  }
}

class Square extends Polygon {

  get area(){
    return this.sides[0] * this.sides[1];
  }
  get isValid(){
    if(!Array.isArray(this.sides) || this.sides.length !== 4){
      return false;
    }
    for(const i of this.sides){

      if(i !== this.sides[0]) {
        return false;
      }
    }
    return true;
  }
}
