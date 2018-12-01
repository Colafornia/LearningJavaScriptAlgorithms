function Quene () {
  var items = []

  this.equene = function (element) {
    items.push(element)
  }

  this.dequene = function () {
    return items.shift()
  }

  this.front = function () {
    return items[0]
  }

  this.isEmpty = function () {
    return items.length === 0
  }

  this.size = function () {
    return items.length
  }

  this.clear = function () {
    items = []
  }
}