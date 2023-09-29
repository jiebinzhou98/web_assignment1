var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('index',{title: 'Home' });
});
router.get('/home',function(req,res,next){
    res.render('home',{title: 'Home'})
})
router.get('/views/footer',function(req,res,next){
    res.render('footer',{title: 'footer'})
})
router.get('/views/header',function(req,res,next){
    res.render('header',{title: 'Header'})
})
router.get('/about',function(req,res,next){
    res.render('about',{title: 'About' });
});

router.get('/products',function(req,res,next){
    res.render('products',{title: 'Products' });
});

router.get('/contact',function(req,res,next){
    res.render('contact',{title: 'Contact' });
});
router.get('/services',function(req,res,next){
    res.render('services',{title: 'Services' });
});


module.exports = router;