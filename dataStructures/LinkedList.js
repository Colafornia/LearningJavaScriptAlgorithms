function LinkedList () {
  var Node = function (element) {
    this.element = element
    this.next = null
  }
  var length = 0
  var head = null

  this.append = function (element) {
    var node = new Node(element)
    var current
    if (!head) {
      head = node
    } else {
      current = head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    lenth++
  }

  this.insert = function (position, element) {
    if (position > -1 && position < length) {
      var node = new Node(element)
      var current = head
      var previous
      var index = 0
      if (position === 0) {
        node.next = current
        head = node
      } else {
        while (index < position) {
          previous = current
          current = current.next
          index++
        }
        previous.next = node
        node.next = current
      }
      length++
      return true
    } else {
      return null
    }
  }

  this.removeAt = function (position) {
    if (position > -1 && position < length) {
       var current = head
       var previous
       var index = 0
       if (position === 0) {
         head = current.next
       } else {
        while (index < position) {
          previous = current
          current = current.next
          index++
        }
        previous.next = current.next
       }
       length--
       return current.element
    } else {
      return null
    }
  }

  this.indexOf = function (element) {
    var current = head
    var index = 0
    while (current) {
      if (current.element === element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  this.remove = function (element) {
    var eleIndex = this.indexOf(element)
    if (eleIndex !== -1) {
      this.removeAt(eleIndex)
    } else {
      return null
    }
  }

  this.isEmpty = function () {
    return length === 0
  }

  this.size = function () {
    return length
  }

  this.getHead = function () {
    return head
  }

  this.toString = function () {
    var string = ''
    var current = head
    while (curret) {
      string = string + current.element
      current = current.next
    }
    return string
  }
}