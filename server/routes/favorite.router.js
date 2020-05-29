const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// return faves
router.get('/favorite', (req, res) => {
    const queryText = `SELECT * FROM favorites`;
      pool.query(queryText)
          .then( (result) => {
              res.send(result.rows);
          })
          .catch( (error) => {
            console.log(`Error in fav router query: ${error}`);
          res.sendStatus(500);
      });
  });

  // sort and get faves
  router.get('/:id', (req, res) => {
    let queryText = '';
    let id = [];
    if(!id){
      queryText = `SELECT * FROM favorites`;
    } else {
      id = [req.params.id]
      queryText = `SELECT * FROM favorites WHERE playground_id=$1`; // user_id?
    }
      pool.query(queryText, id)
          .then( (result) => {
              res.send(result.rows);
          })
          .catch( (error) => {
            console.log(`Error in fav router get query: ${error}`);
          res.sendStatus(500);
      });
  });

  // add a new fave
router.post('/favorite', (req, res) => {
    console.log('in POST with:', req.body);
    let id = [req.body.gif, req.body.category];
    const queryText = `INSERT INTO favorites ("user_id", "playground_id") VALUES ($1, $2);`;
    pool.query(queryText, id)
    .then(result=>{
      res.sendStatus(201);
    }).catch(error=>{
      console.log('ERROR in fav router post', error);
      res.sendStatus(500);
    });
  });

  // update fave with an id
// router.put('/:favId', (req, res) => {
//     // req.body should maybe contain a playground_id to add to this fave
//     res.sendStatus(200);
//   });

  //delete?
//   router.delete('/', (req, res) => {
//     res.sendStatus(200);
//   });


module.exports = router;