interface Figure {
  area(): number;
}

class Square implements Figure {
  sideA: number;

  constructor(sideA: number) {
    this.sideA = sideA
  }

  area(): number {
    return this.sideA * this.sideA;
  }
}

class Rectangle implements Figure {
  sideA: number;
  sideB: number;

  constructor(sideA: number, sideB: number) {
    this.sideA = sideA
    this.sideB = sideB
  }

  area(): number {
    return this.sideA * this.sideB;
  }
}

const squ = new Square(10)
console.log(squ.area())

const rec = new Rectangle(2, 5)
console.log(rec.area())
