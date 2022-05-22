//1

let student = {
    name: "Kate",
    surname: "Maisak",
    age: 30,
    course: 5,
    englishLevel: "intermediate"
};

delete student.englishLevel;
console.log(student);

//2

let book = {
    numberOfPages: 545,
    cover: true,
    isTheAuthorAlive: false,
    isBestseller: true,
    bookEditions: 20000000,
};

console.log(book.cover, book.isTheAuthorAlive, book.isBestseller);


//3

let car = {
    name: "Honda",
    color: "Black",
    doors: 4,
    horsePower: 150,
    engine: 2,
    transmission: "Automatic",
};

console.log(car);

let soldCar = {};

for (let key in car) {
    soldCar[key] = car[key];
}

console.log(soldCar);

let returnCar = Object.assign({}, car);
console.log(returnCar);

//4

//let animalObj = {
   // name: "cat",
    //legs: 4,
    //color: "black",
//}

//function showInfoAboutAnimal (obj) {
   // return toString (`This ${animalObj.color} ${animalObj.name} has ${animalObj.legs} legs`)
//}

//let result = showInfoAboutAnimal(animalObj);
//console.log(result);



//5

//let train = {
    //locomotiveLength: 25,
   // totalCoachCars: 4,
    //coachLength: 15,
//}

//function calcTrainLength (obj) {
    //return totalCoachCars[key] * coachLength[key] + locomotiveLength[key];
//}

//let result = calcTrainLength(train);
//console.log(result);

//function calcTrainLength (obj) {
   // let calc = 0;
    //for (let key in obj) {
     // calc = obj.totalCoachCars[key] * coachLength[key] + locomotiveLength[key];
    //}

    //return calc;
//}
//let result = calcTrainLength(train);
//console.log(result);

//6

let anotherStudent = {
    name: "Екатерина",
    surname: "Майсак",
    groupe: 915,
}

function showInfo() {
    console.log(`Это студент ${anotherStudent.name} ${anotherStudent.surname} из группы ${anotherStudent.groupe}`);
}
    
showInfo();


//7

function Animal(propType, propLegs, propPredator, propName) {
    this.type = propType;
    this.legs = propLegs;
    this.predator = propPredator;
    this.name = propName;
  }
  
  let animalTiger = new Animal("Tiger", 4, "Predator", "Ariel");
  
  console.log(animalTiger);


