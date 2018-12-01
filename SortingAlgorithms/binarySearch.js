import quickSrot from './quickSort.js'

function binarySearch (item, array) {
  quickSort(array)
  var low = 0
  var high = array.length - 1
  var middle
  var element
  while(low < high) {
    middle = Math.floor((low + high) / 2)
    element = array(middle)
    if (item < element) {
      high = middle - 1
    } else if (item > element) {
      low = middle + 1
    } else {
      return middle
    }
  }
  return -1
}