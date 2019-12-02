class SortedList {
  
  
  constructor() {
    this.items= [],
    this.length= this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort(function(a, b) {return a - b})
    this.length = this.items.length
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos]
  }

  max() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }
    this.items.sort(function(a, b) {return b - a})
    return this.items[0]
  }

  min() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }
    this.items.sort(function(a, b) {return a - b})
    return this.items[0]
  }

  sum() {
    if (this.length > 0) {
      return  this.items.reduce(myFunc)
      function myFunc(total, num) {
      return total + num;
    }
    }
    else return 0
  }

  avg() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }
    else {
      return this.sum() / this.length
    }
}

module.exports = SortedList;
