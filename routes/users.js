const express = require('express');
const router = express.Router();
const { User } = require('../database/models');

// router.get('/', function(req, res, next) {
//   User.findAll({
//     attributes: ['id', 'firstName']
//   })
//     .then(users => res.json(users))
//     .catch(next)
// });

router.get('/:id', function(req, res, next) {
  User.findByPk(req.params.id, 
    {attributes: ['id', 'firstName', 'lastName', 'username']})
    .then(user => res.json(user))
    .catch(next)
});

router.put('/login', function(req, res, next) {
  User.findOne({
    where: {
      username: req.body.username,
      password: req.body.password
    },
    attributes: ['id', 'firstName', 'lastName', 'username']
    }).then(user =>
      {if(user == null) {
        res.status(404).send("Invalid username and/or password");
      }
      else {
        res.status(200).json(user);
      }
      })
      .catch(next)
});

// router.put('/:id', async (req, res, next) => {
//   let userLogin = req.body;
//   let num = req.params.id;
//   User.findOne({
//     where:
// })

//   let modified = await model.update(
//   {
//     "firstName": modifiedUser.firstName,
//     "lastName": modifiedUser.lastName,
//     "email": modifiedUser.emailName,
//     "imageUrl": modifiedUser.imageUrl,
//     "gpa": modifiedUser.gpa,
//     "campusId": modifiedUser.CampusId
//   }, 
//   {
//     where : {
//       id : num
//     }
//   }).catch(error=>{console.log(error)});
//   if(modified) {
//     res.status(200).send(modified);
//   } 
//   else{
//     res.status(404).send(`did not find User`);
//   }
// });

router.post('/', async(req, res, next) => {
  const user = req.body;
  let builtUser = await model.create(user).catch(error =>{
    console.log(error);
  });

  if (builtUser) {
    res.status(200).send(builtUser)
  }
  else {
    res.status(404).send("Invalid user");
  }
});

// router.delete('/:id', async (req, res, next) => {
//   let num = req.params.id;
//   const numberDeleted = await model.destroy({
//     where: {
//       id : num
//     }
//   }).catch(error =>{
//     console.log(error);
//   });
//   if (numberDeleted != 0){
//     res.status(200).send(`Deleted ${numberDeleted} number of rows with id ${num}.`)
//   } 
//   else{
//     res.status(404).send(`Did not find any users with id ${num} to delete. `)
//   }
// });

// router.put('/:id', async (req, res, next) => {
//   let modifiedUser = req.body;
//   let num = req.params.id;
//   let modified = await model.update(
//   {
//     "firstName": modifiedUser.firstName,
//     "lastName": modifiedUser.lastName,
//     "email": modifiedUser.emailName,
//     "imageUrl": modifiedUser.imageUrl,
//     "gpa": modifiedUser.gpa,
//     "campusId": modifiedUser.CampusId
//   }, 
//   {
//     where : {
//       id : num
//     }
//   }).catch(error=>{console.log(error)});
//   if(modified) {
//     res.status(200).send(modified);
//   } 
//   else{
//     res.status(404).send(`did not find User`);
//   }
// });

module.exports = router;
