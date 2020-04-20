const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
const User = require('../../models/User')
// /api/users

const rolesArray = ["Investigator","Murderer","Scientist"];


router.get('/test',(req,res)=>{
    console.log("test");
})

const userSave=(availableRoles)=>{
    const user = {
        username: req.body,
        role: availableRoles[Math.floor(Math.random() * availableRoles.length)]
    };
    return user;
}   

router.post('/create',(req,res)=>{
    // debugger

    User.find().then((users)=>{
        const user  = new User( {
            username: req.body.username,
            player: users.length + 1
        })
        user.save().then((user) => res.json(user))
                .catch((err) => console.log(err));
    })
})

router.get('/index',(req,res)=>{

    User.find().then((users)=>{
        // console.log(Object.values(users).length)
        res.json(users)
    }).catch((err)=>{
        res.status(400).json(err)
    })


})

router.patch('/reset',(req,res)=>{
    User.updateMany({},{role: "Investigator"}).then((users)=>res.json(users))
})

router.patch('/roles',(req,res)=>{
    User.find().then((users)=>{
       let usersArray = Object.values(users);
        let rand1 = Math.floor(Math.random() * usersArray.length) + 1;
        let rand2 = Math.floor(Math.random() * usersArray.length) + 1;
        while (rand1 === rand2 ) {
            rand2 = Math.floor(Math.random() * usersArray.length) + 1;
        }
        // User;
        // debugger
        User.updateOne({player: rand1},{role: "Murderer"}).then((user1)=>{
            User.updateOne({player: rand2},{role: "Scientist"}).then((user2)=>{
                res.json(user2)
            })
        })
        
        // let availableRoles=["Murderer","Scientist"];
        // let changed = 0;
        // User.updateOne({player: 2},{role: "Investigator"}).then((user)=>res.json(user));
        // debugger
        // while(changed < 2) {
        //     // console.log("inside!")
        //     if(usersArray[rand].role === "Investigator"){
        //         usersArray[rand].role = availableRoles[changed];
        //         User.updateOne({player: 2},{role: "Investigator"}).then((user)=>res.json(user));
        //         changed +=1;
        //     }
        //     rand = Math.floor(Math.random() * usersArray.length);
        // }
        
        // User.updateMany({player: {$gte: rand},{role: }})
        // users.updateMany();
        // User.update({role: ""},{role: ""})
        // User.update({username: X}, {role: "Murderer"})
    }).catch((err)=>{
        res.status(400).json(err);
    })
})

router.delete('/gameOver',(req,res)=>{
    User.deleteMany({}).then((user)=>res.json(user));
})



module.exports = router

// router.get("/test", (req, res) => {
//   res.json({ msg: "This is the tweet route" });
// });

// router.get("/user/:user_id", (req, res) => {
//   Tweet.find({ user: req.params.user_id })
//     .then((tweets) => res.json(tweets))
//     .catch((err) => res.status(roo).json(err));
// });

// router.get("/:id", (req, res) => {
//   Tweet.findById(req.params.id)
//     .then((tweet) => res.json(tweet))
//     .catch((err) => res.status(400).json(err));
// });

// router.get("/", (req, res) => {
//   Tweet.find()
//     .sort({ date: -1 })
//     .then((tweets) => res.json(tweets))
//     .catch((err) => res.status(400).json(err));
// });
// //passport.authenticate("jwt")
// router.post("/", { session: false }, (req, res) => {
//   const { isValid, errors } = validateTweetInput(req.body);

//   if (!isValid) {
//     return res.status(400).json(errors);
//   }

//   const newTweet = new Tweet({
//     user: req.user.id,
//     text: req.body.text,
//   });

//   newTweet.save().then((tweet) => res.json(tweet));
// });









//////////
// const express = require("express");
// const router = express.Router();
// const User = require("../../models/User");
// const bcrypt = require("bcryptjs");
// const keys = require("../../config/key");
// const validateRegisterInput = require("../../validations/register");
// const validateLoginInput = require("../../validations/login");
// const jwt = require("jsonwebtoken");
// router.get("/test", (req, res) => {
//   res.json({ msg: "This is the user route" });
// });
// router.post("/register", (req, res) => {
//   const { errors, isValid } = validateRegisterInput(req.body);

//   if (!isValid) {
//     return res.status(400).json(errors);
//   }

//   User.findOne({ email: req.body.email }).then((user) => {
//     if (user) {
//       // Use the validations to send the error
//       errors.email = "Email already exists";
//       return res.status(400).json(errors);
//     } else {
//       const newUser = new User({
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password,
//       });
//       //   newUser.save().then(user => res.send(user)).catch(err =>res.send(err))
//       bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newUser.password, salt, (err, hash) => {
//           if (err) throw err;
//           newUser.password = hash;
//           newUser
//             .save()
//             .then((user) => res.json(user))
//             .catch((err) => console.log(err));
//         });
//       });
//     }
//   });
// });

// router.post("/login", (req, res) => {
//   const { errors, isValid } = validateLoginInput(req.body);

//   if (!isValid) {
//     return res.status(400).json(errors);
//   }

//   const email = req.body.email;
//   const password = req.body.password;

//   User.findOne({ email }).then((user) => {
//     if (!user) {
//       // Use the validations to send the error
//       errors.email = "User not found";
//       return res.status(404).json(errors);
//     }

//     bcrypt.compare(password, user.password).then((isMatch) => {
//       if (isMatch) {
//         // res.json({ msg: "Success" });
//         const payload = {
//           id: user.id,
//           handle: user.handle,
//           email: user.email,
//         };
//         jwt.sign(
//           payload,
//           keys.secretOrKey,
//           { expiresIn: 3600 },
//           (err, token) => {
//             res.json({
//               success: true,
//               token: "Bearer " + token,
//             });
//           }
//         );
//       } else {
//         // And here:
//         errors.password = "Incorrect password";
//         return res.status(400).json(errors);
//       }
//     });
//   });
// });
// module.exports = router;
