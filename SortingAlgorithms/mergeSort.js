function mergeSort (array) {
  array = mergeSortRec(array)
  function mergeSortRec (array) {
    var length = array.length
    if (length === 1) return array
    var mid = Math.floor(length/2)
    var left = array.slice(0, mid)
    var right = array.slice(mid, length)
    return merge(mergeSortRec(left), mergeSortRec(right))
  }
  function merge (left, right) {
    var leftIndex = 0
    var rightIndex = 0
    var result = []
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex++])
      } else {
        result.push(right[rightIndex++])
      }
    }
    while (leftIndex < left.length) {
      result.push(left[leftIndex++])
    }
    while (rightIndex < right.length) {
      result.push(right[rightIndex++])
    }
    return result
  }
}