const express = require('express');
const router = express.Router();
const { Receipt } = require('../database/models');

router.get('/', function(req, res, next) {
  Receipt.findAll()
    .then(receipts => res.json(receipts))
    .catch(next)
});

router.get('/:id', function(req, res, next) {
  Receipt.findByPk(req.params.id)
    .then(receipt => res.json(receipt))
    .catch(next)
});

router.post('/', async(req, res, next) => {
  const receipt = req.body;
  let builtReceipt = await model.create(receipt).catch(error =>{
    console.log(error);
  });

  if (builtReceipt) {
    res.status(200).send(builtReceipt)
  }
  else {
    res.status(404).send("Invalid receipt");
  }
});

router.delete('/:id', async (req, res, next) => {
  let num = req.params.id;
  const numberDeleted = await model.destroy({
    where: {
      id : num
    }
  }).catch(error =>{
    console.log(error);
  });
  if (numberDeleted != 0){
    res.status(200).send(`Deleted ${numberDeleted} number of rows with id ${num}.`)
  } 
  else{
    res.status(404).send(`Did not find any receipts with id ${num} to delete. `)
  }
});

module.exports = router;
