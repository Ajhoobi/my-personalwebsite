var express = require('express');
var router = express.Router();
var jsonData = require( '../data/skillData.json');
var blogData = require('../data/blogData.json')
/* GET users listing. */


//const blog = JSON.parse(blogData);

router.get('/blog', function(req, res, next) {
  const delay = 2000
  try {
    setTimeout(() => {
      res.json({ data : blogData});
    }, delay);
   
   
  
  } catch (error) {
    console.error(error);
    next(error);
     
  }
        
  });


router.get('/', function(req, res, next) {
  const delay = 2000
  try {
    setTimeout(() => {
      res.json({ data : jsonData.data , cyber : jsonData.cyber});
    }, delay);
   
   
  
  } catch (error) {
    console.error(error);
    next(error);
     
  }
        
  });


  router.get('/blogfocus', function(req, res, next) {
    const delay = 100
    const paraMeter = req.query.hasOwnProperty('id')
    const query = req.query.id
    const blog = blogData.blog.filter( (id) => id.id === query )
   
    try {
      setTimeout(() => {
       if(paraMeter){
        if (query !== undefined && query.trim() !== '') {
          if (blog.length === 0) {
            res.json({ message : 'blog not found ' });
          }else {
            res.json({ data : blog });
          }
        } else {
          res.json({message:'ID parameter  is either not provided or has an empty value'});     
      }
    }else{
       res.json({message:'The object does not have an "id" property.'});
    } 
    }, delay);
         
      }  catch (error) {
        console.error(error);
        next(error);
          
        }        
    });
  

module.exports = router;







