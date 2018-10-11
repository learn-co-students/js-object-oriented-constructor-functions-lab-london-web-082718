
let obj = {};


function counter(obj, thingToCount) {

  if (obj ==== undefined) { let obj = {} }

  obj[thingToCount] = obj[thingToCount] || 1

}


class FruitList {
  constructor() {
    this.fruits = [{name: 'Apple', count: 1}]
    this.fruitHash = {}
  }

  findOrCreateFruit(fruit) {
    let foundFruit = this.fruits.find(fruitItem => fruitItem.name === fruit.name)

    if (!foundFruit) {
      foundFruit = { name: fruit.name, count: 0 }
      this.fruits.push(foundFruit)
    }

    foundFruit.count++
    return this.fruits
  }

  findOrCreateFruitHash(fruitName) {
    this.fruitHash[fruitName] = this.fruitHash[fruitName] + 1 || 1
    return this.fruitHash
  }

}