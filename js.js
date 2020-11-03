let Apple = function () {
    this.weight = 10;

    this.decreaseWeight = function () {
        if (this.weight > 0) this.weight--;
    }

    this.isEmpty = function () {
        if (this.weight > 0) return false;
        else return false;
    }

    this.getWeight = function () {
        return this.weight;
    }
} //Class Apple
let Person = function (name, genderBool, weight) {
    this.name = name;
    this.gender = genderBool;
    this.weight = weight;

    this.getApple = function (apple) {
        this.apple = apple;
    }
    this.isMale = function () {
        return this.gender;
    }
    this.setGender = function (bool) {
        this.gender = bool;
    }
    this.checkApple = function (apple) {
        return this.apple.getWeight();
    }
    this.eatApple = function () {
        this.apple.decreaseWeight();
        this.weight++;
    }
    this.getName = function () {
        return this.name;
    }
    this.setName = function (name) {
        this.name = name;
    }
    this.getWeight = function () {
        return this.weight;
    }
    this.setWeight = function (weight) {
        this.weight = weight;
    }
}//Class Person
let apple = new Apple();
let adam = new Person("Adam", true, 80);
let eva = new Person("Eva", false, 50);
adam.getApple(apple);
adam.eatApple();
console.log(apple.weight);
console.log(adam.getWeight());