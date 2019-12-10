class Vehicle {
  constructor(name, fuel) {
    console.log(`I'm ${name}`);
    this.x = 0;
    this.y = 0;
    this.step = 1;
    this.name = name;
    this.fuel = fuel;
  }
  getCoords() {
    return `(${this.x}, ${this.y})`;
  }
  getFuel() {
    return `The fuel is ${this.fuel}L`;
  }
  useFuel() {
    this.fuel = this.fuel - this.step;
  }
  moveForward() {
    this.useFuel();
    this.x = this.x + this.step;
    return `Forward: ${this.getCoords()} ${this.getFuel()}`;
  }
  moveBack() {
    this.useFuel();
    this.x = this.x - this.step;
    return `Back: ${this.getCoords()} ${this.getFuel()}`;
  }
}
const v = new Vehicle("Tractor", 100);
console.log(v.moveForward()); // '(1, 0) The fuel is 99L'
console.log(v.moveBack()); // '(0, 0) The fuel is 98L'

class Car extends Vehicle {
  constructor(name, fuel) {
    super(name, fuel);
    this.nitro = false;
    this.directions = {
      right: "Right",
      left: "Left"
    };
  }
  checkFuel() {
    return !(this.fuel < this.step);
  }
  isNitro() {
    this.nitro = true;
    this.step = 2;
    return "nitro is true";
  }
  offNitro() {
    this.nitro = false;
    this.step = 1;
    return "nitro is false";
  }

  moveForCar(direction) {
    if (!this.checkFuel()) return "Fuel is over, u can't move";
    this.useFuel();
    if (direction === this.directions.left) {
      this.y = this.y - this.step;
    }
    if (direction === this.directions.right) {
      this.y = this.y + this.step;
    }

    return `${direction}: ${this.getCoords()} ${this.getFuel()}`;
  }

  moveLeft() {
    return this.moveForCar(this.directions.left);
  }
  moveRight() {
    return this.moveForCar(this.directions.right);
  }

  moveForward() {
    if (!this.checkFuel()) return "Fuel is over, u can't move";
    return super.moveForward();
  }

  moveBack() {
    if (!this.checkFuel()) return "Fuel is over, u can't move";
    return super.moveBack();
  }
}
const c = new Car("ВАЗ 6", 58);
console.log(c.moveRight());
console.log(c.moveRight());
console.log(c.isNitro());
console.log(c.moveLeft());
console.log(c.moveLeft());
console.log(c.moveLeft());
console.log(c.offNitro());
console.log(c.moveLeft());
console.log(c.moveForward());
