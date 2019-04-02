const assert = require('assert')
const find = (array, target) => {
  if (!array || Object.prototype.toString.call(array) !== '[object Array]'){
    return false
  }

  const cols = array.length
  const rows = array[0].length
  let c = 0
  let r = rows - 1
  while(c < cols && r >= 0) {
    if (array[c][r] === target) return true
    else if (array[c][r] > target) {
      r --
    } else if (array[c][r] < target) {
      c ++
    }
  }
  return false
}

const array = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

assert.equal(find(array, 5), true)
assert.equal(find(array, 20), false)
assert.equal(find(array, 30), true)
assert.equal(find(array, 18), true)
assert.equal(find(array, 25), false)

// 假设 m = cols、n = rows，则时间复杂度为 O(m+n), 空间复杂度为 S(1)