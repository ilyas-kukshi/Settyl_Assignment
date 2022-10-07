const express = require('express');

const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcrypt');
// const { router } = require('../app');
router = express.Router();
router.post('/signup' , (req, res, next) => {

    User.find({
        email: req.body.email
    })
    .exec()
    .then(user=> {
        if(user >= 1){
            return res.status(422).json({
                message: 'email already exists'
            })  
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
             if (err) {

                return res.status(500).json({
                    error: err
                });
             } else {
                 const user = new User({
                    _id: new mongoose.Types.ObjectId(),
                    email: req.body.email,
                    password: hash
                });

                user.save().
                then(result => {
                    console.log(result)
                    res.status(201).json({
                        message: 'User Created'
                    });
                })
                .catch(err=> {
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });
             }
        });
        }
    });  
   
});

router.delete("/:userid", (req, res, next)=> {
    User.findOneAndRemove({_id : req.params.userid}, (err, docs) => {
        
            res.status(201).json({
                message: "User Deleted",
              
            });
        
    });
    
   });    


module.exports = router;