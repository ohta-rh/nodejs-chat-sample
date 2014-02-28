
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
exports.admin = function(req, res){
  res.render('admin', { title: 'Express' });
};
exports.easel = function(req, res){
  res.render('easel', { title: 'Express' });
};
exports.log = function(req, res){
  res.render('log', { title: 'Express' });
};
