/**
 * Created by GInGI on 2014. 2. 5..
 */

exports.index = function(req, res){
  res.render('blog/index', { title: 'Blog Index' });
};

exports.create = function(req, res){
  res.render('blog/create', { title: 'Blog create' });
};