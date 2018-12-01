function quickSort (array) {
  quick(array, 0, array.length - 1)
  var quick = function (array, left, right) {
    if (array.length > 1) {
      var index = partition(array, left, right)
      if (left < index - 1) {
        quick(array, left, index - 1)
      }
      if (index < right) {
        quick(array, index, right)
      }
    }
  }
  var partition = function (array, left, right) {
    var pivot = array[Math.floor((left + right) / 2)]
    var leftIndex = left
    var rightIndex = right
    while (leftIndex <= rightIndex) {
      while (array[leftIndex] < pivot) {
        leftIndex++
      }
      while (array[rightIndex] < pivot) {
        rightIndex--
      }
      if (leftIndex <= rightIndex) {
        swap(array, array[leftIndex], array[rightIndex])
        leftIndex++
        rightIndex--
      }
    }
    return leftIndex
  }
  var swap = function (array, left, right) {
    var temp = array[left]
    array[left] = array[right]
    array[right] = temp
  }
}