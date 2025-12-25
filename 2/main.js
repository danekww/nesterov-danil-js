// =======================================
// Задание 1. Класс Boat
// =======================================

class Boat {
  constructor(color, material, maxSpeed) {
    this.color = color;
    this.material = material;
    this.maxSpeed = maxSpeed;
  }

  sail() {
    console.log("Плывём по волнам!");
  }
}

// проверка Boat
const boat = new Boat("белый", "дерево", 40);
boat.sail();


// =======================================
// Задание 2. Transport -> Bus
// =======================================

class Transport {
  constructor(speed) {
    this.speed = speed;
  }
}

class Bus extends Transport {
  constructor(speed, passengerCount) {
    super(speed);
    this.passengerCount = passengerCount;
  }

  drive() {
    console.log(`Едем по маршруту с ${this.passengerCount} пассажирами`);
  }
}

// проверка Bus
const bus = new Bus(60, 25);
bus.drive();


// =======================================
// Задание 3. AirTransport -> Plane
// =======================================

class AirTransport {
  startEngine() {
    console.log("Двигатель запускается...");
  }
}

class Plane extends AirTransport {
  startEngine() {
    console.log("Турбины запускаются...");
  }
}

// проверка Plane
const plane = new Plane();
plane.startEngine();
