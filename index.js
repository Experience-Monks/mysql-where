var db = require('mysql');
module.exports = function(where,join) {
  join = join || ' AND ';
  var query = [];
  var val;
  Object.keys(where).forEach(function(key) {
    val = where[key];
    if (val !== null && typeof val === 'object') {
      if (val.$lte!==undefined) query.push(db.escapeId(key)+' <= '+db.escape(val.$lte));
      if (val.$gte!==undefined) query.push(db.escapeId(key)+' >= '+db.escape(val.$gte));
      if (val.$lt!==undefined) query.push(db.escapeId(key)+' < '+db.escape(val.$lt));
      if (val.$gt!==undefined) query.push(db.escapeId(key)+' > '+db.escape(val.$gt));
      if (val.$ne!==undefined) query.push(db.escapeId(key)+' != '+db.escape(val.$ne));
    } else {
      query.push(db.escapeId(key)+' = '+db.escape(val));
    }
  });
  return query.join(join);
};
