# mysql-where

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

A utility to create clean WHERE statements from an object using the mysql node library

## Usage

[![NPM](https://nodei.co/npm/mysql-where.png)](https://www.npmjs.com/package/mysql-where)

This module will create clean and escaped WHERE statements from an object. It uses a syntax similar to mondob to determine the operators. Simply pass an object to it and will return a string for use in your sql statements.

```js
createWhere({
  category: 'blog',
  date: {$gte: '2016-01-12', $lte: '2016-01-14'},
  author: {$ne: 'steve'}
});
// returns "`category` = 'blog' AND `date` <= '2016-01-14' AND `date` >= '2016-01-12' AND `author` != 'steve'"
```

Here is how you use it with the mysql library.

```js
var createWhere = require('mysql-where');
db.query('SELECT * FROM table WHERE '+createWhere({
  category: 'blog',
  date: {$gte: '2016-01-12', $lte: '2016-01-14'},
  author: {$ne: 'steve'}
}),function(err,rows) {
  
});

```

### `createWhere(statement,join=' AND ')`

`statement` Any normal key / value pairs will be escaped properly and join with a '=' in your where statement. There are also 5 special keys to change there operator.

`$gte` equates to >=  
`$lte` equates to <=  
`$gt` equates to >  
`$lt` equates to <  
`$ne` equates to !=  

`join` By default these are all joined via ' AND ' but you can pass in a second parameter to act as a different joiner, such as ' OR '

## License

MIT, see [LICENSE.md](http://github.com/njam3/mysql-where/blob/master/LICENSE.md) for details.
