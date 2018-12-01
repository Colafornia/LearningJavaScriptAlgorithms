function BinarySearchTree () {
  var Node = function (key) {
    this.key = key
    this.left = null
    this.right = null
  }
  var root = null

  this.insert = function (key) {
    var newNode = new Node(key)
    if (!root) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }

  this.inOrderTraverse = function (callback) {
    if (!root) return null
    inOrderTraverseNode(root, callback)
  }

  this.preOrderTraverse = function (callback) {
    if (!root) return null
    preOrderTraverseNode(root, callback)
  }

  this.postOrderTraverse = function (callback) {
    if (!root) return null
    postOrderTraverseNode(root, callback)
  }

  this.min = function () {
    return minNode(root)
  }

  this.max = function () {
    return maxNode(root)
  }

  this.search = function (key) {
    if (!root) return false
    return searchNode(root, key)
  }

  this.remove = function (key) {
    root = removeNode(root, key)
  }

  function insertNode(root, node) {
    if (node.key < root.key) {
      if (!root.left) {
        root.left = node
      } else {
        insertNode(root.left, node)
      }
    } else {
      if (!root.right) {
        root.right = node
      } else {
        insertNode(root.right, node)
      }
    }
  }

  function inOrderTraverseNode (node, callback) {
    inOrderTraverseNode(node.left, callback)
    callback(node.key)
    inOrderTraverseNode(node.right, callback)
  }

  function preOrderTraverseNode (node, callback) {
    callback(node.key)
    preOrderTraverseNode(node.left, callback)
    preOrderTraverseNode(node.right, callback)
  }

  function postOrderTraverseNode (node, callback) {
    postOrderTraverseNode(node.left, callback)
    postOrderTraverseNode(node.right, callback)
    callback(node.key)
  }

  function minNode (node) {
    if (node) {
      while (node && node.left) {
        node = node.left
      }
      return node.key
    } else {
      return null
    }
  }

  function maxNode (node) {
    if (node) {
      while (node && node.right) {
        node = node.right
      }
      return node.key
    } else {
      return null
    }
  }

  function searchNode (node, key) {
    if (!node) return false
    if (key < node.key) {
      searchNode(node.left, key)
    } else if (key > node.key) {
      searchNode(node.right, key)
    } else {
      return true
    }
  }

  function removeNode (node, key) {
    if (!node) return null
    if (key < node.key) {
      node.left = removeNode(node.left, key)
      return node
    } else if (key > node.key) {
      node.right = removeNode(node.right, key)
      return node
    } else {
      if (!node.left && !node.right) {
        node = null
        return node
      }
      if (!node.left) {
        node = node.right
        return node
      } else if (!node.right) {
        node = node.left
        return node
      }
      // 移除右侧子树中最小节点，并用其代替被移除节点
      var aux = minNode(node.right)
      node.key = aux.key
      node.right = removeNode(node.right, aux.key)
      return node
    }
  }

  function print (value) {
    console.log(value)
  }
}