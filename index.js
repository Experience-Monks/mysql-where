var db = require('mysql');
module.exports = function(where,join) {
  join = join || ' AND ';
  var query = [];
  var val;
  for (var key in where) {
    val = where[key];
    if (typeof val ==='string') {
      query.push(db.escapeId(key)+' = '+db.escape(val));
    } else {
      if (val.$lte!==undefined) query.push(db.escapeId(key)+' <= '+db.escape(val.$lte));
      if (val.$gte!==undefined) query.push(db.escapeId(key)+' >= '+db.escape(val.$gte));
      if (val.$lt!==undefined) query.push(db.escapeId(key)+' < '+db.escape(val.$lt));
      if (val.$gt!==undefined) query.push(db.escapeId(key)+' > '+db.escape(val.$gt));
      if (val.$ne!==undefined) query.push(db.escapeId(key)+' != '+db.escape(val.$ne));
    }
  }
  return query.join(join);
};
