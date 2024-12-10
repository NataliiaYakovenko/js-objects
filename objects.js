/*1. Створити об’єкт user з наступними властивостями:
ім'я, 
прізвище, 
електронна адреса, 
password,
номер телефона,
адреса (є рядком або *об'єктом з властивостями місто, вулиця, дім, квартира) ; 
*/
const user = {
  firstName: "Nataliia",
  lastName: "Yakovenko",
  email: "yakovenkonatali999@gmail.com",
  password: "<fhctkjyf01",
  numberPhone: "+38066-286-51-35",
  address: {
    city: "Zaporizhye",
    street: "Borodinska",
    house: 2,
    apartment: 33,
  },
};
console.log(user);
//--------------------------------------------------------------------------

/*2. Написати функцію, яка приймає об’єкт юзера 
і виводить вітання типу “Доброго дня, 
(ім’я_юзера) (прізвище юзера)”
 */

//Варіант1
const user1 = {
  firstName: "Nataliia",
  lastName: "Yakovenko",
  greeting: function () {
    return `Доброго дня, ${this.firstName} ${this.lastName}`;
  },
};
console.log(user1.greeting());

//Варіант2
function greetUser(user2) {
  console.log(`Доброго дня, ${user2.firstName} ${user2.lastName}`);
}
const user2 = {
  firstName: "Nataliia",
  lastName: "Yakovenko",
};
greetUser(user2);
//----------------------------------------------------------------------------

/*3. Написати функцію, яка приймає об’єкт і виводить в консоль 
  всі його властивості (за допомогою циклу for..in)
   */

//Варіант1
const user3 = {
  firstName: "Nataliia",
  lastName: "Yakovenko",
  email: "yakovenkonatali999@gmail.com",
  password: "<fhctkjyf01",
  numberPhone: "+38066-286-51-35",
  address: {
    city: "Zaporizhye",
    street: "Borodinska",
    house: 2,
    apartment: 33,
  },
};

for (let key in user3) {
  console.log(`${key} = ${user3[key]}`);
}
for (let key in user3.address) {
  console.log(`address.${key} = ${user3.address[key]}`);
}

//Варіант2
function displayValueObject() {
  for (let key in user4) {
    console.log(`${key} = ${user4[key]}`);
  }
  for (let key in user4.address) {
    console.log(`address.${key} = ${user4.address[key]}`);
  }
}
const user4 = {
  firstName: "Nataliia",
  lastName: "Yakovenko",
  email: "yakovenkonatali999@gmail.com",
  password: "<fhctkjyf01",
  numberPhone: "+38066-286-51-35",
  address: {
    city: "Zaporizhye",
    street: "Borodinska",
    house: 2,
    apartment: 33,
  },
};
displayValueObject();
//----------------------------------------------------------------------------

/*
4. Створити об’єкт car (машина) з властивостями:
колір
модель
марка
об’єм двигуна
місткість (можлива кількість пасажирів)
поточна швидкість (speed)
максимальна можлива швидкість (maxSpeed)
та методами:
- accelerate (збільшення швидкості): метод приймає кількість кілометрів/годину
(ціле число) та додає до поточної швидкості (speed),
але результат не має перевищувати максимально можливої швидкості 
для цієї машини
- deaccelerate (зменшення швидкості): метод приймає ціле число 
(кількість кілометрів на годину) і зменшує поточну швидкість (speed) на вказану,
 але результат не може бути від’ємним
- stop (зупинка) - метод нічого не приймає, 
при виклику встановлює поточну швидкість (speed) рівною 0
 */
const car = {
  color: "blue",
  brand: "Audi",
  model: "Q7",
  engineVolume: 3000,
  passengers: 5,
  speed: 100,
  maxSpeed: 216,
  accelerate: function (increaseSpeed) {
    this.speed = this.speed + increaseSpeed;
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
    return this.speed;
  },
  deaccelerate: function (decreaseSpeed) {
    this.speed = this.speed - decreaseSpeed;
    if (this.speed < 0) {
      this.speed = 0;
    }
    return this.speed;
  },
  stop: function () {
    this.speed = 0;
    return this.speed;
  },
};
console.log(car);
//--------------------------------------------------------------------

/*
5. На основі об’єкта з завдання №4 розробити функцію-конструктор 
для масового створення таких об’єктів за переданими параметрами.
 В якості перевірки створити декілька екземплярів таких об’єктів 
 з різними властивостями
 */

function Car(color, brand, model, engineVolume, passengers, speed, maxSpeed) {
  this.color = color;
  this.brand = brand;
  this.model = model;
  this.engineVolume = engineVolume;
  this.passengers = passengers;
  this.speed = speed;
  this.maxSpeed = maxSpeed;
  this.accelerate = function (increaseSpeed) {
    this.speed = this.speed + increaseSpeed;
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
    return this.speed;
  };
  this.deaccelerate = function (decreaseSpeed) {
    this.speed = this.speed - decreaseSpeed;
    if (this.speed < 0) {
      this.speed = 0;
    }
    return this.speed;
  };
  this.stop = function () {
    this.speed = 0;
    return this.speed;
  };
}

const car1 = new Car("white", "Suzuki", "Swift", 1900, 4, 90, 160);
console.log(car1);
const car2 = new Car("black", "Toyota", "Rav4", 2500, 5, 120, 190);
console.log(car2);
const car3 = new Car("green", "Reno", "Duster", 1600, 4, 100, 180);
console.log(car3);
