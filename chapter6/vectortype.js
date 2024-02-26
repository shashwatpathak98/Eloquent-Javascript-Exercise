// My Solution

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(otherVector) {
    return new Vec(this.x + otherVector.x, this.y + otherVector.y);
  }

  minus(otherVector) {
    return new Vec(this.x - otherVector.x, this.y - otherVector.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

let vecObj = new Vec(1, 2);
let vecObjSecond = new Vec(2, 3);
console.log(vecObj.plus(vecObjSecond));
// → Vec{x: 3, y: 5}
console.log(vecObj.minus(vecObjSecond));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

// Author's Solution

class Vec2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }

  minus(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

console.log(new Vec2(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec2(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec2(3, 4).length);
// → 5
