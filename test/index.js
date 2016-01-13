var createWhere = require('../index');
var test = createWhere({
  a: 'a',
  b: {$gte: 'b'},
  c: {$lte: 'c'},
  d: {$lt: 'd'},
  e: {$gt: 'e'},
  f: {$ne: 'f'}
});
var result = "`a` = 'a' AND `b` >= 'b' AND `c` <= 'c' AND `d` < 'd' AND `e` > 'e' AND `f` != 'f'";
console.log(test===result ? '\x1b[32m passed!' : '\x1b[31m failed!');