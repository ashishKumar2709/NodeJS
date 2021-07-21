const _ = require('lodash')

const items = [1,[2, [3, 4, [5, 6], 7], 8], 9]
const items2 = [[1,2,3], [4,5,6], 7,[8,9]]
const newItems = _.flattenDeep(items)
const newItems2 = _.flattenDeep(items2)
console.log(newItems)
console.log(newItems2)