var express = require("express");
var router=express.Router();

router.get("/",function(req,res,next){
    res.send("Employees Table");
});

router.get("/",function(req,res,next){
    res.send(
               client.query('SELECT * FROM employees', function (err, result) {
               if (err) {
                    console.log(err);
                    res.status(400).send(err);
               }
               res.render('employees/list', { title: "Employees", data: result.rows });
    }));

});

module.exports=router;
