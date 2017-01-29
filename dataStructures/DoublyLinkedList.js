function DoublyLinkedList () {
  var Node = function (element) {
    this.element = element
    this.prev = null
    this.next = null
  }
  var length = 0
  var head = null
  var end = null

  this.append = function (element) {
    var node = new Node(element)
    var current = head
    var previous
    if (!head) {
      head = node
      end = node
    } else {
      while (current.next) {
        previous = current
        current = current.next
      }
      current.next = node
      node.prev = current
      end = node
    }
    length++
  }

  this.insert = function (position, element) {
    if (position > -1 && position < length) {
      var node = new Node(element)
      var current = head
      var previous
      var index = 0
      if (position === 0) {
        if (!head) {
          head = node
          end = node
        } else {
          current.prev = node
          node.next = prev
          head = node
        }
      } else if (position === length) {
        current = end
        current.next = node
        end = node
        end.prev = current
      } else {
        while (index < position) {
          previous = current
          current = current.next
          index++
        }
        previous.next = node
        node.prev = previous
        node.next = current
        current.prev = node
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
        if (!head) {
          end = head
        } else {
          head.prev = null
        }
      } else if (position === length) {
        current = end
        previous = current.prev
        previous.next = null
        end = previous
      } else {
        while (index < position) {
          previous = current
          current = current.next
          index++
        }
        previous.next = current.next
        current.next.prev = previous
      }
      length--
      return current.element
    } else {
      return null
    }
  }
}